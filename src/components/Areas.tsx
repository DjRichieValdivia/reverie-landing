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
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-dark">
            Áreas de servicio
          </p>
          <h2 className="font-display text-balance text-3xl font-medium leading-[1.15] text-navy sm:text-4xl">
            Un equipo interdisciplinario para cada paciente
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-navy/10 border-t border-navy/10">
          {areas.map((area, index) => (
            <Reveal key={area.nombre} delay={index * 70}>
              <div className="row-hover group -mx-4 flex flex-col gap-4 rounded-xl px-4 py-7 sm:flex-row sm:items-center sm:gap-10">
                <span className="font-display shrink-0 text-3xl text-teal/35 sm:w-14">
                  0{index + 1}
                </span>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal-dark transition-colors duration-200 group-hover:bg-teal/20">
                    <area.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{area.nombre}</h3>
                    <p className="mt-1 text-navy/65">{area.detalle}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
