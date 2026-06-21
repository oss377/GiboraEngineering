// components/Partners.tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";

const partners = [
  { name: "Ethio telecom" },
  { name: "Safaricom" },
  { name: "Huawei" },
  { name: "Nokia" },
  { name: "Sino Hydro" },
  { name: "Omega Eng." },
  { name: "Tria Trading" },
  { name: "FOA" },
];

export default function Partners() {
  const { loading } = useTranslation();

  if (loading) {
    return <div className="py-2 text-center text-white text-sm bg-[#D4AF37]">Loading...</div>;
  }

  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-2 bg-[#D4AF37] overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-rtl">
          {allPartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 mx-6 py-1">
              <span className="text-white text-sm whitespace-nowrap">
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
          animation: marquee-rtl 25s linear infinite;
          width: max-content;
        }
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}