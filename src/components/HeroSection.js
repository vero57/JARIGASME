"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="overview"
      className="w-full border-b border-outline-variant/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 font-label-mono-sm text-xs uppercase tracking-widest text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="font-display-hero text-5xl lg:text-7xl text-primary tracking-tight leading-none">
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>
          </div>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              className="inline-flex items-center justify-center font-label-mono-sm text-xs uppercase tracking-wider bg-primary-container text-on-primary px-8 py-3.5 hover:bg-secondary transition-colors duration-150"
              href="#introduction"
            >
              {t.hero.exploreBtn}
            </Link>
            <Link
              className="inline-flex items-center justify-center font-label-mono-sm text-xs uppercase tracking-wider text-primary border border-primary/20 hover:border-primary hover:bg-surface-container-high px-8 py-3.5 transition-colors duration-150"
              href="#specifications"
            >
              {t.hero.specsBtn}
            </Link>
          </div>
          <div className="pt-8 border-t border-outline-variant/40 w-full flex items-center justify-between text-outline font-label-mono-sm text-xs tracking-widest uppercase">
            <span>{t.batch}</span>
            <span>{t.labs}</span>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden aspect-square bg-surface-container-high border border-outline-variant/40">
              <Image
                alt="JARIGASME LAB JRG-01 Linear mechanical switch macro view resting on warm stone"
                className="w-full h-full object-cover select-none"
                priority
                src="/images/switch.png"
                width={600}
                height={600}
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-label-mono-sm text-xs text-outline uppercase tracking-wider">
              <span>{t.hero.platePerspective}</span>
              <span>{t.hero.scaleRef}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
