import { PhoneIcon, WhatsAppIcon } from "./icons";
import { site, whatsappHref } from "@/lib/site";

const links = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#areas", label: "Áreas" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="text-2xl font-semibold tracking-tight text-navy">
          RÊVERIE
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-navy">
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
            className="flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
