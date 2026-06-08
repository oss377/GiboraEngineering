// components/CorporateOverview.tsx
"use client";

import { CheckCircle, Award, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function CorporateOverview() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <section id="overview" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('overview.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              {t('overview.engineeringLegacy')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t('overview.description1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t('overview.description2')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t('overview.ecaCertified')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('overview.ecaText')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t('overview.foaPartner')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('overview.foaText')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center transition-colors duration-300">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 dark:text-white">175+</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{t('overview.sites')}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center transition-colors duration-300">
              <Globe className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-800 dark:text-white">320km</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{t('overview.fiber')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}