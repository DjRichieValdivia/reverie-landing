import { PhoneIcon, WhatsAppIcon } from "./icons";
import { Photo } from "./Photo";
import { site, whatsappHref } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="ambient-glow left-[-10%] top-[-25%] h-80 w-80 bg-sage/10"
      />

      {/* Foto a sangre: pegada al borde derecho de la pantalla en desktop,
          centrada verticalmente y con su proporción real (sin estirarla ni
          recortarla para que combine con el alto del texto). */}
      <div
        className="animate-fade-up aspect-[4/3] w-full lg:absolute lg:right-0 lg:top-1/2 lg:aspect-[4/3] lg:w-[42%] lg:-translate-y-1/2"
        style={{ "--fade-delay": "120ms" } as React.CSSProperties}
      >
        <Photo
          name="hero"
          alt="Fachada y recepción de RÊVERIE"
          label="Foto de fachada o recepción"
          className="h-full w-full"
          rounded="rounded-3xl lg:rounded-l-[3.5rem] lg:rounded-r-none"
          objectPosition="object-right"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20 lg:pr-[40%]">
        <p
          className="animate-fade-up mb-4 text-sm font-semibold uppercase tracking-wide text-teal-dark"
          style={{ "--fade-delay": "0ms" } as React.CSSProperties}
        >
          Clínica de rehabilitación en Pilar · desde 2015
        </p>
        <h1
          className="font-display animate-fade-up text-balance text-4xl font-medium leading-[1.15] text-navy sm:text-5xl"
          style={{ "--fade-delay": "80ms" } as React.CSSProperties}
        >
          Rehabilitación neuromotora y traumatológica
        </h1>
        <p
          className="animate-fade-up text-pretty mt-4 max-w-xl text-xl font-medium leading-snug text-teal-dark"
          style={{ "--fade-delay": "120ms" } as React.CSSProperties}
        >
          Un equipo a cargo de cada paciente, desde el primer día
        </p>
        <p
          className="animate-fade-up text-pretty mt-4 max-w-xl text-lg leading-relaxed text-navy/70"
          style={{ "--fade-delay": "160ms" } as React.CSSProperties}
        >
          Internación, hospital de día e hidroterapia en Francisco Lauria
          2125, Pilar. Acompañamos a cada paciente y su familia con un
          equipo médico, neurocognitivo y psicosocial trabajando en
          conjunto.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
          style={{ "--fade-delay": "240ms" } as React.CSSProperties}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:brightness-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablar por WhatsApp
          </a>
          <a
            href={site.telefonoHref}
            className="btn-tactile flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3.5 text-base font-semibold text-navy hover:border-navy/30"
          >
            <PhoneIcon className="h-5 w-5" />
            Llamar ahora
          </a>
        </div>

        <p
          className="animate-fade-up mt-5 text-sm text-navy/70"
          style={{ "--fade-delay": "300ms" } as React.CSSProperties}
        >
          {site.telefono1} · Guardia médica las 24 horas
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-navy/10 pt-8 text-sm text-navy/70">
          <span>
            <strong className="font-semibold text-navy">32</strong> habitaciones
            para internación
          </span>
          <span className="hidden text-navy/20 sm:inline">·</span>
          <span>
            <strong className="font-semibold text-navy">4</strong> áreas de
            tratamiento integradas
          </span>
          <span className="hidden text-navy/20 sm:inline">·</span>
          <span>Hidroterapia</span>
          <span className="hidden text-navy/20 sm:inline">·</span>
          <span>Hospital de día</span>
        </div>
      </div>
    </section>
  );
}
