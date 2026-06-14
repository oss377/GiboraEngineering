// components/CoreCapabilities.tsx
"use client";

import { TowerControl as Tower, Wifi, Zap, Server } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export function CoreCapabilities() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  const capabilities = [
    {
      icon: Tower,
      title: "BTS & Wireless Rollout (Turnkey Infrastructure)",
      description: "We deliver comprehensive, end-to-end Base Transceiver Station rollout solutions under accelerated operational schedules:",
      points: [
        "Tower erection and complex structural engineering assembly.",
        "RF feeder lines configuration and multi-tier Antenna system installation.",
        "RRU unit deployment, high-precision calibration, and grounding validation.",
        "Structural alignment and multi-point security verification."
      ]
    },
    {
      icon: Wifi,
      title: "Fiber Optic Deployment (Backbone & Metro Rings)",
      description: "Providing high-tier long-haul transmission corridors designed for maximum data resilience:",
      points: [
        "Heavy infrastructure duct installation and trenching in congested urban corridors.",
        "OPGW backbone fiber suspension along high-voltage utility pathways.",
        "Metro Ring engineering path survey, architecture, and network layout design.",
        "End-to-end loop characterization and fiber system performance validation.",
        "320 Kilometers Milestone: Successfully deployed for Safaricom Ethiopia."
      ]
    },
    {
      icon: Zap,
      title: "Critical Energy Solutions (Power Configuration)",
      description: "Ensuring maximum network uptime through resilient energy infrastructure deployment:",
      points: [
        "High-efficiency Rectifier setups and industrial DC power installations.",
        "Extended backup battery string rollout and runtime optimization.",
        "Hybrid Solar / Diesel / Power Grid system integration and synchronization.",
        "Comprehensive preventive power load routine maintenance and safety monitoring."
      ]
    },
    {
      icon: Server,
      title: "Fixed Network Maintenance (EBU & Data Center Loops)",
      description: "Strategic provisioning and ongoing maintenance cycles for high-availability enterprise networks:",
      points: [
        "Data Center OSP/ISP loop maintenance and path monitoring.",
        "FTTH (Fiber to the Home) and ODN passive network rollout topologies.",
        "Continuous system link diagnostics, loss validation, and loop testing.",
        "24/7 Support: Round-the-clock technical field support teams ready for deployment."
      ]
    }
  ];

  // Split capabilities: first two and last two
  const firstTwoCards = capabilities.slice(0, 2);
  const lastTwoCards = capabilities.slice(2, 4);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">2. CORE CAPABILITIES</h2>
          <div className="w-20 h-1 bg-sky-300 mx-auto" />
        </div>

        {/* Row 1: Cards on Left, Image on Right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            {firstTwoCards.map((cap, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-r from-sky-400 to-sky-500 p-5 flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <cap.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight">{cap.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{cap.description}</p>
                  <ul className="space-y-2">
                    {cap.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span className="text-sky-400 dark:text-sky-300 mt-0.5">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px] lg:h-auto min-h-[400px] group">
            <Image
              src="/capabilities-image-1.jpg"
              alt="BTS & Fiber Infrastructure"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <p className="text-white text-sm font-medium">Wireless & Fiber Infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Image on Left, Cards on Right (Swapped) */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px] lg:h-auto min-h-[400px] order-1 lg:order-1 group">
            <Image
              src="/capabilities-image-2.jpg"
              alt="Energy & Network Solutions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <p className="text-white text-sm font-medium">Energy & Fixed Network Solutions</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 order-2 lg:order-2">
            {lastTwoCards.map((cap, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-r from-sky-400 to-sky-500 p-5 flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <cap.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight">{cap.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{cap.description}</p>
                  <ul className="space-y-2">
                    {cap.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span className="text-sky-400 dark:text-sky-300 mt-0.5">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}