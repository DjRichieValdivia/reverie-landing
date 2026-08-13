"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { site, whatsappHref } from "@/lib/site";

const links = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#areas", label: "Áreas" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const top = document.querySelector("#top");
    const sections = [top, ...links.map((link) => document.querySelector(link.href))].filter(
      (el): el is Element => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id === "top" ? null : `#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="text-2xl font-semibold tracking-tight text-navy">
          RÊVERIE
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.href ? "true" : undefined}
              className={
                activeId === link.href
                  ? "font-semibold text-teal transition-colors"
                  : "text-navy/70 transition-colors hover:text-navy"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.telefonoHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.telefono1}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="btn-tactile flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy md:hidden"
          >
            <span className="menu-icon" data-open={menuOpen}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="icon-burger h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="icon-close h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="mobile-nav-wrap md:hidden" data-open={menuOpen}>
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-content border-t border-navy/10 bg-cream px-6 py-4">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={activeId === link.href ? "true" : undefined}
                    className={
                      activeId === link.href
                        ? "block rounded-lg bg-sand/50 px-2 py-3 text-base font-semibold text-teal"
                        : "block rounded-lg px-2 py-3 text-base font-medium text-navy/80 transition-colors hover:bg-sand/50 hover:text-navy"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
