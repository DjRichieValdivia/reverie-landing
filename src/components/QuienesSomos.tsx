import { PlaceholderPhoto } from "./PlaceholderPhoto";

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <PlaceholderPhoto
          label="Foto del equipo o un pasillo de la clínica"
          className="aspect-[4/3] w-full lg:order-2"
        />
        <div className="lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
            Quiénes somos
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Rehabilitar es más que tratar el cuerpo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Entendemos la rehabilitación como un proceso integral: no solo la
            recuperación funcional, sino también los aspectos emocionales y el
            contexto familiar de cada paciente.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy/70">
            Por eso trabajamos con un equipo multidisciplinario —médico,
            neurocognitivo y psicosocial— que evalúa y acompaña a cada persona
            en conjunto, desde el primer día.
          </p>
        </div>
      </div>
    </section>
  );
}
