import { ImageIcon } from "./icons";

export function PlaceholderPhoto({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-navy/15 bg-sand/40 p-6 text-center ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-navy/30" />
      <span className="text-sm font-medium text-navy/50">{label}</span>
      <span className="text-xs text-navy/35">Foto pendiente de RÊVERIE</span>
    </div>
  );
}
