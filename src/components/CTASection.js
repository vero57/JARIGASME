"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-surface-container-low" id="retailers">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-outline-variant/40 pb-16">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-3 font-label-mono-sm text-xs uppercase text-secondary tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>{t.cta.badge}</span>
            </div>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-primary tracking-tight">
              {t.cta.title}
            </h2>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              {t.cta.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              className="inline-flex items-center justify-center font-label-mono-sm text-xs uppercase tracking-wider bg-primary-container text-on-primary px-8 py-4 hover:bg-secondary transition-colors duration-150 text-center"
              href="#retailers"
            >
              {t.cta.findRetailerBtn}
            </Link>
            <Link
              className="inline-flex items-center justify-center font-label-mono-sm text-xs uppercase tracking-wider text-primary border border-primary/20 hover:border-primary hover:bg-surface-container-high px-8 py-4 transition-colors duration-150 text-center"
              href="#specifications"
            >
              {t.cta.downloadPdfBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
