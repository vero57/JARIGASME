"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SpecsSection from "@/components/SpecsSection";
import GallerySection from "@/components/GallerySection";
import PhilosophySection from "@/components/PhilosophySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="w-full pt-16 bg-surface-container-low min-h-screen">
          <div className="flex flex-col w-full text-on-surface">
            <HeroSection />
            <OverviewSection />
            <SpecsSection />
            <GallerySection />
            <PhilosophySection />
            <CTASection />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
