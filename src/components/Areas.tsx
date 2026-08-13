import { BrainIcon, MotionIcon, PeopleIcon, StethoscopeIcon } from "./icons";
import { Reveal } from "./Reveal";

const areas = [
  {
    nombre: "Área médica",
    detalle: "Clínica médica, fisiatría, neurología y psiquiatría.",
    Icon: StethoscopeIcon,
  },
  {
    nombre: "Área neuromotora funcional",
    detalle: "Kinesiología y terapia ocupacional.",
    Icon: MotionIcon,
  },
  {
    nombre: "Área neurocognitiva",
    detalle: "Fonoaudiología, neuropsicología y musicoterapia.",
    Icon: BrainIcon,
  },
  {
    nombre: "Área psicosocial",
    detalle: "Psicología, trabajo social y talleres.",
    Icon: PeopleIcon,
  },
];

export function Areas() {
  return (
    <section id="areas" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
            Áreas de servicio
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Un equipo interdisciplinario para cada paciente
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {areas.map((area, index) => (
            <Reveal key={area.nombre} delay={index * 70}>
              <div className="shadow-surface shadow-surface-hover h-full rounded-xl bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                  <area.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{area.nombre}</h3>
                <p className="mt-2 text-navy/65">{area.detalle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
