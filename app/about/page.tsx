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
  Calendar,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutPage() {
  const { t, loading } = useTranslation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-xl text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  // Safe parsing with fallback to empty arrays
  let strategicProjects: any[] = [];
  let milestones: any[] = [];
  let partners: string[] = [];

  try {
    const projectsData = t('projects.projectsList');
    strategicProjects = Array.isArray(projectsData) ? projectsData : 
                       typeof projectsData === 'string' ? JSON.parse(projectsData) : [];
  } catch (error) {
    console.error('Failed to parse projectsList:', error);
    strategicProjects = [];
  }

  try {
    const milestonesData = t('aboutPage.journey.milestones');
    milestones = Array.isArray(milestonesData) ? milestonesData : 
                typeof milestonesData === 'string' ? JSON.parse(milestonesData) : [];
  } catch (error) {
    console.error('Failed to parse milestones:', error);
    milestones = [];
  }

  try {
    const partnersData = t('qhv.partnersList');
    partners = Array.isArray(partnersData) ? partnersData : 
              typeof partnersData === 'string' ? JSON.parse(partnersData) : [];
  } catch (error) {
    console.error('Failed to parse partnersList:', error);
    partners = [];
  }

  return (
    <main className="bg-white dark:bg-gray-900">
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
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-gray-900/90 to-black/85 z-10" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20 mb-4">
            <Building2 className="w-3 h-3 text-sky-300" />
            <span className="text-sky-300 text-xs">{t('aboutPage.hero.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            {t('aboutPage.hero.title')}{' '}
            <span className="bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-transparent">
              Gibora Engineering PLC
            </span>
          </h1>
          <div className="w-16 h-0.5 bg-sky-300 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            {t('aboutPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{t('aboutPage.whoWeAre.title')}</h2>
            <div className="w-12 h-0.5 bg-sky-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {t('aboutPage.whoWeAre.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{t('aboutPage.whoWeAre.team')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t('aboutPage.whoWeAre.teamDesc')}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{t('aboutPage.whoWeAre.certifications')}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{t('aboutPage.whoWeAre.eca')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{t('aboutPage.whoWeAre.foa')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-4 text-center text-white">
              <div className="text-2xl font-bold">175+</div>
              <p className="text-sky-100 text-xs">{t('overview.sites')}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-4 text-center text-white">
              <div className="text-2xl font-bold">320km</div>
              <p className="text-sky-100 text-xs">{t('overview.fiber')}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-4 text-center text-white">
              <div className="text-2xl font-bold">24/7</div>
              <p className="text-sky-100 text-xs">{t('aboutPage.stats.support')}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-4 text-center text-white">
              <div className="text-2xl font-bold">100%</div>
              <p className="text-sky-100 text-xs">{t('aboutPage.stats.safety')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Core Capabilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{t('aboutPage.whatWeDo.title')}</h2>
            <div className="w-12 h-0.5 bg-sky-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
              {t('aboutPage.whatWeDo.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg">
                  <Tower className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{t('capabilities.bts.title')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('capabilities.bts.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg">
                  <Globe className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{t('capabilities.fiber.title')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('capabilities.fiber.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{t('capabilities.energy.title')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('capabilities.energy.description')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{t('capabilities.network.title')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('capabilities.network.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{t('projects.title')}</h2>
            <div className="w-12 h-0.5 bg-sky-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strategicProjects.length > 0 ? (
              strategicProjects.map((project, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-sky-500 bg-sky-100 dark:bg-sky-900/30 px-2 py-0.5 rounded">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-sm mb-1">{project.project}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{project.client}</p>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{project.metric}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                No projects available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Commitment - QHSE */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{t('qhv.title')}</h2>
            <div className="w-12 h-0.5 bg-sky-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
              QHSE & {t('aboutPage.whoWeAre.certifications')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white text-base mb-2">{t('qhv.safety')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{t('qhv.safetyText')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ClipboardCheck className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white text-base mb-2">{t('qhv.quality')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{t('qhv.qualityText')}</p>
            </div>
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-5 text-center text-white shadow">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-base mb-2">{t('qhv.vision')}</h3>
              <p className="text-sky-100 text-xs">{t('qhv.visionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{t('aboutPage.journey.title')}</h2>
            <div className="w-12 h-0.5 bg-sky-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('aboutPage.journey.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {milestones.length > 0 ? (
              milestones.map((milestone, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-md transition">
                  <div className="text-2xl font-bold text-sky-500 mb-1">{milestone.year}</div>
                  <div className="w-8 h-0.5 bg-sky-300 mx-auto my-2" />
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{milestone.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{milestone.description}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                No milestones available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-4">{t('projects.partnerships')}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {partners.length > 0 ? (
              partners.map((partner, idx) => (
                <span key={idx} className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs shadow-sm">
                  {partner}
                </span>
              ))
            ) : (
              <span className="text-gray-500 dark:text-gray-400 text-xs">No partners listed</span>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{t('aboutPage.cta.title')}</h2>
          <p className="text-sky-100 text-sm mb-5">{t('aboutPage.cta.subtitle')}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-600 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            {t('aboutPage.cta.button')}
            <TrendingUp className="w-3 h-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}