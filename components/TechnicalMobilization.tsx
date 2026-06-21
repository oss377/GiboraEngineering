// components/TechnicalMobilization.tsx
"use client";

import { Truck, Wrench, Target, Shield } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function TechnicalMobilization() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center text-[#CCCCCC]">Loading...</div>
      </div>
    );
  }

  const assets = [
    {
      icon: Truck,
      title: "4WD field-ready utility fleet",
      description: "optimized for challenging terrains"
    },
    {
      icon: Wrench,
      title: "Advanced core-alignment Fusion Splicing",
      description: "machinery for precision deployments"
    },
    {
      icon: Target,
      title: "Precision OTDR",
      description: "(Optical Time-Domain Reflectometer) testing suites"
    },
    {
      icon: Shield,
      title: "Certified Rigging & Safety",
      description: "climbing and high-altitude safety equipment arrays"
    }
  ];

  return (
    <section className="py-16 bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Bottom Cards - 4 Cards Row - Minimized */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-[#222222] p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
              <div className="bg-[#D4AF37]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40">
                <asset.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-semibold text-white mb-1 text-xs">{asset.title}</h3>
              <p className="text-[#CCCCCC] text-[10px] leading-tight">{asset.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics Cards - Minimized */}
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#C49A2C] text-[#1A1A1A] p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow-lg">
            <div className="text-3xl font-bold mb-1">24/7</div>
            <p className="text-[#1A1A1A]/80 text-xs font-medium">Round-the-clock technical field support teams ready for deployment</p>
          </div>
          <div className="bg-[#222222] text-white p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
            <div className="text-3xl font-bold mb-1 text-[#D4AF37]">Zero</div>
            <p className="text-[#CCCCCC] text-xs">Accident mandate across all high-altitude tower operations</p>
          </div>
          <div className="bg-[#222222] text-white p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-[#D4AF37]/20 hover:border-[#D4AF37]/40">
            <div className="text-3xl font-bold mb-1 text-[#D4AF37]">100%</div>
            <p className="text-[#CCCCCC] text-xs">Compliance with global telecom standards</p>
          </div>
        </div>

        {/* Additional Info from Profile - Minimized */}
        <div className="mt-10 text-center">
          <p className="text-[#CCCCCC] text-xs border-t border-[#D4AF37]/20 pt-4">
            Every technician undergoes rigorous EHS training and utilizes certified PPE across all operations
          </p>
        </div>
      </div>
    </section>
  );
}