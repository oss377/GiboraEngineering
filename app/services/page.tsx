// app/services/page.tsx
"use client";

import { 
  TowerControl as Tower, 
  Wifi, 
  Zap, 
  Server, 
  CheckCircle,
  Clock,
  Shield,
  Globe
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesPage() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  const services = [
    {
      icon: Tower,
      title: t('capabilities.bts.title'),
      description: t('capabilities.bts.description'),
      features: [
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
      features: [
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
      features: [
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
      features: [
        t('capabilities.network.points.0'),
        t('capabilities.network.points.1'),
        t('capabilities.network.points.2'),
        t('capabilities.network.points.3')
      ]
    }
  ];

  const stats = [
    { number: "175+", label: t('overview.sites'), icon: Globe },
    { number: "320km", label: t('overview.fiber'), icon: Wifi },
    { number: "24/7", label: t('technical.support'), icon: Clock },
    { number: "100%", label: t('technical.standards'), icon: Shield },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335871-4d2e4f2e8b5a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">{t('nav.services')}</h1>
            <p className="text-xl text-gray-200 dark:text-gray-300">
              {t('capabilities.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-sky-100 dark:bg-sky-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3">
                  <div className="lg:col-span-1 bg-gradient-to-br from-sky-400 to-sky-600 p-8 flex flex-col justify-center items-center text-center">
                    <service.icon className="w-16 h-16 text-white mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                    <div className="w-12 h-1 bg-white/30 rounded-full" />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{service.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-sky-500 dark:text-sky-300 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-400 to-sky-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('contact.sendMessage')}</h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {t('contact.sendMessage')}
          </a>
        </div>
      </section>
    </main>
  );
}