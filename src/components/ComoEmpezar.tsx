const pasos = [
  {
    numero: "1",
    titulo: "Nos contactás",
    detalle: "Por WhatsApp o teléfono, contanos la situación del paciente.",
  },
  {
    numero: "2",
    titulo: "Evaluación",
    detalle:
      "Un profesional evalúa el caso y te orienta sobre el tratamiento indicado.",
  },
  {
    numero: "3",
    titulo: "Plan de tratamiento",
    detalle:
      "Armamos un plan con el equipo interdisciplinario y coordinamos el ingreso.",
  },
];

export function ComoEmpezar() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
            Cómo empezar
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tres pasos para arrancar el tratamiento
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {pasos.map((paso) => (
            <div key={paso.numero}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                {paso.numero}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-white/65">{paso.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
