// components/CoreCapabilities.tsx
"use client";

import { TowerControl as Tower, Wifi, Zap, Server } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function CoreCapabilities() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">Loading...</div>
      </div>
    );
  }

  const capabilities = [
    {
      icon: Tower,
      title: t('capabilities.bts.title'),
      description: t('capabilities.bts.description'),
      points: [
        t('capabilities.bts.points.0'),
        t('capabilities.bts.points.1'),
        t('capabilities.bts.points.2'),
        t('capabilities.bts.points.3')
      ]
    },
    {
      icon: Wifi,
      title: t('capabilities.fiber.title'),
      description: t('capabilities.fiber.description'),
      points: [
        t('capabilities.fiber.points.0'),
        t('capabilities.fiber.points.1'),
        t('capabilities.fiber.points.2'),
        t('capabilities.fiber.points.3')
      ]
    },
    {
      icon: Zap,
      title: t('capabilities.energy.title'),
      description: t('capabilities.energy.description'),
      points: [
        t('capabilities.energy.points.0'),
        t('capabilities.energy.points.1'),
        t('capabilities.energy.points.2'),
        t('capabilities.energy.points.3')
      ]
    },
    {
      icon: Server,
      title: t('capabilities.network.title'),
      description: t('capabilities.network.description'),
      points: [
        t('capabilities.network.points.0'),
        t('capabilities.network.points.1'),
        t('capabilities.network.points.2'),
        t('capabilities.network.points.3')
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('capabilities.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 p-4 flex items-center gap-3">
                <cap.icon className="w-7 h-7 text-white" />
                <h3 className="text-xl font-semibold text-white">{cap.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <span className="text-blue-600 mt-0.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}