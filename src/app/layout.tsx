import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "RÊVERIE — Clínica de Rehabilitación en Pilar";
const description =
  "Rehabilitación neuromotora y traumatológica en Pilar. Internación, hospital de día, hidroterapia y un equipo interdisciplinario a cargo de cada paciente.";

export const metadata: Metadata = {
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
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
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
