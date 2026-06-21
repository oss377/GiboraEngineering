// components/QHSEVision.tsx
"use client";

import { ShieldCheck, ClipboardCheck, Eye } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function QHSEVision() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-12 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center text-[#CCCCCC] text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Side - Content Cards */}
          <div className="space-y-3">
            {/* Safety First Card */}
            <div className="group bg-[#222222] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
              <div className="flex items-start gap-3 p-4">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg group-hover:bg-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110 border border-[#D4AF37]/20">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Safety First</h3>
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Zero-accident mandate. Rigorous EHS training and certified PPE across all high-altitude operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Controls Card */}
            <div className="group bg-[#222222] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
              <div className="flex items-start gap-3 p-4">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg group-hover:bg-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110 border border-[#D4AF37]/20">
                  <ClipboardCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Quality Controls</h3>
                  <p className="text-[#CCCCCC] text-sm leading-relaxed">
                    Global telecom standards compliance with validated testing reports for every handover.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision 2026 Card */}
            <div className="group bg-gradient-to-r from-[#D4AF37]/20 to-[#C49A2C]/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/50">
              <div className="flex items-start gap-3 p-4">
                <div className="bg-[#D4AF37]/30 p-2 rounded-lg group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-1">Vision 2026</h3>
                  <p className="text-[#CCCCCC] text-sm italic leading-relaxed">
                    "Principal local catalyst for Ethiopia's digital acceleration, delivering robust connectivity."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Compact Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl group h-[300px]">
            <Image
              src="/qhse-vision.jpg"
              alt="QHSE & Strategic Vision"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-transparent" />
            
            {/* Decorative Element */}
            <div className="absolute top-3 right-3">
              <div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-full p-1.5 border border-[#D4AF37]/30">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            {/* Gold accent border */}
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}