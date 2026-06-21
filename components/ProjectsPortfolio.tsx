// components/ProjectsPortfolio.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ChevronDown, Building, Users, Calendar, TrendingUp, ChevronRight } from "lucide-react";

const projects = [
  {
    project: "Negele-Filtu Backbone Project",
    client: "Ethio telecom",
    year: "2026",
    metric: "Critical Infrastructure Delivery",
    description: "Deployment of high-capacity backbone infrastructure across the Negele-Filtu region."
  },
  {
    project: "Macro BTS Site Rollout",
    client: "Safaricom Ethiopia",
    year: "2023-2025",
    metric: "175 Multi-Region Sites",
    description: "End-to-end site acquisition, construction, and integration for 175 base transceiver stations."
  },
  {
    project: "Backbone Fiber Expansion",
    client: "Safaricom Ethiopia",
    year: "2024-2025",
    metric: "320 Kilometers Total Expansion",
    description: "Comprehensive fiber optic network expansion to improve regional connectivity."
  },
  {
    project: "Metro Fiber Infrastructure",
    client: "Huawei / Sino Hydro",
    year: "2024-2025",
    metric: "32 Kilometers (Addis/Harar)",
    description: "Metro fiber deployment within Addis Ababa and Harar for enhanced urban network capacity."
  },
  {
    project: "Data Center & ISP Loop",
    client: "Tria Trading",
    year: "2023-2025",
    metric: "Centralized Node Provisioning",
    description: "Development of centralized ISP nodes and data center connectivity infrastructure."
  }
];

export function ProjectsPortfolio() {
  const { t, loading } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Auto-open if user navigates via anchor link
  useEffect(() => {
    if (window.location.hash === '#projects') {
      setIsOpen(true);
    }
  }, []);

  const toggleTable = () => setIsOpen(!isOpen);
  const toggleRow = (id: number) => setExpandedId(expandedId === id ? null : id);

  if (loading) {
    return (
      <div className="py-16 sm:py-20 md:py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 text-center text-[#CCCCCC] text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-10 sm:py-16 md:py-24 bg-[#1A1A1A] transition-colors duration-300">
      <div className="container mx-auto px-3 sm:px-6 max-w-5xl">
        {/* Toggle Button - Compact on Mobile */}
        <div 
          onClick={toggleTable}
          className="bg-[#D4AF37] text-[#1A1A1A] rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-[#C5A032] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                <span>📋</span>
                <span className="hidden sm:inline">{t('projects.title') || 'Project Portfolio'}</span>
                <span className="sm:hidden">Projects</span>
              </h2>
              <p className="text-[#1A1A1A]/70 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 hidden sm:block">
                {isOpen ? 'Click to close' : 'Click to view all projects'}
              </p>
            </div>
            <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[3000px] opacity-100 mt-4 sm:mt-6' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="rounded-xl border border-[#D4AF37]/20 overflow-hidden">
            {/* Desktop: Full Table Header */}
            <div className="hidden md:grid grid-cols-4 bg-[#D4AF37] text-[#1A1A1A] font-semibold text-xs md:text-base">
              <div className="px-4 md:px-6 py-3 md:py-4">{t('projects.project') || 'Project Focus'}</div>
              <div className="px-4 md:px-6 py-3 md:py-4">{t('projects.client') || 'Strategic Client'}</div>
              <div className="px-4 md:px-6 py-3 md:py-4">{t('projects.year') || 'Year'}</div>
              <div className="px-4 md:px-6 py-3 md:py-4">{t('projects.metric') || 'Scope'}</div>
            </div>

            {/* Mobile: Compact Header */}
            <div className="md:hidden bg-[#D4AF37] text-[#1A1A1A] font-semibold text-xs px-4 py-2.5">
              Projects ({projects.length})
            </div>

            {projects.map((project, idx) => (
              <div key={idx} className="border-b border-[#D4AF37]/10 last:border-b-0">
                {/* Desktop: Full Row */}
                <div
                  onClick={() => toggleRow(idx)}
                  className={`hidden md:grid grid-cols-4 cursor-pointer transition-all duration-300 ${
                    idx % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#222222]'
                  } hover:bg-[#D4AF37]/10`}
                >
                  <div className="px-4 md:px-6 py-3 md:py-4 font-medium text-white flex items-center gap-2">
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 ${expandedId === idx ? 'rotate-180' : ''}`} />
                    <span className="text-xs md:text-sm">{project.project}</span>
                  </div>
                  <div className="px-4 md:px-6 py-3 md:py-4 text-[#CCCCCC] text-xs md:text-sm">{project.client}</div>
                  <div className="px-4 md:px-6 py-3 md:py-4 text-[#CCCCCC] text-xs md:text-sm">{project.year}</div>
                  <div className="px-4 md:px-6 py-3 md:py-4 text-[#D4AF37] font-semibold text-xs md:text-sm">{project.metric}</div>
                </div>

                {/* Mobile: Compact Card */}
                <div
                  onClick={() => toggleRow(idx)}
                  className={`md:hidden cursor-pointer transition-all duration-300 ${
                    idx % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#222222]'
                  } hover:bg-[#D4AF37]/5 px-4 py-3`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <ChevronRight className={`w-3 h-3 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${expandedId === idx ? 'rotate-90' : ''}`} />
                        <h4 className="text-white font-medium text-xs sm:text-sm truncate">{project.project}</h4>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-[10px] sm:text-xs">
                        <span className="text-[#CCCCCC] flex items-center gap-0.5">
                          <Users className="w-3 h-3" />
                          {project.client}
                        </span>
                        <span className="text-[#CCCCCC] flex items-center gap-0.5">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                      <div className="mt-1">
                        <span className="inline-block px-2 py-0.5 border border-[#D4AF37]/30 text-[#D4AF37] text-[8px] sm:text-[9px] font-bold tracking-wider rounded">
                          {project.metric}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ml-2 ${expandedId === idx ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* Description - Expanded for both views */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedId === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-[#222222]/50 text-[#CCCCCC] italic text-[10px] sm:text-xs md:text-sm border-t border-[#D4AF37]/10">
                    {project.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}