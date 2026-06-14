// components/Footer.tsx
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-6 py-16 text-center">Loading...</div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">GIBORA<span className="text-sky-300">ENGINEERING</span></h3>
            <p className="text-gray-400 mb-4">{t('footer.company')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-sky-300 transition">{t('nav.home')}</Link></li>
              <li><Link href="/services" className="hover:text-sky-300 transition">{t('nav.services')}</Link></li>
              <li><Link href="/contact" className="hover:text-sky-300 transition">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-300" />
                <span>AA, Lemikura Sub city, Woreda 09</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-sky-300" />
                <span>+251 911 51 02 94</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-sky-300" />
                <span>info@giboraengineering.et</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.newsletter')}</h4>
            <p className="text-gray-400 text-sm mb-3">{t('footer.subscribe')}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 dark:text-gray-900 text-sm outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button className="bg-sky-400 hover:bg-sky-500 px-3 rounded-r-lg transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gibora Engineering PLC. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}