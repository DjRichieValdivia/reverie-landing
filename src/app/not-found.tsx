import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">
        Error 404
      </p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        Esta página no existe
      </h1>
      <p className="mt-4 max-w-md text-navy/70">
        Puede que el enlace esté roto o que la página se haya movido. Volvé al
        inicio o escribinos si necesitás ayuda.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3.5 text-base font-semibold text-navy transition active:scale-[0.98] hover:border-navy/30"
        >
          Volver al inicio
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm transition active:scale-[0.98] hover:brightness-95"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Hablar por WhatsApp
        </a>
      </div>
    </div>
  );
}
