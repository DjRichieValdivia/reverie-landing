export type Resena = {
  autor: string;
  texto: string;
  rating: number;
};

// Reseñas reales tomadas a mano de la ficha de Google Maps de RÊVERIE
// (agosto 2026). Se usan mientras no esté configurada la conexión en vivo
// (ver GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID más abajo), y como respaldo
// si la conexión falla en algún momento.
const RESENAS_BASE: Resena[] = [
  {
    autor: "Connie S.",
    texto:
      "Mi experiencia fue y sigue siendo muy buena. Un excelente trato de todo el personal. El ambiente que allí se vive es muy cordial, cálido y amable.",
    rating: 5,
  },
  {
    autor: "Soledad C.",
    texto:
      "Tuve una muy buena experiencia en esta clínica de rehabilitación. Desde el primer momento el trato fue muy humano y profesional. El equipo está siempre atento a las necesidades del paciente.",
    rating: 5,
  },
  {
    autor: "Paula M.",
    texto:
      "Muy buena calidad humana, y sobre todo, muy buena atención en la rehabilitación que necesitó mi hijo, quien estuvo internado seis meses, ingresado después de un montón de operaciones debidas a un accidente grave que tuvo…",
    rating: 5,
  },
];

type PlacesReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
};

type PlacesResponse = {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: PlacesReview[];
  };
  status: string;
};

export type ResenasResult = {
  resenas: Resena[];
  rating: number;
  total: number;
  live: boolean;
};

// Deja el nombre público tal como lo puso quien reseñó, pero recorta el
// apellido a la inicial para no exponer el nombre completo en el sitio.
function anonimizar(nombre: string): string {
  const partes = nombre.trim().split(/\s+/);
  if (partes.length < 2) return nombre;
  return `${partes[0]} ${partes[1][0]}.`;
}

// Trae reseñas positivas (4 o 5 estrellas) directo de Google Places y las
// cachea por un día, así el sitio se actualiza solo sin volver a tocar
// código. Si no está configurada la conexión (o falla), usa las 3 de
// arriba, que son igual de reales, solo que fijas.
export async function getResenas(): Promise<ResenasResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  const fallback: ResenasResult = {
    resenas: RESENAS_BASE,
    rating: 4.3,
    total: 49,
    live: false,
  };

  if (!apiKey || !placeId) return fallback;

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("language", "es");
    url.searchParams.set("reviews_no_translations", "true");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });
    if (!res.ok) return fallback;

    const data = (await res.json()) as PlacesResponse;
    if (data.status !== "OK" || !data.result) return fallback;

    const positivas = (data.result.reviews ?? [])
      .filter((r) => r.rating >= 4)
      .sort((a, b) => b.rating - a.rating || b.time - a.time)
      .slice(0, 3)
      .map((r) => ({
        autor: anonimizar(r.author_name),
        texto: r.text,
        rating: r.rating,
      }));

    if (positivas.length === 0) return fallback;

    return {
      resenas: positivas,
      rating: data.result.rating ?? fallback.rating,
      total: data.result.user_ratings_total ?? fallback.total,
      live: true,
    };
  } catch {
    return fallback;
  }
}
