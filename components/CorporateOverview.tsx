// components/CorporateOverview.tsx
"use client";

import { CheckCircle, Award, Globe } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function CorporateOverview() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center text-[#CCCCCC] text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-4">
        

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('overview.engineeringLegacy')}
            </h3>
            <p className="text-[#CCCCCC] text-sm leading-relaxed mb-3">
              {t('overview.description1')}
            </p>
            <p className="text-[#CCCCCC] text-sm leading-relaxed mb-5">
              {t('overview.description2')}
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">{t('overview.ecaCertified')}</h4>
                  <p className="text-[#CCCCCC] text-xs">{t('overview.ecaText')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">{t('overview.foaPartner')}</h4>
                  <p className="text-[#CCCCCC] text-xs">{t('overview.foaText')}</p>
                </div>
              </div>
            </div>

            {/* Two Cards Below Text */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#222222] p-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:scale-105 group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                <div className="bg-[#D4AF37]/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="text-xl font-bold text-white">175+</div>
                <p className="text-[#CCCCCC] text-xs mt-0.5">{t('overview.sites')}</p>
              </div>
              <div className="bg-[#222222] p-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:scale-105 group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                <div className="bg-[#D4AF37]/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Globe className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="text-xl font-bold text-white">320km</div>
                <p className="text-[#CCCCCC] text-xs mt-0.5">{t('overview.fiber')}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Full Height Image */}
          <div className="relative h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-full min-h-[320px]">
              <Image
                src="/corporate-image.jpg"
                alt="Gibora Engineering"
                fill
                className="object-cover"
                priority
              />
              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}