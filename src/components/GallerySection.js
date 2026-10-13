"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="w-full border-b border-outline-variant/40 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="mb-12 flex items-center justify-between border-b border-outline-variant/40 pb-6">
          <div>
            <span className="font-label-mono-sm text-xs uppercase text-outline tracking-widest">
              {t.gallery.badge}
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-primary tracking-tight mt-1">
              {t.gallery.title}
            </h2>
          </div>
          <div className="hidden md:block font-label-mono-sm text-xs text-outline uppercase tracking-wider">
            {t.gallery.catalog}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <figure className="lg:col-span-7 flex flex-col space-y-4">
            <div className="overflow-hidden aspect-[4/3] bg-surface-container-high border border-outline-variant/40">
              <Image
                alt="Exploded macro arrangement of JRG-01 olive green POM stem, progressive gold spring, and smoky polycarbonate housing components"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                src="/images/switch-components.png"
                width={800}
                height={600}
              />
            </div>
            <figcaption className="pt-2 flex items-start gap-4 border-t border-outline-variant/30">
              <span className="font-label-mono-sm text-xs text-secondary shrink-0 pt-0.5 tracking-wider">
                {t.gallery.fig1}
              </span>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                {t.gallery.fig1Desc}
              </p>
            </figcaption>
          </figure>

          <figure className="lg:col-span-5 flex flex-col space-y-4 lg:pt-12">
            <div className="overflow-hidden aspect-square bg-surface-container-high border border-outline-variant/40">
              <Image
                alt="JARIGASME Lab switches seated within high precision brass acoustic mounting plate and matte black PCB"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                src="/images/keyboard.png"
                width={600}
                height={600}
              />
            </div>
            <figcaption className="pt-2 flex items-start gap-4 border-t border-outline-variant/30">
              <span className="font-label-mono-sm text-xs text-secondary shrink-0 pt-0.5 tracking-wider">
                {t.gallery.fig2}
              </span>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                {t.gallery.fig2Desc}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
