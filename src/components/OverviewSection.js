"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function OverviewSection() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full border-b border-outline-variant/40 bg-surface-container-low"
      id="introduction"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-2">
            <span className="font-label-mono-sm text-xs uppercase text-outline tracking-widest">
              {t.overview.badge}
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-primary tracking-tight">
              {t.name}
            </h2>
            <p className="font-subheading text-secondary font-medium">
              {t.tagline}
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between space-y-12">
            <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {t.overview.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-outline-variant/40 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/40">
              {t.quickSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-6 sm:px-6 sm:first:pl-0 flex flex-col gap-1.5"
                >
                  <span className="font-label-mono-sm text-xs uppercase text-outline tracking-wider">
                    {spec.label}
                  </span>
                  <span
                    className={`font-headline-sm text-xl text-primary ${
                      spec.uppercase ? "uppercase" : ""
                    }`}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
