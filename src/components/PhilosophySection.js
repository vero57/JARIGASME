"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full border-b border-outline-variant/40 bg-surface"
      id="philosophy"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-label-mono-sm text-xs uppercase text-outline tracking-widest">
            {t.philosophy.badge}
          </span>
          <h2 className="font-headline-lg text-3xl lg:text-4xl text-primary tracking-tight">
            {t.philosophy.title}
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
            {t.philosophy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 border-t border-b border-outline-variant/40 divide-y md:divide-y-0 md:divide-x divide-outline-variant/40 py-10">
          {t.philosophy.parameters.map((param, index) => (
            <div
              key={param.id}
              className={`flex flex-col space-y-4 pt-6 md:pt-0 ${
                index === 0
                  ? "md:pr-8 pt-4"
                  : index === 1
                    ? "md:px-8"
                    : "md:pl-8"
              }`}
            >
              <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs tracking-wider">
                <span>PARAMETER {param.id}</span>
                <span className="text-secondary">{param.tag}</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary tracking-tight">
                {param.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {param.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
