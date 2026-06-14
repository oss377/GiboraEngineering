// components/QHSEVision.tsx
"use client";

import { ShieldCheck, ClipboardCheck, Eye } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function QHSEVision() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">5. QHSE & STRATEGIC VISION</h2>
          <div className="w-20 h-1 bg-sky-300 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Content Cards */}
          <div className="space-y-6">
            {/* Safety First Card */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex items-start gap-4 p-6">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-xl group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition-all duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Safety First</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Zero-accident mandate. Every technician undergoes rigorous EHS training and utilizes certified PPE across all high-altitude tower operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Controls Card */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex items-start gap-4 p-6">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-xl group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition-all duration-300 group-hover:scale-110">
                  <ClipboardCheck className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Quality Controls</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Stringent compliance with global telecom standards. We provide validated testing reports for every handover to ensure long-term stability.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision 2026 Card */}
            <div className="group bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-sky-100 dark:border-sky-800">
              <div className="flex items-start gap-4 p-6">
                <div className="bg-sky-200 dark:bg-sky-800/50 p-3 rounded-xl group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-8 h-8 text-sky-600 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-2">Vision 2026</h3>
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "To remain the principal local catalyst for Ethiopia's digital acceleration, delivering robust connectivity infrastructure that empowers every region."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full min-h-[500px]">
            <Image
              src="/qhse-vision.jpg"
              alt="QHSE & Strategic Vision"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Multiple Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 via-transparent to-transparent" />
            
            {/* Decorative Elements */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Bottom Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <p className="text-white text-sm font-medium mb-2">STRATEGIC ECOSYSTEM PARTNERSHIPS:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Ethio telecom</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Safaricom</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Huawei</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Nokia</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Sino Hydro</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Omega Eng.</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">Tria Trading</span>
                  <span className="text-white/90 text-xs bg-white/20 px-2 py-1 rounded">FOA</span>
                </div>
              </div>
            </div>

            {/* Top Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-sky-500/80 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/30">
                <p className="text-white text-xs font-semibold">ISO Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section Below */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">STRATEGIC ECOSYSTEM PARTNERSHIPS:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Ethio telecom</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Safaricom</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Huawei</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Nokia</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Sino Hydro</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Omega Eng.</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">Tria Trading</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm">FOA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}