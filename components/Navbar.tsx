// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
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

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/about", label: t('nav.about') },
    { href: "/services", label: t('nav.services') },
    { href: "/contact", label: t('nav.contact') },
  ];

  const isActive = (path: string) => pathname === path;

  if (loading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">GIBORA</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">ENGINEERING PLC</p>
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
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-200 dark:border-gray-700"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="relative group z-10">
              <div className="flex items-center gap-3">
                {/* Logo Image - No background color */}
                <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/gibora-logo.jpg"
                    alt="Gibora Engineering Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    priority
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GIBORA
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 leading-tight">
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
                      ? "text-sky-500 dark:text-sky-300"
                      : "text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-300"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-sky-500 rounded-full" />
                  )}
                </Link>
              ))}
              <LanguageSwitcher />
              <ThemeToggle />
              
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-[9999] transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-[10000] transition-all duration-300 transform md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/gibora-logo.jpg"
                alt="Gibora Engineering Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">GIBORA</span>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 leading-tight">
                ENGINEERING PLC
              </p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
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
                      ? "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 border-r-4 border-sky-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

          <div className="px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</span>
              <LanguageSwitcher />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <div className="p-6">
            <button className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md">
              {t('nav.getQuote')}
            </button>
          </div>

          <div className="p-6 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>© 2024 Gibora Engineering PLC</p>
            <p className="mt-1">Building the future of Ethiopian connectivity</p>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  );
}