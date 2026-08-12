import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { site, whatsappHref } from "@/lib/site";

const direccionQuery = encodeURIComponent(site.direccion);
const mapsEmbedSrc = `https://www.google.com/maps?q=${direccionQuery}&output=embed`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${direccionQuery}`;

export function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
            Contacto
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
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
              <span className="text-navy">{site.direccion}</span>
            </li>
          </ul>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-fit items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablar por WhatsApp
          </a>
        </div>

        <div className="flex aspect-[4/3] w-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-sand/40 shadow-sm lg:aspect-auto">
          <iframe
            title={`Mapa de ${site.direccion}`}
            src={mapsEmbedSrc}
            className="h-full w-full flex-1 grayscale-[15%]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-navy/10 bg-white px-4 py-3 text-sm font-medium text-navy transition hover:bg-sand/60"
          >
            <PinIcon className="h-4 w-4 text-teal" />
            Ver en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
