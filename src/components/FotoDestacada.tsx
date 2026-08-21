import Image from "next/image";
import { getPhotoSrc } from "@/lib/photos";
import { Reveal } from "./Reveal";

export function FotoDestacada() {
  const src = getPhotoSrc("pasillo");
  if (!src) return null;

  return (
    <section className="relative h-[60vh] min-h-[22rem] w-full overflow-hidden sm:h-[65vh]">
      <Image
        src={src}
        alt="Pasillo de internación de RÊVERIE"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent"
      />
      <div className="relative flex h-full items-end">
        <Reveal className="mx-auto w-full max-w-6xl px-6 pb-10 sm:pb-14">
          <p className="font-display text-balance max-w-xl text-2xl font-medium leading-snug text-white sm:text-3xl">
            Instalaciones pensadas para acompañar la recuperación, día a día.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
