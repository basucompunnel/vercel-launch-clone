"use client";

import Header from "../Header";
import HeroSection from "../HeroSection";
import TrustedCompanies from "../TrustedCompanies";
import FeaturesSection from "../FeaturesSection";
import CloudInfoSection from "../CloudInfoSection";
import SupportSection from "../SupportSection";
import EnterpriseSection from "../EnterpriseSection";
import PartialPrerenderingSection from "../PartialPrerenderingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAFA]">
        <HeroSection />
        <TrustedCompanies />
        <FeaturesSection />
        <CloudInfoSection />
        <SupportSection />
        <EnterpriseSection />
        <PartialPrerenderingSection />
      </main>
    </>
  );
}
