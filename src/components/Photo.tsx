import Image from "next/image";
import { getPhotoSrc } from "@/lib/photos";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

export function Photo({
  name,
  alt,
  label,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const src = getPhotoSrc(name);

  if (!src) {
    return <PlaceholderPhoto label={label} className={className} />;
  }

  return (
    <div className={`photo-zoom relative rounded-3xl bg-sand/40 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
