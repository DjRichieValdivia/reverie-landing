import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const datos = [
  { valor: 2015, sufijo: "", detalle: "Año de apertura" },
  { valor: 26, sufijo: "", detalle: "Habitaciones para internación" },
  { valor: 4, sufijo: "", detalle: "Áreas de tratamiento integradas" },
  { valor: 24, sufijo: " hs", detalle: "Guardia médica" },
];

export function Confianza() {
  return (
    <section className="border-y border-navy/10 bg-sand/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {datos.map((dato, index) => (
          <Reveal key={dato.detalle} delay={index * 70} className="text-center sm:text-left">
            <p className="text-3xl font-semibold tabular-nums text-teal-dark">
              <CountUp to={dato.valor} suffix={dato.sufijo} />
            </p>
            <p className="mt-1 text-sm text-navy/60">{dato.detalle}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
