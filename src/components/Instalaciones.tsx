import { CheckIcon } from "./icons";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

const prestaciones = [
  "26 habitaciones con aire acondicionado y TV LED",
  "Sector de cuidados especiales para pacientes complejos",
  "Office de enfermería",
  "Gabinetes y consultorios",
  "Gimnasio cubierto",
  "Gimnasio para hospital de día y 1/2 día",
  "Sala de terapia ocupacional",
  "Pista de entrenamiento para manejo de silla de ruedas",
  "Plataforma de realidad virtual (MOTMI)",
  "Hidroterapia",
  "Talleres y actividades al aire libre",
];

const fotos = ["Habitaciones", "Gimnasio", "Hidroterapia", "Realidad virtual (MOTMI)"];

export function Instalaciones() {
  return (
    <section id="instalaciones" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
          Instalaciones y equipamiento
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Todo lo que un tratamiento serio necesita
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {fotos.map((foto) => (
          <PlaceholderPhoto key={foto} label={foto} className="aspect-[16/10] w-full" />
        ))}
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {prestaciones.map((item) => (
          <li key={item} className="flex items-start gap-3 text-navy/75">
            <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
