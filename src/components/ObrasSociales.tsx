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
];

export function ObrasSociales() {
  return (
    <section className="bg-cream-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-teal">
          Trabajamos con estas obras sociales
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {obras.map((obra) => (
            <span
              key={obra}
              className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy/70"
            >
              {obra}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-navy/45">
          Logos pendientes de reemplazar por los originales del cliente.
        </p>
      </div>
    </section>
  );
}
