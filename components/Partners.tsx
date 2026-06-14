// components/Partners.tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";

const partners = [
  { name: "Ethio telecom" },
  { name: "Safaricom" },
  { name: "Huawei" },
  { name: "Nokia" },
  { name: "Sino Hydro" },
];

export default function Partners() {
  const { loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Strategic Ecosystem Partners</h2>
          <div className="w-16 h-0.5 bg-sky-300 mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}