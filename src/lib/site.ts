// Datos de contacto. Todo lo marcado como PLACEHOLDER hay que confirmarlo con
// el cliente antes de publicar.

export const site = {
  nombre: "RÊVERIE",
  telefono1: "(0230) 4672991",
  telefono2: "(0230) 4426617",
  telefonoHref: "tel:+542304672991",
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
};

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMensaje,
)}`;
