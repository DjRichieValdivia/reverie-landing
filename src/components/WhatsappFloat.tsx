import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition hover:brightness-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
