import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-white/60 sm:flex-row">
        <p>
          {site.nombre} Clínica de Rehabilitación © {new Date().getFullYear()}
        </p>
        <p>{site.direccion}</p>
      </div>
    </footer>
  );
}
