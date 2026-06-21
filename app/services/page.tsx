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
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">
        <div className="text-center text-[#CCCCCC]">Loading...</div>
      </div>
    );
  }

  // Helper function to safely get translation or return fallback
  const getTranslatedArray = (key: string, fallback: string[]) => {
    const value = t(key);
    if (Array.isArray(value)) return value;
    return fallback;
  };

  const services = [
    {
      icon: Tower,
      title: t('capabilities.bts.title') || "BTS & Wireless Rollout",
      description: t('capabilities.bts.description') || "End-to-end Base Transceiver Station rollout solutions",
      features: getTranslatedArray('capabilities.bts.points', [
        "Tower erection and structural engineering assembly",
        "RF feeder lines configuration and Antenna installation",
        "RRU unit deployment and calibration",
        "Structural alignment and security verification"
      ]),
      gradient: "from-[#D4AF37] to-[#C49A2C]"
    },
    {
      icon: Wifi,
      title: t('capabilities.fiber.title') || "Fiber Optic Deployment",
      description: t('capabilities.fiber.description') || "High-tier long-haul transmission corridors",
      features: getTranslatedArray('capabilities.fiber.points', [
        "Heavy infrastructure duct installation and trenching",
        "OPGW backbone fiber suspension",
        "Metro Ring engineering and network layout design",
        "End-to-end loop characterization and validation"
      ]),
      gradient: "from-[#D4AF37] to-[#C49A2C]"
    },
    {
      icon: Zap,
      title: t('capabilities.energy.title') || "Critical Energy Solutions",
      description: t('capabilities.energy.description') || "Resilient energy infrastructure deployment",
      features: getTranslatedArray('capabilities.energy.points', [
        "High-efficiency Rectifier setups and DC power installations",
        "Extended backup battery string rollout",
        "Hybrid Solar/Diesel/Power Grid integration",
        "Preventive power load maintenance and monitoring"
      ]),
      gradient: "from-[#D4AF37] to-[#C49A2C]"
    },
    {
      icon: Server,
      title: t('capabilities.network.title') || "Fixed Network Maintenance",
      description: t('capabilities.network.description') || "High-availability enterprise network maintenance",
      features: getTranslatedArray('capabilities.network.points', [
        "Data Center OSP/ISP loop maintenance",
        "FTTH and ODN passive network rollout",
        "Continuous system link diagnostics and testing",
        "24/7 technical field support teams"
      ]),
      gradient: "from-[#D4AF37] to-[#C49A2C]"
    }
  ];

  const stats = [
    { number: "175+", label: t('overview.sites') || "Sites", icon: Globe, delay: "delay-0" },
    { number: "320km", label: t('overview.fiber') || "Fiber Deployed", icon: Wifi, delay: "delay-100" },
    { number: "24/7", label: t('technical.support') || "Support", icon: Clock, delay: "delay-200" },
    { number: "100%", label: t('technical.standards') || "Compliance", icon: Shield, delay: "delay-300" },
  ];

  return (
    <main className="bg-[#1A1A1A]">
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/85 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/80 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#D4AF37]/30 mb-6 animate-fade-in-up">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-medium">Our Services</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Our{' '}
            <span className="text-[#D4AF37]">
              Services
            </span>
          </h1>
          
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6 animate-fade-in-up animation-delay-200" />
          
          <p className="text-lg md:text-xl text-[#CCCCCC] max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Building Ethiopia's Digital Backbone with comprehensive telecom and IT infrastructure solutions
          </p>
        </div>
      </section>

      {/* Stats Section - Animated */}
      <section className="py-16 bg-[#1A1A1A] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`text-center group animate-fade-in-up ${stat.delay}`}
              >
                <div className="bg-[#222222] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rounded-full transition-all duration-500 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-[#CCCCCC] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Stylish Cards */}
      <section className="py-20 bg-[#222222]">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
              <Tower className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Core Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-[#1A1A1A] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
              >
                {/* Colored Top Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-br ${service.gradient} p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[#CCCCCC] text-sm leading-relaxed mb-5 pl-1">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid sm:grid-cols-2 gap-2 pt-2 border-t border-[#D4AF37]/10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 group/feature">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-200" />
                        <span className="text-[#CCCCCC] text-xs leading-relaxed">
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
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#C49A2C] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-[#1A1A1A]/20">
            <ArrowRight className="w-3 h-3 text-[#1A1A1A]" />
            <span className="text-[#1A1A1A] text-xs font-medium">Get Started</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Ready to Transform Your Network?
          </h2>
          
          <p className="text-[#1A1A1A]/80 text-base mb-8 max-w-md mx-auto">
            {t('contact.subtitle') || "Let's build Ethiopia's digital future together"}
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-[#D4AF37]/30"
          >
            {t('contact.sendMessage') || "Contact Us"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  );
}