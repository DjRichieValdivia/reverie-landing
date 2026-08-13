import { Reveal } from "./Reveal";

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
    <section className="relative overflow-hidden bg-navy py-20">
      <div
        aria-hidden="true"
        className="ambient-glow left-[-10%] top-[-20%] h-80 w-80 bg-sage/20"
      />
      <div
        aria-hidden="true"
        className="ambient-glow bottom-[-25%] right-[-5%] h-96 w-96 bg-teal-dark/40"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
            Cómo empezar
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tres pasos para arrancar el tratamiento
          </h2>
        </Reveal>

        <ol className="mt-14 flex flex-col gap-10 sm:flex-row sm:gap-0">
          {pasos.map((paso, index) => (
            <li key={paso.numero} className="relative flex-1 sm:pr-8">
              <Reveal delay={index * 100}>
                {index < pasos.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-12 top-6 hidden h-px w-[calc(100%-3rem)] bg-white/15 sm:block"
                  />
                )}
                <div
                  className={
                    index === 0
                      ? "relative flex h-12 w-12 items-center justify-center rounded-full bg-sage text-lg font-semibold text-navy"
                      : "relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white"
                  }
                >
                  {paso.numero}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {paso.titulo}
                </h3>
                <p className="mt-2 max-w-xs text-white/65">{paso.detalle}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
