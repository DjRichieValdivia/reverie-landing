import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { site, whatsappHref } from "@/lib/site";

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

        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-navy/15 bg-sand/40 p-6 text-center lg:aspect-auto">
          <PinIcon className="h-8 w-8 text-navy/30" />
          <span className="text-sm font-medium text-navy/50">
            Mapa de Francisco Lauria 2125, Pilar
          </span>
          <span className="text-xs text-navy/35">Se agrega el mapa embebido al confirmar la demo</span>
        </div>
      </div>
    </section>
  );
}
