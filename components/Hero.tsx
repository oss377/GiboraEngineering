// components/Hero.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f0f0f]/85 z-10" />
        <Image
          src="/about-hero.jpg"
          alt="Telecommunication infrastructure"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-20 py-12 md:py-0">
        <div className="max-w-3xl mx-auto md:mx-0">
          
          {/* Desktop Location Badge - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 text-[#D4AF37] font-bold text-[10px] uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#D4AF37]"></span>
            Addis Ababa, Ethiopia • ECA Licensed
          </div>
          
          {/* Main Heading */}
          <h1 className="flex flex-col text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] text-white mb-3 md:mb-4">
            {/* Mobile Location Badge - Visible only on mobile */}
            <span className="text-sm md:text-base font-normal text-[#D4AF37] uppercase tracking-wider md:hidden mb-1">
              Addis Ababa, Ethiopia
            </span>
            <span className="text-[2rem] sm:text-[2.5rem] md:text-6xl">BUILDING</span>
            <span className="text-[2rem] sm:text-[2.5rem] md:text-6xl">ETHIOPIA'S</span>
            <span className="text-[#D4AF37] text-[2rem] sm:text-[2.5rem] md:text-6xl">DIGITAL</span>
            <span className="text-[#2ECC71] text-[2rem] sm:text-[2.5rem] md:text-6xl">BACKBONE</span>
          </h1>
          
          {/* Description - Full on desktop, Compact (2 lines) on mobile */}
          <div className="mb-4 md:mb-6">
            {/* Mobile: Compact description with line clamp */}
            <p className="md:hidden text-gray-400 text-xs leading-relaxed line-clamp-2">
              Turnkey telecom and IT infrastructure — from BTS rollout and fiber 
              deployment to enterprise networks. Nationwide capability, precision execution.
            </p>
            
            {/* Desktop: Full description */}
            <p className="hidden md:block text-gray-400 text-sm leading-relaxed max-w-xl">
              Turnkey telecom and IT infrastructure — from BTS rollout and fiber 
              deployment to enterprise networks. Nationwide capability, precision execution.
            </p>
          </div>
          
          {/* Buttons - Inline-flex on mobile */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {/* Projects Button */}
            <Link
              href="#projects"
              className="bg-[#D4AF37] hover:bg-[#C49A2C] text-[#0f0f0f] px-3 sm:px-5 py-1.5 sm:py-2 rounded font-bold text-[10px] sm:text-[11px] transition-all flex items-center gap-1 sm:gap-2 whitespace-nowrap"
            >
              <span className="hidden sm:inline">VIEW PROJECTS</span>
              <span className="sm:hidden">PROJECTS</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
            
            {/* Download Profile Button */}
            <Link
              href="/profile.pdf"
              className="border border-gray-600 hover:border-[#D4AF37] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded font-bold text-[10px] sm:text-[11px] transition-all flex items-center gap-1 sm:gap-2 whitespace-nowrap"
              download
            >
              <Download className="w-3 h-3" /> 
              <span className="hidden sm:inline">DOWNLOAD PROFILE</span>
              <span className="sm:hidden">PROFILE</span>
            </Link>
          </div>
          
          {/* Optional: Small decorative element */}
          <div className="hidden md:block mt-6">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}