"use client";

import { useLanguage } from "@/context/LanguageContext";
import ForceCurveChart from "./ForceCurveChart";

export default function SpecsSection() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full border-b border-outline-variant/40 bg-surface"
      id="specifications"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-outline-variant/40 pb-6">
          <div>
            <span className="font-label-mono-sm text-xs uppercase text-outline tracking-widest">
              {t.specs.badge}
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-primary tracking-tight mt-1">
              {t.specs.title}
            </h2>
          </div>
          <div className="font-label-mono-sm text-xs uppercase text-secondary tracking-widest">
            {t.docRef}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 divide-y divide-outline-variant/40 border-y border-outline-variant/40">
            {t.detailedSpecs.map((spec) => (
              <div
                key={spec.label}
                className="py-3.5 flex justify-between items-center text-sm"
              >
                <span className="font-body-md text-sm text-on-surface-variant">
                  {spec.label}
                </span>
                <span className="font-label-mono-sm text-sm text-primary font-medium tracking-tight text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 border border-outline-variant/40 bg-surface-container-low p-6 lg:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-4">
              <span className="font-label-mono-sm text-xs uppercase text-primary tracking-widest font-semibold">
                {t.specs.chartTitle}
              </span>
              <span className="font-label-mono-sm text-xs text-secondary tracking-wider">
                {t.specs.chartRange}
              </span>
            </div>

            <ForceCurveChart />

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                  <span className="w-3 h-0.5 bg-primary"></span>
                  {t.specs.chartPrimaryTravel}
                </span>
                <span className="font-label-mono-sm text-primary">
                  62gf @ 4.0mm
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                  <span className="w-3 h-0.5 bg-secondary"></span>
                  {t.specs.chartActuationThreshold}
                </span>
                <span className="font-label-mono-sm text-secondary">
                  45gf @ 2.0mm
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-on-surface-variant font-body-sm">
                  <span className="w-3 h-0.5 border-t border-dashed border-outline"></span>
                  {t.specs.chartReturnStroke}
                </span>
                <span className="font-label-mono-sm text-outline">
                  Reset @ 1.8mm
                </span>
              </div>
            </div>

            <div className="p-4 bg-surface border border-outline-variant/30 text-on-surface-variant font-body-sm text-xs leading-relaxed">
              {t.specs.chartFooterNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
