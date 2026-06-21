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
  Building2,
  Users,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutPage() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">
        <div className="text-xl text-[#CCCCCC]">Loading...</div>
      </div>
    );
  }

  // Helper function to safely parse JSON or return default value
  const safeParseJSON = (data: any, fallback: any) => {
    if (Array.isArray(data)) return data;
    if (typeof data === 'string') {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.warn('Failed to parse JSON:', data);
        return fallback;
      }
    }
    return fallback;
  };

  // Use static data with translation keys as fallback
  const getProjectsData = () => {
    const data = t('projects.projectsList');
    // If the translation returns the key itself (starts with 'projects.'), use fallback
    if (typeof data === 'string' && data.startsWith('projects.')) {
      return getDefaultProjects();
    }
    return safeParseJSON(data, getDefaultProjects());
  };

  const getMilestonesData = () => {
    const data = t('aboutPage.journey.milestones');
    if (typeof data === 'string' && data.startsWith('aboutPage.')) {
      return getDefaultMilestones();
    }
    return safeParseJSON(data, getDefaultMilestones());
  };

  const getPartnersData = () => {
    const data = t('qhv.partnersList');
    if (typeof data === 'string' && data.startsWith('qhv.')) {
      return getDefaultPartners();
    }
    return safeParseJSON(data, getDefaultPartners());
  };

  // Default fallback data
  const getDefaultProjects = () => [
    { project: "Negele-Filtu Backbone Project", client: "Ethio telecom", year: "2026", metric: "Critical Infrastructure Delivery" },
    { project: "Macro BTS Site Rollout", client: "Safaricom Ethiopia", year: "2023–2025", metric: "175 Multi-Region Sites" },
    { project: "Backbone Fiber Expansion", client: "Safaricom Ethiopia", year: "2024–2025", metric: "320 Kilometers Total Expansion" },
    { project: "Metro Fiber Infrastructure", client: "Huawei / Sino Hydro", year: "2024–2025", metric: "32 Kilometers (Addis/Harar)" },
    { project: "Data Center & ISP Loop", client: "Tria Trading", year: "2023–2025", metric: "Centralized Node Provisioning" }
  ];

  const getDefaultMilestones = () => [
    { year: "2020", title: "Founded", description: "Gibora Engineering PLC established" },
    { year: "2021", title: "First Major Contract", description: "Secured Ethio telecom partnership" },
    { year: "2023", title: "Safaricom Partnership", description: "Began BTS rollout projects" },
    { year: "2025", title: "Expansion", description: "320km Fiber deployment completed" }
  ];

  const getDefaultPartners = () => [
    "Ethio telecom", "Safaricom", "Huawei", "Nokia", "Sino Hydro", "Omega Eng.", "Tria Trading", "FOA"
  ];

  const strategicProjects = getProjectsData();
  const milestones = getMilestonesData();
  const partners = getPartnersData();

  return (
    <main className="bg-[#1A1A1A]">
      {/* Hero Section - About Page Identity */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="Gibora Engineering PLC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/90 to-[#1A1A1A]/85 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent z-10" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/80 backdrop-blur-md rounded-full px-3 py-1 border border-[#D4AF37]/30 mb-4">
            <Building2 className="w-3 h-3 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">{t('aboutPage.hero.badge') || 'About Us'}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            {t('aboutPage.hero.title') || 'About'}{' '}
            <span className="text-[#D4AF37]">
              Gibora Engineering PLC
            </span>
          </h1>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-[#CCCCCC] max-w-2xl mx-auto">
            {t('aboutPage.hero.subtitle') || 'Building Ethiopia\'s Digital Backbone'}
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('aboutPage.whoWeAre.title') || 'Who We Are'}</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-[#CCCCCC] text-sm leading-relaxed">
              {t('aboutPage.whoWeAre.description') || 'Gibora Engineering PLC is a premier telecom and IT infrastructure company in Ethiopia.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-[#222222] rounded-2xl p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-white">{t('aboutPage.whoWeAre.team') || 'Our Team'}</h3>
              </div>
              <p className="text-[#CCCCCC] text-sm leading-relaxed">
                {t('aboutPage.whoWeAre.teamDesc') || 'Dedicated professionals with expertise in telecom infrastructure deployment.'}
              </p>
            </div>
            <div className="bg-[#222222] rounded-2xl p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-white">{t('aboutPage.whoWeAre.certifications') || 'Certifications'}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#CCCCCC] text-sm">{t('aboutPage.whoWeAre.eca') || 'ECA Certified'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#CCCCCC] text-sm">{t('aboutPage.whoWeAre.foa') || 'FOA Partner'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#C49A2C] rounded-xl p-4 text-center text-[#1A1A1A] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold">175+</div>
              <p className="text-[#1A1A1A]/80 text-xs font-medium">{t('overview.sites') || 'Sites'}</p>
            </div>
            <div className="bg-[#222222] rounded-xl p-4 text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#D4AF37]">320km</div>
              <p className="text-[#CCCCCC] text-xs">{t('overview.fiber') || 'Fiber'}</p>
            </div>
            <div className="bg-[#222222] rounded-xl p-4 text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
              <p className="text-[#CCCCCC] text-xs">{t('aboutPage.stats.support') || 'Support'}</p>
            </div>
            <div className="bg-[#222222] rounded-xl p-4 text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-[#D4AF37]">100%</div>
              <p className="text-[#CCCCCC] text-xs">{t('aboutPage.stats.safety') || 'Safety'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Core Capabilities */}
      <section className="py-16 bg-[#222222]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('aboutPage.whatWeDo.title') || 'What We Do'}</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-[#CCCCCC] text-sm max-w-2xl mx-auto">
              {t('aboutPage.whatWeDo.subtitle') || 'Core capabilities in telecom and IT infrastructure'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1A] rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20">
                  <Tower className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-white">{t('capabilities.bts.title') || 'BTS & Wireless'}</h3>
              </div>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {t('capabilities.bts.description') || 'End-to-end BTS rollout solutions'}
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20">
                  <Globe className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-white">{t('capabilities.fiber.title') || 'Fiber Optic'}</h3>
              </div>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {t('capabilities.fiber.description') || 'Backbone & metro fiber deployment'}
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-white">{t('capabilities.energy.title') || 'Energy Solutions'}</h3>
              </div>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {t('capabilities.energy.description') || 'Critical power configurations'}
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-white">{t('capabilities.network.title') || 'Network Maintenance'}</h3>
              </div>
              <p className="text-[#CCCCCC] text-xs leading-relaxed">
                {t('capabilities.network.description') || 'Fixed network & data center loops'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('projects.title') || 'Our Projects'}</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-[#CCCCCC] text-sm max-w-2xl mx-auto">
              {t('projects.subtitle') || 'Delivering critical infrastructure across Ethiopia'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strategicProjects.length > 0 ? (
              strategicProjects.map((project: any, idx: number) => (
                <div key={idx} className="bg-[#222222] rounded-xl p-4 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{project.project}</h3>
                  <p className="text-[#CCCCCC] text-xs mb-2">{project.client}</p>
                  <p className="text-xs font-medium text-[#D4AF37]">{project.metric}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-[#CCCCCC]">
                No projects available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Commitment - QHSE */}
      <section className="py-16 bg-[#222222]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('qhv.title') || 'QHSE & Strategic Vision'}</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-[#CCCCCC] text-sm max-w-2xl mx-auto">
              QHSE & {t('aboutPage.whoWeAre.certifications') || 'Certifications'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] rounded-xl p-5 text-center border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="bg-[#D4AF37]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#D4AF37]/20">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{t('qhv.safety') || 'Safety First'}</h3>
              <p className="text-[#CCCCCC] text-xs">{t('qhv.safetyText') || 'Zero-accident mandate'}</p>
            </div>
            <div className="bg-[#1A1A1A] rounded-xl p-5 text-center border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="bg-[#D4AF37]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#D4AF37]/20">
                <ClipboardCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{t('qhv.quality') || 'Quality Controls'}</h3>
              <p className="text-[#CCCCCC] text-xs">{t('qhv.qualityText') || 'Global telecom compliance'}</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#C49A2C] rounded-xl p-5 text-center text-[#1A1A1A] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#1A1A1A]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="font-bold text-base mb-2">{t('qhv.vision') || 'Vision 2026'}</h3>
              <p className="text-[#1A1A1A]/80 text-xs">{t('qhv.visionText') || 'Building Ethiopia\'s digital future'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('aboutPage.journey.title') || 'Our Journey'}</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-[#CCCCCC] text-sm">{t('aboutPage.journey.subtitle') || 'Milestones in our growth'}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {milestones.length > 0 ? (
              milestones.map((milestone: any, idx: number) => (
                <div key={idx} className="bg-[#222222] rounded-xl p-4 text-center border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-300">
                  <div className="text-2xl font-bold text-[#D4AF37] mb-1">{milestone.year}</div>
                  <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto my-2" />
                  <h3 className="font-semibold text-white text-sm mb-1">{milestone.title}</h3>
                  <p className="text-[#CCCCCC] text-xs">{milestone.description}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-[#CCCCCC]">
                No milestones available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-[#222222] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-base font-semibold text-[#D4AF37] mb-4">{t('projects.partnerships') || 'Strategic Ecosystem Partners'}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {partners.length > 0 ? (
              partners.map((partner: string, idx: number) => (
                <span key={idx} className="bg-[#1A1A1A] text-[#CCCCCC] px-3 py-1 rounded-full text-xs border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all duration-300">
                  {partner}
                </span>
              ))
            ) : (
              <span className="text-[#CCCCCC] text-xs">No partners listed</span>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-[#D4AF37] to-[#C49A2C]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2">{t('aboutPage.cta.title') || 'Ready to Build the Future?'}</h2>
          <p className="text-[#1A1A1A]/80 text-sm mb-5">{t('aboutPage.cta.subtitle') || 'Let\'s connect and discuss your infrastructure needs'}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#D4AF37] px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all hover:scale-105 border border-[#D4AF37]/30"
          >
            {t('aboutPage.cta.button') || 'Contact Us'}
            <TrendingUp className="w-3 h-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}