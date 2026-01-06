"use client";

import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import TrustedCompanies from "./component/TrustedCompanies";
import FeaturesSection from "./component/FeaturesSection";
import CloudInfoSection from "./component/CloudInfoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustedCompanies />
        <FeaturesSection />
        <CloudInfoSection />
      </main>
    </>
  );
}
