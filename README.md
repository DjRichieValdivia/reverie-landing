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
| `hero.jpg` | Foto grande del inicio (fachada o recepción) |
| `equipo.jpg` | Sección "Quiénes somos" |
| `habitaciones.jpg` | Instalaciones |
| `gimnasio.jpg` | Instalaciones |
| `hidroterapia.jpg` | Instalaciones |
| `realidad-virtual.jpg` | Instalaciones (MOTMI) |

En cuanto el archivo está en esa carpeta con ese nombre, la foto reemplaza al
placeholder solo, en el próximo refresh de la página. Si el archivo no está,
sigue mostrando el recuadro punteado "Foto pendiente de RÊVERIE".

## Desarrollo

```bash
npm install
npm run dev
```

## Estado

Demo de propuesta, no aprobada por el cliente todavía. Todo el contenido de
texto e imágenes es provisional hasta que RÊVERIE valide o entregue material
propio.
