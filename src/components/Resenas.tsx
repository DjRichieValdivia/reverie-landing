import { StarIcon } from "./icons";
import { Reveal } from "./Reveal";
import { getResenas } from "@/lib/reviews";
import { site } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  const pct = (rating / 5) * 100;
  return (
    <span className="relative inline-flex" aria-hidden="true">
      <span className="flex gap-0.5 text-navy/15">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </span>
      <span
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-teal"
        style={{ width: `${pct}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </span>
    </span>
  );
}

export async function Resenas() {
  const { resenas, rating, total } = await getResenas();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal">
          Reseñas de Google
        </p>
        <h2 className="font-display text-balance text-3xl font-medium leading-[1.15] text-navy sm:text-4xl">
          Lo que cuentan quienes ya lo vivieron
        </h2>
        <a
          href={site.googleReviewsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-navy/70 hover:underline"
        >
          <Stars rating={rating} />
          <span className="tabular-nums">
            {rating.toString().replace(".", ",")} · {total} reseñas en Google
          </span>
        </a>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {resenas.map((resena, index) => (
          <Reveal key={resena.autor} delay={index * 80}>
            <span className="font-display text-4xl leading-none text-teal/30">“</span>
            <p className="text-pretty -mt-2 text-navy/75">{resena.texto}</p>
            <p className="mt-4 text-sm font-semibold text-navy">{resena.autor}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
