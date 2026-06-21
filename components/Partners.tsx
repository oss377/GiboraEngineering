// components/Partners.tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";

const partners = [
  { name: "BTS & WIRELESS NETWORK ROLLOUT" },
  { name: "FIBER OPTIC DEPLOYMENT" },
  { name: "CRITICAL POWER SYSTEMS" },
  { name: "ENTERPRISE IT INFRASTRUCTURE" },
  { name: "FIXED NETWORK MAINTENANCE" },
  { name: "IT SOLUTION & SERVICE SUPPLY" },
];

export default function Partners() {
  const { loading } = useTranslation();

  if (loading) {
    return <div className="py-1.5 text-center text-white text-[10px] sm:text-xs bg-[#D4AF37]">Loading...</div>;
  }

  // Duplicate for seamless infinite scroll
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-1.5 sm:py-2 bg-[#D4AF37] overflow-hidden border-y border-[#C49A2C]/20">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-rtl">
          {allPartners.map((partner, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 mx-3 sm:mx-5 md:mx-6 py-0.5 sm:py-1"
            >
              <span className="text-white text-[10px] sm:text-xs md:text-sm whitespace-nowrap font-medium tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 20s linear infinite;
          width: max-content;
        }
        @media (max-width: 640px) {
          .animate-marquee-rtl {
            animation-duration: 15s;
          }
        }
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}