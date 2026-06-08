// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import { CorporateOverview } from "@/components/CorporateOverview";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { ProjectsPortfolio } from "@/components/ProjectsPortfolio";
import { TechnicalMobilization } from "@/components/TechnicalMobilization";
import { QHSEVision } from "@/components/QHSEVision";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CorporateOverview />
      <CoreCapabilities />
      <ProjectsPortfolio />
      <TechnicalMobilization />
      <QHSEVision />
      <Partners />
      <Footer />
    </main>
  );
}