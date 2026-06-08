// components/QHSEVision.tsx
"use client";

import { ShieldCheck, ClipboardCheck, Eye } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function QHSEVision() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <section id="vision" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('qhv.safety')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('qhv.safetyText')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ClipboardCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('qhv.quality')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('qhv.qualityText')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t('qhv.vision')}</h3>
                <p className="text-gray-600 dark:text-gray-400 italic">"{t('qhv.visionText')}"</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092335871-4d2e4f2e8b5a?auto=format&fit=crop&q=80&w=2070"
                alt="Engineering Team"
                className="w-full h-80 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-blue-900/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}