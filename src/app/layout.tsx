import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const title = "RÊVERIE — Clínica de Rehabilitación en Pilar";
const description =
  "Rehabilitación neuromotora y traumatológica en Pilar. Internación, hospital de día, hidroterapia y un equipo interdisciplinario a cargo de cada paciente.";

// TODO: cambiar por el dominio real cuando el sitio tenga uno definitivo.
const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001");

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  appleWebApp: {
    title: "RÊVERIE",
  },
  openGraph: {
    title,
    description,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

// Marcado para Google/buscadores. No es visible en la página; describe el
// negocio con los mismos datos de contacto que ya están confirmados.
// Cuando el sitio tenga dominio final, agregar "url" acá.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.nombre,
  description:
    "Clínica de rehabilitación neuromotora y traumatológica en Pilar, con internación, hospital de día e hidroterapia.",
  telephone: [site.telefonoHref.replace("tel:", "")],
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Francisco Lauría 2125",
    addressLocality: "Pilar",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  medicalSpecialty: [
    "Neurologic",
    "Musculoskeletal",
    "Physiotherapy",
    "Psychiatric",
    "SpeechPathology",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
