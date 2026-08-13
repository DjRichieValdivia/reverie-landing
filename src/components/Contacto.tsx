import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";
import { site, whatsappHref } from "@/lib/site";

const direccionQuery = encodeURIComponent(site.direccion);
const mapsEmbedSrc = `https://www.google.com/maps?q=${direccionQuery}&output=embed`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${direccionQuery}`;

export function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
            Contacto
          </p>
          <h2 className="font-display text-balance text-3xl font-medium leading-[1.15] text-navy sm:text-4xl">
            Estamos para ayudarte
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Escribinos por WhatsApp o llamanos. Respondemos a la brevedad.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-teal" />
              <a href={site.telefonoHref} className="text-navy hover:underline">
                {site.telefono1} / {site.telefono2}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 text-teal" />
              <a href={`mailto:${site.email}`} className="text-navy hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PinIcon className="h-5 w-5 text-teal" />
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:underline"
              >
                {site.direccion}
              </a>
            </li>
          </ul>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile mt-8 flex w-fit items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:brightness-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablar por WhatsApp
          </a>
        </Reveal>

        <Reveal
          delay={80}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-navy/10 shadow-md lg:aspect-auto"
        >
          <iframe
            title={`Mapa de ${site.direccion}`}
            src={mapsEmbedSrc}
            className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05] transition duration-500 group-hover:grayscale-0"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile group/link absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-navy shadow-lg backdrop-blur-sm transition-colors hover:bg-teal hover:text-white"
          >
            Cómo llegar
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover/link:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
