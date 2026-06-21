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
        <div className="absolute inset-0 bg-[#1A1A1A]" />
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
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#1A1A1A]/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-transparent z-10" />
        
        {/* Telecom Infrastructure Background */}
        <img
          src="about-hero.jpg"
          alt="Telecom Infrastructure - Ethiopia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up animation-delay-100">
            {t('hero.title')}{" "}
            
            {/* titleHighlight1 - Gold */}
            <span className="text-[#D4AF37]">
              {t('hero.titleHighlight1')}
            </span>
            
            {/* Space between the two highlights */}
            {" "}
            
            {/* titleHighlight2 - Green */}
            <span className="text-[#2ECC71]">
              {t('hero.titleHighlight2')}
            </span>
          </h1>
          
          {/* Animated Underline - Gold */}
          <div className="w-16 h-0.5 bg-[#D4AF37] rounded-full mb-6 animate-fade-in-up animation-delay-200" />
          
          {/* Description */}
          <p className="text-base md:text-lg text-[#CCCCCC] mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-300">
            {t('hero.subtitle')}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <Link
              href="/services"
              className="group bg-[#D4AF37] hover:bg-[#C49A2C] text-[#1A1A1A] px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm"
            >
              {t('hero.exploreServices')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-sm"
            >
              {t('hero.contactUs')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-[#D4AF37]/40 flex justify-center">
          <div className="w-1 h-1.5 bg-[#D4AF37]/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}