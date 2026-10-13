"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import logoImg from "@/assets/logo.png";

export default function Header() {
  const [activeSection, setActiveSection] = useState("overview");
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.overview, href: "#overview" },
    { label: t.nav.specifications, href: "#specifications" },
    { label: t.nav.philosophy, href: "#philosophy" },
  ];

  useEffect(() => {
    const sectionIds = ["overview", "specifications", "philosophy"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-low/95 backdrop-blur-md border-b border-outline-variant/40">
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center gap-3 group"
            href="#overview"
            onClick={(e) => handleNavClick(e, "#overview")}
          >
            <div className="h-6 flex items-center">
              <Image
                alt="JARIGASME LAB"
                className="h-5 w-auto object-contain"
                src={logoImg}
                width={120}
                height={20}
                priority
              />
            </div>
            <span className="font-label-mono-sm text-xs uppercase tracking-widest text-outline border-l border-outline-variant/60 pl-3 ml-1">
              JRG-01
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((link) => {
            const sectionKey = link.href.replace("#", "");
            const isActive = activeSection === sectionKey;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-wider transition-all duration-200 py-1 border-b-2 font-label-md cursor-pointer ${
                  isActive
                    ? "text-primary font-semibold border-primary"
                    : "text-on-surface-variant hover:text-primary border-transparent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            className="hidden sm:inline-flex items-center text-xs uppercase tracking-wider text-primary border border-outline-variant hover:border-primary hover:bg-surface-container-high px-4 py-2 rounded transition-colors font-label-mono-sm"
            href="#retailers"
            onClick={(e) => handleNavClick(e, "#retailers")}
          >
            {t.nav.findRetailer}
          </a>
          {/* Language selector menu right beside "Find a Retailer" */}
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
