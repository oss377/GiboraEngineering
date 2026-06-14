// components/ProjectsPortfolio.tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";

const projects = [
  {
    project: "Negele-Filtu Backbone Project",
    client: "Ethio telecom",
    year: "2026",
    metric: "Critical Infrastructure Delivery"
  },
  {
    project: "Macro BTS Site Rollout",
    client: "Safaricom Ethiopia",
    year: "2023–2025",
    metric: "175 Multi-Region Sites"
  },
  {
    project: "Backbone Fiber Expansion",
    client: "Safaricom Ethiopia",
    year: "2024–2025",
    metric: "320 Kilometers Total Expansion"
  },
  {
    project: "Metro Fiber Infrastructure",
    client: "Huawei / Sino Hydro",
    year: "2024–2025",
    metric: "32 Kilometers (Addis/Harar)"
  },
  {
    project: "Data Center & ISP Loop",
    client: "Tria Trading",
    year: "2023–2025",
    metric: "Centralized Node Provisioning"
  }
];

export function ProjectsPortfolio() {
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-sky-300 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-900 dark:bg-gray-950 text-white">
                <th className="px-6 py-4 text-left">{t('projects.project')}</th>
                <th className="px-6 py-4 text-left">{t('projects.client')}</th>
                <th className="px-6 py-4 text-left">{t('projects.year')}</th>
                <th className="px-6 py-4 text-left">{t('projects.metric')}</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <tr key={idx} className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition ${idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
                  <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">{project.project}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{project.client}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{project.year}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold">{project.metric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{t('projects.partnerships')}:</span> Ethio telecom · Safaricom · Huawei · Nokia · Sino Hydro · Omega Eng. · Tria Trading · FOA
          </p>
        </div>
      </div>
    </section>
  );
}