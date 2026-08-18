// Datos de contacto. Todo lo marcado como PLACEHOLDER hay que confirmarlo con
// el cliente antes de publicar.

export const site = {
  nombre: "RÊVERIE",
  // Línea de Admisión Internación, según ficha institucional (ago. 2026). Horario: 8 a 20 hs.
  telefono1: "11 2404 7615",
  telefonoHref: "tel:+541124047615",
  // Número real, tomado del botón de WhatsApp del sitio actual (reverie.com.ar).
  whatsapp: "5491124047615",
  whatsappMensaje: "Hola, quisiera pedir información sobre RÊVERIE.",
  email: "info@reverie.com.ar",
  direccion: "Francisco Lauria 2125, Pilar",
  // Ficha real verificada en Google Maps: 4,3 con 49 reseñas (agosto 2026).
  googleReviewsHref:
    "https://www.google.com/maps/search/Reverie+Clinica+de+Rehabilitacion+Pilar",
  googleRating: 4.3,
  googleReviewCount: 49,
  // Redes oficiales, tomadas del sitio actual (reverie.com.ar).
  facebookHref: "https://www.facebook.com/reverieclinica/",
  instagramHref: "https://www.instagram.com/reverieclinica/",
};

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMensaje,
)}`;
