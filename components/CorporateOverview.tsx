// components/CorporateOverview.tsx
"use client";

import { CheckCircle, Award, Globe } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function CorporateOverview() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('overview.title')}</h2>
          <div className="w-20 h-1 bg-sky-300 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
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
                <CheckCircle className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t('overview.ecaCertified')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('overview.ecaText')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{t('overview.foaPartner')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('overview.foaText')}</p>
                </div>
              </div>
            </div>

            {/* Two Cards Below Text */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div className="bg-sky-100 dark:bg-sky-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition-colors">
                  <Award className="w-7 h-7 text-sky-500 dark:text-sky-300" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white">175+</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t('overview.sites')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div className="bg-sky-100 dark:bg-sky-900/30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition-colors">
                  <Globe className="w-7 h-7 text-sky-500 dark:text-sky-300" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white">320km</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{t('overview.fiber')}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Full Height Image */}
          <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src="/corporate-image.jpg"
                alt="Gibora Engineering"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}