import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

const fotos = [
  { nombre: "verde-parque", label: "Parque y jardines" },
  { nombre: "verde-patio", label: "Patio cubierto" },
  { nombre: "verde-flores", label: "Jardines con flores nativas" },
];

export function EspaciosVerdes() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-dark">
            Espacios al aire libre
          </p>
          <h2 className="font-display text-balance text-3xl font-medium leading-[1.15] text-navy sm:text-4xl">
            Amplios espacios verdes para recuperarse con tranquilidad
          </h2>
          <p className="text-pretty mt-5 text-lg leading-relaxed text-navy/70">
            La institución cuenta con un gran parque, patios cubiertos y
            jardines que rodean todo el edificio. El contacto con la
            naturaleza forma parte de nuestro enfoque de rehabilitación,
            favoreciendo el bienestar emocional y la participación activa de
            los pacientes en actividades terapéuticas al aire libre.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {fotos.map((foto, index) => (
            <Reveal key={foto.nombre} delay={index * 70}>
              <Photo
                name={foto.nombre}
                alt={foto.label}
                label={foto.label}
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
