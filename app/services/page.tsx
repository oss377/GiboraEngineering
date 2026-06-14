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
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      ],
      gradient: "from-sky-500 to-blue-600"
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
      ],
      gradient: "from-sky-500 to-cyan-600"
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
      ],
      gradient: "from-sky-500 to-emerald-600"
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
      ],
      gradient: "from-sky-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "175+", label: t('overview.sites'), icon: Globe, delay: "delay-0" },
    { number: "320km", label: t('overview.fiber'), icon: Wifi, delay: "delay-100" },
    { number: "24/7", label: t('technical.support'), icon: Clock, delay: "delay-200" },
    { number: "100%", label: t('technical.standards'), icon: Shield, delay: "delay-300" },
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Attractive Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="Gibora Engineering Services"
            fill
            className="object-cover"
            priority
          />
          {/* Multiple Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-950/95 via-gray-900/90 to-black/85 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          {/* Animated Badge */}
          
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          
          
        
          
         
        </div>
      </section>

      {/* Stats Section - Animated */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`text-center group animate-fade-in-up ${stat.delay}`}
              >
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/30 dark:to-sky-800/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rounded-full transition-all duration-500">
                  <stat.icon className="w-8 h-8 text-sky-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Stylish Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/30 px-4 py-1.5 rounded-full mb-4">
              <Tower className="w-3 h-3 text-sky-500" />
              <span className="text-sky-600 dark:text-sky-400 text-xs font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Core Capabilities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Colored Top Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-br ${service.gradient} p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 pl-1">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid sm:grid-cols-2 gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 group/feature">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-200" />
                        <span className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Stylish */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600">
        <div className="container mx-auto px-6 text-center">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6">
              <ArrowRight className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">Get Started</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Network?
            </h2>
            
            <p className="text-sky-100 text-base mb-8 max-w-md mx-auto">
              {t('contact.subtitle')}
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {t('contact.sendMessage')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}