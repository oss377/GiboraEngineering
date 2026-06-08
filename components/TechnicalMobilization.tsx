// components/TechnicalMobilization.tsx
"use client";

import { Truck, Wrench, Target, Shield } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function TechnicalMobilization() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">Loading...</div>
      </div>
    );
  }

  const assets = [
    {
      icon: Truck,
      title: t('technical.fleet'),
      description: t('technical.fleetDesc')
    },
    {
      icon: Wrench,
      title: t('technical.splicing'),
      description: t('technical.splicingDesc')
    },
    {
      icon: Target,
      title: t('technical.otdr'),
      description: t('technical.otdrDesc')
    },
    {
      icon: Shield,
      title: t('technical.safety'),
      description: t('technical.safetyDesc')
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('technical.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('technical.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 card-hover">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <asset.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{asset.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{asset.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-900 dark:bg-blue-950 text-white p-6 rounded-xl transition-colors duration-300">
            <div className="text-3xl font-bold">24/7</div>
            <p className="text-blue-200">{t('technical.support')}</p>
          </div>
          <div className="bg-blue-800 dark:bg-blue-900 text-white p-6 rounded-xl transition-colors duration-300">
            <div className="text-3xl font-bold">Zero</div>
            <p className="text-blue-200">{t('technical.accident')}</p>
          </div>
          <div className="bg-blue-700 dark:bg-blue-800 text-white p-6 rounded-xl transition-colors duration-300">
            <div className="text-3xl font-bold">100%</div>
            <p className="text-blue-200">{t('technical.standards')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}