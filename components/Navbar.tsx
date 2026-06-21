// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, loading } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/services", label: t('nav.services') },
    { href: "/contact", label: t('nav.contact') },
  ];

  const isActive = (path: string) => pathname === path;

  // Always use dark mode logo
  const logoSrc = "/original-logo.png";

  if (loading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#1A1A1A]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[#D4AF37]/20" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#D4AF37]">GIBORA</span>
                <p className="text-xs text-[#CCCCCC] -mt-1">ENGINEERING PLC</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/30"
            : "bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-[#D4AF37]/20"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="relative group z-10">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={logoSrc}
                    alt="Gibora Engineering Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-300"
                    style={{ objectPosition: "center" }}
                    priority
                  />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-[#D4AF37]">
                    GIBORA
                  </span>
                  <p className="text-xs text-[#CCCCCC] -mt-1 leading-tight">
                    ENGINEERING PLC
                  </p>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[#D4AF37]"
                      : "text-[#CCCCCC] hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition z-10 border border-[#D4AF37]/30"
              >
                <Menu className="w-6 h-6 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-[9999] transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#1A1A1A] shadow-2xl z-[10000] transition-all duration-300 transform md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src={logoSrc}
                alt="Gibora Engineering Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover scale-110"
                style={{ objectPosition: "center" }}
                priority
              />
            </div>
            <div>
              <span className="text-lg font-bold text-[#D4AF37]">GIBORA</span>
              <p className="text-xs text-[#CCCCCC] -mt-1 leading-tight">
                ENGINEERING PLC
              </p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition border border-[#D4AF37]/30"
          >
            <X className="w-6 h-6 text-[#D4AF37]" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-73px)]">
          <div className="flex-1 py-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-6 py-4 text-base font-medium transition ${
                    isActive(link.href)
                      ? "bg-[#D4AF37]/10 text-[#D4AF37] border-r-4 border-[#D4AF37]"
                      : "text-[#CCCCCC] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 my-4" />

          <div className="px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#CCCCCC]">Language</span>
              <LanguageSwitcher />
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20" />

          <div className="p-6 text-center text-xs text-[#CCCCCC]">
            <p>© 2024 Gibora Engineering PLC</p>
            <p className="mt-1 text-[#D4AF37]">Building Ethiopia's Digital Backbone</p>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  );
}