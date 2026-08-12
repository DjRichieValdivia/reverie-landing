import Image from "next/image";

const obras: { nombre: string; logo?: string }[] = [
  { nombre: "Asociart", logo: "/obras-sociales/asociart.webp" },
  { nombre: "Bancarios" },
  { nombre: "Fedecámaras", logo: "/obras-sociales/fedecamaras.jpg" },
  { nombre: "OSUTHGRA", logo: "/obras-sociales/osuthgra.png" },
  { nombre: "Construir Salud", logo: "/obras-sociales/construir-salud.svg" },
  { nombre: "OSCHOCA" },
  { nombre: "Ostvendra", logo: "/obras-sociales/ostvendra.png" },
  { nombre: "OSPSIP", logo: "/obras-sociales/ospsip.png" },
  { nombre: "TV Salud", logo: "/obras-sociales/tvsalud.png" },
  { nombre: "Caja de Previsión Social de Santa Cruz" },
  { nombre: "OSDE", logo: "/obras-sociales/osde.png" },
  { nombre: "Galeno", logo: "/obras-sociales/galeno.png" },
  { nombre: "IOSFA", logo: "/obras-sociales/iosfa.svg" },
];

// Se duplica la lista para que el loop de la animación sea continuo.
const obrasLoop = [...obras, ...obras];

export function ObrasSociales() {
  return (
    <section className="bg-cream-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-teal">
          Trabajamos con estas obras sociales
        </p>

        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="animate-marquee-rtl flex w-max gap-4">
            {obrasLoop.map((obra, i) => (
              <div
                key={`${obra.nombre}-${i}`}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-navy/10 bg-white px-4 shadow-sm"
              >
                {obra.logo ? (
                  <Image
                    src={obra.logo}
                    alt={obra.nombre}
                    width={120}
                    height={48}
                    className="h-10 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy-soft text-sm font-bold text-white">
                    {obra.nombre.charAt(0)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-navy/45">
          Logos obtenidos de los sitios oficiales de cada obra social; a confirmar con el
          cliente. Bancarios, OSCHOCA y Caja de Previsión Social de Santa Cruz quedan
          pendientes de reemplazo.
        </p>
      </div>
    </section>
  );
}
