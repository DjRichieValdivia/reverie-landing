import { CheckIcon } from "./icons";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

const prestaciones = [
  "32 habitaciones con aire acondicionado y TV LED",
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

const fotos = [
  { nombre: "habitaciones", label: "Habitaciones" },
  { nombre: "gimnasio", label: "Gimnasio" },
  { nombre: "pasillo", label: "Pasillo de internación" },
  { nombre: "hidroterapia", label: "Hidroterapia" },
  { nombre: "realidad-virtual", label: "Realidad virtual (MOTMI)" },
];

export function Instalaciones() {
  return (
    <section id="instalaciones" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-dark">
          Instalaciones y equipamiento
        </p>
        <h2 className="font-display text-balance text-3xl font-medium leading-[1.15] text-navy sm:text-4xl">
          Todo lo que un tratamiento serio necesita
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {fotos.map((foto, index) => (
          <Reveal
            key={foto.nombre}
            delay={index * 70}
            className={index === 0 ? "col-span-2 row-span-2" : ""}
          >
            <Photo
              name={foto.nombre}
              alt={foto.label}
              label={foto.label}
              className={index === 0 ? "h-full w-full" : "aspect-square w-full"}
              sizes={
                index === 0
                  ? "(min-width: 640px) 50vw, 100vw"
                  : "(min-width: 640px) 25vw, 50vw"
              }
            />
          </Reveal>
        ))}
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {prestaciones.map((item, index) => (
          <li key={item}>
            <Reveal delay={Math.min(index, 6) * 40} className="flex items-start gap-3 text-navy/75">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal" />
              <span>{item}</span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
