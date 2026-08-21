import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <Reveal delay={80} from="right" className="lg:order-2">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-3xl bg-sage/25 sm:block"
            />
            <Photo
              name="equipo"
              alt="Patio y espacios exteriores de RÊVERIE"
              label="Foto del patio de la clínica"
              className="relative aspect-[4/3] w-full"
            />
          </div>
        </Reveal>
        <Reveal from="left" className="lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-dark">
            Quiénes somos
          </p>
          <h2 className="font-display text-balance text-3xl font-medium leading-[1.15] text-navy sm:text-4xl">
            Rehabilitar es <em className="text-teal-dark italic">más</em> que tratar
            el cuerpo
          </h2>
          <p className="text-pretty mt-5 text-lg leading-relaxed text-navy/70">
            Entendemos la rehabilitación como un proceso integral: no solo la
            recuperación funcional, sino también los aspectos emocionales y el
            contexto familiar de cada paciente.
          </p>
          <p className="text-pretty mt-4 text-lg leading-relaxed text-navy/70">
            Por eso trabajamos con un equipo multidisciplinario —médico,
            neurocognitivo y psicosocial— que evalúa y acompaña a cada persona
            en conjunto, desde el primer día.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
