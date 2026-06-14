// components/TechnicalMobilization.tsx
"use client";

import { Truck, Wrench, Target, Shield } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function TechnicalMobilization() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">Loading...</div>
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
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">4. TECHNICAL MOBILIZATION</h2>
          <div className="w-20 h-1 bg-sky-300 mx-auto mb-6" />
        </div>

        {/* Main Card with Image Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Left Side - Text Content Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-400 to-sky-500 p-5">
              <h3 className="text-xl font-bold text-white">Elite Infrastructure Base</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Our robust fleet and modern tool matrix allow for simultaneous deployment across multiple remote corridors:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg flex-shrink-0">
                    <Truck className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">4WD field-ready utility fleet</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">optimized for challenging terrains</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg flex-shrink-0">
                    <Wrench className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Advanced core-alignment Fusion Splicing</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">machinery for precision deployments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg flex-shrink-0">
                    <Target className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Precision OTDR</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">(Optical Time-Domain Reflectometer) testing suites</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Certified Rigging & Safety</span>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">climbing and high-altitude safety equipment arrays</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] lg:h-auto group">
            <Image
              src="/technical-mobilization.jpg"
              alt="Technical Mobilization"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <p className="text-white text-sm font-medium text-center">Ready for deployment across all regions of Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards - 4 Cards Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition-all duration-300 group-hover:scale-110">
                <asset.icon className="w-8 h-8 text-sky-500 dark:text-sky-300" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">{asset.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{asset.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-sky-800 dark:bg-sky-950 text-white p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-sky-200 text-sm">Round-the-clock technical field support teams ready for deployment</p>
          </div>
          <div className="bg-sky-700 dark:bg-sky-900 text-white p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-4xl font-bold mb-2">Zero</div>
            <p className="text-sky-200 text-sm">Accident mandate across all high-altitude tower operations</p>
          </div>
          <div className="bg-sky-600 dark:bg-sky-800 text-white p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-sky-200 text-sm">Compliance with global telecom standards</p>
          </div>
        </div>

        {/* Additional Info from Profile */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Every technician undergoes rigorous EHS training and utilizes certified PPE across all operations
          </p>
        </div>
      </div>
    </section>
  );
}