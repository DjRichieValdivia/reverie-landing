const obras = [
  "Asociart",
  "Bancarios",
  "Fedecámaras",
  "OSUTHGRA",
  "Construir Salud",
  "OSCHOCA",
  "Ostvendra",
  "OSPSIP",
  "TV Salud",
  "Caja de Previsión Social de Santa Cruz",
  "OSDE",
  "Galeno",
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
                key={`${obra}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-3.5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy-soft text-sm font-bold text-white">
                  {obra.charAt(0)}
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-navy/75">
                  {obra}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-navy/45">
          Logos pendientes de reemplazar por los originales del cliente.
        </p>
      </div>
    </section>
  );
}
