# RÊVERIE — Rediseño de landing (demo)

Demo de propuesta para reemplazar el sitio actual de **RÊVERIE**, clínica de
rehabilitación en Pilar. El objetivo es llevarles una versión navegable para que
la vean y decidan.

Sitio actual: https://www.reverie.com.ar/ (WordPress)

## Sobre el cliente

Clínica de rehabilitación para pacientes con dificultades **neuromotoras y
traumatológicas**, inaugurada en 2015.

- **Dirección:** Francisco Lauria 2125, Pilar
- **Teléfonos:** (0230) 4672991 / 4426617
- **Email:** info@reverie.com.ar
- **Redes:** Facebook, Instagram, Twitter

### Áreas de servicio

| Área | Especialidades |
|---|---|
| Médica | Clínica médica, fisiatría, neurología, psiquiatría |
| Neuromotora funcional | Kinesiología, terapia ocupacional |
| Neurocognitiva | Fonoaudiología, neuropsicología, musicoterapia |
| Psicosocial | Psicología, trabajo social, talleres |

### Prestaciones e instalaciones

Internación (26 habitaciones), hospital de día, hidroterapia, realidad virtual
(MOTMI), gimnasio, actividades al aire libre.

### Secciones del sitio actual

Institucional (misión, visión, valores) · Áreas · Capacitación y formación
continua · Recursos humanos · Contacto · Galería.

## Diagnóstico del sitio actual

Revisado en agosto 2026. Es un WordPress con tema genérico, y los problemas son
más de criterio que de tecnología:

- **El hero no dice qué hacen ni dónde.** Foto de stock (hombre en silla de
  ruedas en un campo, brazos al cielo) con el título "SERVICIOS DE
  REHABILITACION". No aparece "Pilar", ni un teléfono, ni un botón de contacto.
- **Cuatro tarjetas azules tapan el hero.** Se montan encima de la imagen y
  cortan el propio título a la mitad.
- **Paleta desordenada:** azul institucional, cuatro azules distintos en las
  tarjetas, verde lima en el footer, y una franja verde WhatsApp a pantalla
  completa. No hay un sistema de color.
- **Separadores en diagonal** entre secciones, un recurso muy de plantilla 2015.
- **Fotos de instalaciones flojas:** la galería abre con un escritorio y un
  estetoscopio. No se ven habitaciones, gimnasio ni hidroterapia — que es
  justamente lo que un familiar quiere ver.
- **Contacto enterrado.** El teléfono está en una barra gris chiquita arriba de
  todo y en el footer. Debería estar presente todo el tiempo.
- **Navegación pesada:** 5 menús con desplegables, incluido "CAPACITACION Y
  FORMACIÓN CONTINUA", que compite con lo importante.
- **Widgets sociales incrustados** (caja de Facebook con "842 seguidores") que
  cargan lento y no suman.
- **Textos institucionales largos** en párrafos densos, escritos para la
  institución y no para quien busca ayuda.
- **Copyright ©2024**, o sea el sitio está desatendido hace rato.

Lo bueno que conviene conservar: el **logo** funciona bien, la lista de
prestaciones es concreta y creíble, y las **obras sociales** (Asociart,
Bancarios, Fedecámaras, OSUTHGRA, Construir Salud, OSCHOCA, Ostvendra, OSPSIP,
TV Salud, Caja de Santa Cruz) son un activo fuerte de confianza.

## Enfoque de la demo

El visitante típico no es el paciente: es un **familiar buscando dónde internar o
rehabilitar a alguien**, muchas veces con urgencia y en un momento difícil. Las
dos prioridades son entonces:

1. **Confianza clínica** — equipo, instalaciones reales, trayectoria.
2. **Contacto sin fricción** — teléfono y WhatsApp siempre a mano, sin hacer
   scroll ni buscar.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Deploy previsto: Cloudflare (mismo esquema que forge-grow)

## Cómo agregar las fotos reales

No hace falta tocar código ni pedirle nada a Claude. Poné el archivo en la
carpeta `public/fotos/` con **exactamente** uno de estos nombres (probá con
`.jpg`, `.jpeg`, `.png` o `.webp`, cualquiera de los cuatro funciona):

| Nombre de archivo | Dónde aparece |
|---|---|
| `hero.jpg` | Foto grande del inicio (fachada o recepción) — ✅ ya puesta |
| `equipo.jpg` | Sección "Quiénes somos" — ✅ ya puesta |
| `habitaciones.jpg` | Instalaciones — ✅ ya puesta |
| `gimnasio.jpg` | Instalaciones — falta |
| `hidroterapia.jpg` | Instalaciones — falta |
| `realidad-virtual.jpg` | Instalaciones (MOTMI) — falta |

Las tres primeras son fotos reales tomadas del sitio actual de RÊVERIE
(reverie.com.ar), como punto de partida mientras no tengan material nuevo.
Las últimas tres no existen en su sitio actual, por eso siguen en
placeholder.

En cuanto el archivo está en esa carpeta con ese nombre, la foto reemplaza al
placeholder solo. Si el sitio ya estaba corriendo (`npm run dev`) cuando
agregaste la foto, puede hacer falta reiniciarlo (`Ctrl+C` y de nuevo
`npm run dev`) para que la vea — es una rareza del modo desarrollo, no pasa
en el sitio ya publicado. Si el archivo no está, sigue mostrando el recuadro
punteado "Foto pendiente de RÊVERIE".

## Reseñas de Google en vivo

La sección "Reseñas de Google" del sitio ya muestra 3 reseñas reales de
RÊVERIE (4,3 · 49 reseñas, verificado en la ficha de Google Maps). Son fijas
hasta que se configure la conexión en vivo de abajo — no hace falta hacer
nada más para que el sitio funcione bien.

Si en algún momento quieren que se actualicen solas (para que una reseña
nueva aparezca sin tocar código), hay que completar dos datos:

1. **Conseguir una API key de Google Places** — en
   [Google Cloud Console](https://console.cloud.google.com/), crear un
   proyecto, habilitar la **"Places API"** y generar una API key (requiere
   una cuenta de Google y una tarjeta cargada para facturación; Google da uso
   gratis mensual que normalmente alcanza de sobra para un sitio de una sola
   clínica).
2. **Conseguir el Place ID de RÊVERIE** — con la
   [herramienta oficial de Google](https://developers.google.com/maps/documentation/places/web-service/place-id),
   buscar "Reverie Clinica de Rehabilitacion, Pilar" y copiar el ID que
   aparece.

Con esos dos datos, crear un archivo `.env.local` en la raíz del proyecto
(hay un `.env.example` de referencia) con:

```
GOOGLE_PLACES_API_KEY=la-key-que-generaron
GOOGLE_PLACE_ID=el-id-que-encontraron
```

A partir de ahí, el sitio trae automáticamente las reseñas de 4 y 5
estrellas de Google, se actualiza una vez por día, y si en algún momento
Google no responde vuelve solo a mostrar las 3 fijas de siempre. El archivo
`.env.local` nunca se sube a GitHub (está en `.gitignore`).

## Desarrollo

```bash
npm install
npm run dev
```

## Estado

Demo de propuesta, no aprobada por el cliente todavía. Todo el contenido de
texto e imágenes es provisional hasta que RÊVERIE valide o entregue material
propio.
