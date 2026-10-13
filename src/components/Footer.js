"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import logoImg from "@/assets/logo.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-5 flex items-center">
              <Image
                alt="JARIGASME LAB"
                className="h-4 w-auto object-contain"
                src={logoImg}
                width={100}
                height={16}
              />
            </div>
            <span className="font-label-mono-sm text-xs uppercase tracking-widest text-outline border-l border-outline-variant/60 pl-3 ml-1">
              {t.footer.archivalRef}
            </span>
          </div>
          <p className="font-body-sm text-xs text-on-surface-variant">
            {t.footer.copyright}
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {t.footer.links.map((link) => (
            <Link
              key={link.label}
              className="font-label-mono-sm text-xs uppercase text-on-surface-variant hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
