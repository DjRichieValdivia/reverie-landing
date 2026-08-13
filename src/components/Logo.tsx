// Reinterpretación moderna del isologo de RÊVERIE: mismo concepto (cruz +
// pétalos, salud + cuidado), pero vectorial, plana y con la paleta del sitio
// en vez del PNG original con degradés.

function LogoMark({
  className,
  crossColor = "var(--color-navy)",
}: {
  className?: string;
  crossColor?: string;
}) {
  const petal = "M20,3 C24.5,3 27,9.5 27,14.5 C27,18.5 24,21 20,21 C16,21 13,18.5 13,14.5 C13,9.5 15.5,3 20,3 Z";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g fill="var(--color-sage)">
        <path d={petal} />
        <path d={petal} transform="rotate(90 20 20)" />
        <path d={petal} transform="rotate(180 20 20)" />
        <path d={petal} transform="rotate(270 20 20)" />
      </g>
      <g fill={crossColor}>
        <rect x="17" y="12" width="6" height="16" rx="2" />
        <rect x="12" y="17" width="16" height="6" rx="2" />
      </g>
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-8 w-8",
  textClassName = "text-xl",
  crossColor,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  crossColor?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markClassName} crossColor={crossColor} />
      <span className={`font-display font-medium tracking-wide ${textClassName}`}>
        RÊVERIE
      </span>
    </span>
  );
}
