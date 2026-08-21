import Image from "next/image";
import { getPhotoSrc } from "@/lib/photos";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

export function Photo({
  name,
  alt,
  label,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  rounded = "rounded-3xl",
}: {
  name: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
}) {
  const src = getPhotoSrc(name);

  if (!src) {
    return <PlaceholderPhoto label={label} className={className} />;
  }

  return (
    <div className={`photo-zoom relative bg-sand/40 ${rounded} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
