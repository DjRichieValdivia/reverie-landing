import type { MetadataRoute } from "next";

// Demo sin aprobar todavía: no debe indexarse en buscadores.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
