"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

const obras: { nombre: string; logo?: string }[] = [
  { nombre: "Asociart", logo: "/obras-sociales/asociart.webp" },
  { nombre: "Bancarios" },
  { nombre: "Fedecámaras", logo: "/obras-sociales/fedecamaras.jpg" },
  { nombre: "OSUTHGRA", logo: "/obras-sociales/osuthgra.png" },
  { nombre: "Construir Salud", logo: "/obras-sociales/construir-salud.svg" },
  { nombre: "OSCHOCA" },
  { nombre: "Ostvendra", logo: "/obras-sociales/ostvendra.png" },
  { nombre: "OSPSIP", logo: "/obras-sociales/ospsip.png" },
  { nombre: "TV Salud", logo: "/obras-sociales/tvsalud.png" },
  { nombre: "Caja de Previsión Social de Santa Cruz" },
  { nombre: "OSDE", logo: "/obras-sociales/osde.png" },
  { nombre: "Galeno", logo: "/obras-sociales/galeno.png" },
  { nombre: "IOSFA", logo: "/obras-sociales/iosfa.svg" },
];

// Se duplica la lista para que el loop de la animación sea continuo.
const obrasLoop = [...obras, ...obras];

// px/ms — equivale a recorrer un set completo en 32s, igual que antes.
const AUTO_SPEED = 1 / 32;

export function ObrasSociales() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const wrap = (value: number) => {
      const w = setWidthRef.current;
      if (w <= 0) return value;
      return ((value % w) + w) % w;
    };

    const applyTransform = () => {
      track.style.transform = `translateX(${-offsetRef.current}px)`;
    };
    applyTransform();

    if (reduceMotion) return;

    let lastTime: number | null = null;
    let frameId: number;

    const tick = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!draggingRef.current) {
        offsetRef.current = wrap(offsetRef.current + AUTO_SPEED * delta);
        applyTransform();
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.classList.add("cursor-grabbing");
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = e.clientX - dragStartXRef.current;
    const w = setWidthRef.current;
    let next = dragStartOffsetRef.current - delta;
    if (w > 0) next = ((next % w) + w) % w;
    offsetRef.current = next;
    track.style.transform = `translateX(${-next}px)`;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    e.currentTarget.classList.remove("cursor-grabbing");
  };

  return (
    <section className="bg-cream-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-teal">
            Trabajamos con estas obras sociales
          </p>
        </Reveal>

        <div
          className="relative mt-8 cursor-grab select-none overflow-hidden active:cursor-grabbing"
          style={{
            touchAction: "pan-y",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          <div ref={trackRef} className="flex w-max gap-4">
            {obrasLoop.map((obra, i) => (
              <div
                key={`${obra.nombre}-${i}`}
                className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-navy/10 bg-white px-4 shadow-sm"
              >
                {obra.logo ? (
                  <Image
                    src={obra.logo}
                    alt={obra.nombre}
                    width={120}
                    height={48}
                    draggable={false}
                    className="h-10 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy-soft text-sm font-bold text-white">
                    {obra.nombre.charAt(0)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-navy/45">
          Logos obtenidos de los sitios oficiales de cada obra social; a confirmar con el
          cliente. Bancarios, OSCHOCA y Caja de Previsión Social de Santa Cruz quedan
          pendientes de reemplazo.
        </p>
      </div>
    </section>
  );
}
