import { Areas } from "@/components/Areas";
import { ComoEmpezar } from "@/components/ComoEmpezar";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instalaciones } from "@/components/Instalaciones";
import { ObrasSociales } from "@/components/ObrasSociales";
import { QuienesSomos } from "@/components/QuienesSomos";
import { Resenas } from "@/components/Resenas";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <QuienesSomos />
        <Areas />
        <Instalaciones />
        <ComoEmpezar />
        <Resenas />
        <ObrasSociales />
        <Contacto />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
