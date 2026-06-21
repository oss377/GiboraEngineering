// components/Footer.tsx
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <footer className="bg-[#1A1A1A] text-white border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-16 text-center text-[#CCCCCC]">Loading...</div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-[#D4AF37]/20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              GIBORA<span className="text-[#D4AF37]"> ENGINEERING</span>
            </h3>
            <p className="text-[#CCCCCC] text-sm leading-relaxed mt-4">
              {t('footer.company')}
            </p>
            {/* Gold accent line */}
            <div className="w-12 h-0.5 bg-[#D4AF37] mt-4" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-[#CCCCCC]">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition duration-300 hover:pl-1">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition duration-300 hover:pl-1">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition duration-300 hover:pl-1">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">{t('footer.contactInfo')}</h4>
            <div className="space-y-3 text-[#CCCCCC] text-sm">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-0.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>AA, Lemikura Sub city, Woreda 09</span>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 mt-0.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>+251 911 51 02 94</span>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 mt-0.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>info@giboraengineering.et</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">{t('footer.newsletter')}</h4>
            <p className="text-[#CCCCCC] text-sm mb-4">{t('footer.subscribe')}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-3 py-2.5 rounded-l-lg bg-[#222222] text-white placeholder-[#666666] text-sm outline-none focus:ring-2 focus:ring-[#D4AF37] border border-[#D4AF37]/20 focus:border-[#D4AF37] transition-all"
              />
              <button className="bg-[#D4AF37] hover:bg-[#C49A2C] px-4 rounded-r-lg transition-all duration-300 hover:scale-105 group">
                <Send className="w-4 h-4 text-[#1A1A1A] group-hover:rotate-12 transition-transform" />
              </button>
            </div>
            {/* Gold glow on focus */}
            <div className="mt-2 text-[#666666] text-xs">
              {t('footer.newsletterNote') || "Stay updated with our latest projects"}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[#666666] text-sm">
            &copy; {new Date().getFullYear()} Gibora Engineering PLC. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6 text-xs text-[#666666]">
            <span className="text-[#D4AF37]">✦</span>
            <span>{t('footer.built') || "Building Ethiopia's Digital Backbone"}</span>
            <span className="text-[#D4AF37]">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}