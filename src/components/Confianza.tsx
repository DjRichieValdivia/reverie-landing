const datos = [
  { valor: "2015", detalle: "Año de apertura" },
  { valor: "26", detalle: "Habitaciones para internación" },
  { valor: "4", detalle: "Áreas de tratamiento integradas" },
  { valor: "24 hs", detalle: "Guardia médica" },
];

export function Confianza() {
  return (
    <section className="border-y border-navy/10 bg-sand/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {datos.map((dato) => (
          <div key={dato.detalle} className="text-center sm:text-left">
            <p className="text-3xl font-semibold tabular-nums text-teal-dark">
              {dato.valor}
            </p>
            <p className="mt-1 text-sm text-navy/60">{dato.detalle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
