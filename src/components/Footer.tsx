import Image from "next/image";
import { MailIcon, PhoneIcon } from "./icons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Image
            src="/logo-reverie-original.png"
            alt="RÊVERIE"
            width={360}
            height={100}
            className="h-7 w-auto"
          />
          <p>
            Clínica de Rehabilitación © {new Date().getFullYear()} ·{" "}
            {site.direccion}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.telefonoHref}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.telefono1}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
          <a href="#top" className="transition-colors hover:text-white">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
