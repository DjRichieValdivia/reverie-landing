import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="animate-pop-in btn-tactile fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg hover:brightness-95"
      style={{ "--fade-delay": "600ms" } as React.CSSProperties}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
