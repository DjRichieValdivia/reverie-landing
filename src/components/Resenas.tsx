import { GoogleIcon, StarIcon } from "./icons";
import { Reveal } from "./Reveal";
import { getResenas } from "@/lib/reviews";
import { site } from "@/lib/site";

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  const filled = Math.round(rating);
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`${className} ${i < filled ? "text-teal" : "text-navy/15"}`} />
      ))}
    </span>
  );
}

export async function Resenas() {
  const { resenas, rating, total } = await getResenas();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
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
            className="mt-4 inline-flex items-center gap-2.5 text-navy/70 hover:underline"
          >
            <GoogleIcon className="h-5 w-5 shrink-0" />
            <Stars rating={rating} />
            <span className="tabular-nums">
              {rating.toString().replace(".", ",")} · {total} reseñas
            </span>
          </a>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {resenas.map((resena, index) => (
            <Reveal key={resena.autor} delay={index * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_12px_30px_-14px_rgba(22,50,62,0.18)]">
                <div className="flex items-center justify-between">
                  <Stars rating={resena.rating} />
                  <GoogleIcon className="h-4 w-4 shrink-0 opacity-60" />
                </div>
                <p className="text-pretty mt-4 text-navy/75">{resena.texto}</p>
                <p className="mt-auto pt-6 text-sm font-semibold text-navy">{resena.autor}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
