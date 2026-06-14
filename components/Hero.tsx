// components/Hero.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/95 via-gray-900/90 to-black/85" />
        <div className="relative z-20 text-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-gray-900/80 to-black/70 z-10" />
        <img
          src="/about-hero.jpg"
          alt="Telecom Infrastructure"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          {/* Animated Badge */}
          <div className="inline-block mb-5 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/30">
              <span className="text-sky-200 text-xs font-medium tracking-wide">Gibora Engineering PLC</span>
            </div>
          </div>
          
          {/* Main Title - Smaller */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up animation-delay-100">
            {t('hero.title')}{" "}
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          {/* Animated Underline */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mb-6 animate-fade-in-up animation-delay-200" />
          
          {/* Description - Smaller */}
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-300">
            {t('hero.subtitle')}
          </p>
          
          {/* Buttons - Smaller */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <Link
              href="/services"
              className="group bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm"
            >
              {t('hero.exploreServices')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm"
            >
              {t('hero.contactUs')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center">
          <div className="w-1 h-1.5 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}