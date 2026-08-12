const areas = [
  {
    nombre: "Área médica",
    detalle: "Clínica médica, fisiatría, neurología y psiquiatría.",
  },
  {
    nombre: "Área neuromotora funcional",
    detalle: "Kinesiología y terapia ocupacional.",
  },
  {
    nombre: "Área neurocognitiva",
    detalle: "Fonoaudiología, neuropsicología y musicoterapia.",
  },
  {
    nombre: "Área psicosocial",
    detalle: "Psicología, trabajo social y talleres.",
  },
];

export function Areas() {
  return (
    <section id="areas" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
            Áreas de servicio
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Un equipo interdisciplinario para cada paciente
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {areas.map((area) => (
            <div
              key={area.nombre}
              className="rounded-2xl border border-navy/10 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-navy">{area.nombre}</h3>
              <p className="mt-2 text-navy/65">{area.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
