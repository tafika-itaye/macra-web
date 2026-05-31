import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://macra.mw";
  const routes = [
    "",
    "/about-us/organisation",
    "/about-us/board-of-directors",
    "/about-us/management",
    "/services/telecommunications",
    "/services/broadcasting",
    "/services/postal",
    "/consumer-protection/consumer-affairs",
    "/consumer-protection/rights-obligations",
    "/consumer-protection/consumer-complaints",
    "/macra-and-community",
    "/media/news",
    "/media/annual-reports",
    "/media/application-forms",
    "/vacancies",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
