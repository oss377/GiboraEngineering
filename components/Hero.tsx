// components/Hero.tsx
"use client";

import { Network, Zap, Wifi, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-gray-900/90 to-black/85" />
        <div className="relative z-20 text-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - stays dark in both modes for better contrast */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-gray-900/90 to-black/85 z-10" />
        <img
          src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=2070"
          alt="Telecom Infrastructure"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="flex justify-center gap-4 mb-6 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <Network className="w-8 h-8 text-blue-400" />
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <Wifi className="w-8 h-8 text-blue-400" />
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          {t('hero.title')}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {t('hero.titleHighlight')}
          </span>
        </h1>
        
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto animate-slide-up animation-delay-200">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-400">
          <Link
            href="/services"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            {t('hero.exploreServices')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            href="/contact"
            className="backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            {t('hero.contactUs')}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}