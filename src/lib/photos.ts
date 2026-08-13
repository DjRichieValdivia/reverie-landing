import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

// Busca public/fotos/{name}.{jpg|jpeg|png|webp}. Devuelve la ruta pública si
// existe, o null si todavía no se subió (así se muestra el placeholder).
export function getPhotoSrc(name: string): string | null {
  for (const ext of EXTENSIONS) {
    const relative = `/fotos/${name}.${ext}`;
    const absolute = path.join(process.cwd(), "public", relative);
    if (fs.existsSync(absolute)) return relative;
  }
  return null;
}
