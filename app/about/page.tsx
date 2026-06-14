// app/about/page.tsx
"use client";

import { 
  CheckCircle, 
  Award, 
  Globe, 
  ShieldCheck, 
  ClipboardCheck, 
  Eye,
  Truck,
  Wrench,
  Target,
  Shield,
  TowerControl as Tower,
  Wifi,
  Zap,
  Server,
  Users,
  Building2,
  Calendar,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutPage() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  const stats = [
    { number: "175+", label: "BTS Sites Deployed", icon: Tower },
    { number: "320km", label: "Fiber Optic Cable", icon: Wifi },
    { number: "24/7", label: "Technical Support", icon: Shield },
    { number: "100%", label: "Safety Compliance", icon: CheckCircle },
  ];

  const capabilities = [
    {
      icon: Tower,
      title: "BTS & Wireless Rollout",
      description: "Comprehensive end-to-end Base Transceiver Station rollout solutions under accelerated operational schedules.",
      points: [
        "Tower erection and complex structural engineering assembly",
        "RF feeder lines configuration and multi-tier Antenna system installation",
        "RRU unit deployment, high-precision calibration, and grounding validation",
        "Structural alignment and multi-point security verification"
      ]
    },
    {
      icon: Wifi,
      title: "Fiber Optic Deployment",
      description: "High-tier long-haul transmission corridors designed for maximum data resilience.",
      points: [
        "Heavy infrastructure duct installation and trenching in congested urban corridors",
        "OPGW backbone fiber suspension along high-voltage utility pathways",
        "Metro Ring engineering path survey, architecture, and network layout design",
        "End-to-end loop characterization and fiber system performance validation"
      ]
    },
    {
      icon: Zap,
      title: "Critical Energy Solutions",
      description: "Ensuring maximum network uptime through resilient energy infrastructure deployment.",
      points: [
        "High-efficiency Rectifier setups and industrial DC power installations",
        "Extended backup battery string rollout and runtime optimization",
        "Hybrid Solar/Diesel/Power Grid system integration and synchronization",
        "Comprehensive preventive power load routine maintenance and safety monitoring"
      ]
    },
    {
      icon: Server,
      title: "Fixed Network Maintenance",
      description: "Strategic provisioning and ongoing maintenance cycles for high-availability enterprise networks.",
      points: [
        "Data Center OSP/ISP loop maintenance and path monitoring",
        "FTTH (Fiber to the Home) and ODN passive network rollout topologies",
        "Continuous system link diagnostics, loss validation, and loop testing",
        "Round-the-clock technical field support teams ready for deployment"
      ]
    }
  ];

  const technicalAssets = [
    { icon: Truck, title: "4WD Fleet", description: "Field-ready utility fleet optimized for challenging terrains" },
    { icon: Wrench, title: "Fusion Splicing", description: "Advanced core-alignment Fusion Splicing machinery" },
    { icon: Target, title: "OTDR Testing", description: "Precision Optical Time-Domain Reflectometer testing suites" },
    { icon: Shield, title: "Safety Equipment", description: "Certified Rigging, climbing, and high-altitude safety equipment arrays" },
  ];

  const partners = [
    "Ethio telecom", "Safaricom", "Huawei", "Nokia", 
    "Sino Hydro", "Omega Eng.", "Tria Trading", "FOA"
  ];

  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335871-4d2e4f2e8b5a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">About Gibora Engineering</h1>
            <p className="text-xl text-gray-200 dark:text-gray-300">
              Principal local force driving high-capacity telecom network transformations across Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 dark:text-sky-400 font-semibold">Who We Are</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Engineering Legacy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Incorporated in Addis Ababa, Gibora Engineering PLC is a principal local force driving high-capacity 
                telecom network transformations across Ethiopia.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We combine a highly skilled Ethiopian engineering force with unrivaled field execution capability 
                to deliver business-critical projects under demanding turnaround schedules.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">ECA Certified</h4>
                    <p className="text-gray-600 dark:text-gray-300">Holds a full operational Installation License for telecom infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">FOA Partnership</h4>
                    <p className="text-gray-600 dark:text-gray-300">Registered Fiber Optic Association Partner ensuring global standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/30 dark:to-sky-800/30 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092335871-4d2e4f2e8b5a?auto=format&fit=crop&q=80&w=2070"
                  alt="Engineering Team"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-sky-500" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">Established</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-sky-100 dark:bg-sky-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Capabilities</h2>
            <div className="w-20 h-1 bg-sky-300 mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive infrastructure solutions across the telecommunications spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-sky-400 to-sky-600 p-4 flex items-center gap-3">
                  <cap.icon className="w-7 h-7 text-white" />
                  <h3 className="text-xl font-semibold text-white">{cap.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{cap.description}</p>
                  <ul className="space-y-2">
                    {cap.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                        <span className="text-sky-500 dark:text-sky-300 mt-0.5">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Mobilization Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Mobilization</h2>
            <div className="w-20 h-1 bg-sky-300 mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Elite Infrastructure Base - Robust fleet and modern tool matrix for simultaneous deployment across multiple remote corridors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {technicalAssets.map((asset, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="bg-sky-100 dark:bg-sky-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <asset.icon className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{asset.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{asset.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-sky-800 dark:bg-sky-950 text-white p-6 rounded-xl transition-colors duration-300">
              <div className="text-3xl font-bold">24/7</div>
              <p className="text-sky-200">Round-the-clock technical field support</p>
            </div>
            <div className="bg-sky-700 dark:bg-sky-900 text-white p-6 rounded-xl transition-colors duration-300">
              <div className="text-3xl font-bold">Zero</div>
              <p className="text-sky-200">Accident mandate across all operations</p>
            </div>
            <div className="bg-sky-600 dark:bg-sky-800 text-white p-6 rounded-xl transition-colors duration-300">
              <div className="text-3xl font-bold">100%</div>
              <p className="text-sky-200">Compliance with global telecom standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* QHSE & Vision Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Safety First</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Zero-accident mandate. Every technician undergoes rigorous EHS training and utilizes 
                    certified PPE across all high-altitude tower operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-xl">
                  <ClipboardCheck className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Quality Controls</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Stringent compliance with global telecom standards. We provide validated testing reports 
                    for every handover to ensure long-term stability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-xl">
                  <Eye className="w-8 h-8 text-sky-500 dark:text-sky-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Vision 2026</h3>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "To remain the principal local catalyst for Ethiopia's digital acceleration, 
                    delivering robust connectivity infrastructure that empowers every region."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-800 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092335871-4d2e4f2e8b5a?auto=format&fit=crop&q=80&w=2070"
                  alt="Safety Training"
                  className="w-full h-80 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Strategic Ecosystem Partners</h2>
            <div className="w-16 h-0.5 bg-sky-300 mx-auto mt-3" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-sky-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build the Future?</h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            Partner with Gibora Engineering for reliable, high-quality telecom infrastructure solutions across Ethiopia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}