export type NewsItem = {
  title: string;
  slug: string;
  date: string;
  category: string[];
  excerpt: string;
  imageFile?: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Minister of ICT visits MACRA",
    slug: "minister-of-ict-visits-macra",
    date: "2026-03-24",
    category: ["Events", "News"],
    excerpt:
      "We hosted the Minister of Information and Communications Technology, Dr Shadric Namalomba, at our head office in Blantyre to check progress of some key projects. The working visit is part of the government digitalization drive as Malawi moves to strengthen its digital infrastructure.",
  },
  {
    title: "MACRA launches quality of service monitoring campaign",
    slug: "qos-monitoring-campaign-2026",
    date: "2026-02-10",
    category: ["News", "Telecommunications"],
    excerpt:
      "MACRA has launched a nationwide quality of service monitoring campaign targeting mobile network operators across all regions of Malawi. The campaign aims to ensure operators meet minimum service standards and that consumers receive reliable, affordable connectivity.",
  },
  {
    title: "Public notice: spectrum licence renewal window open",
    slug: "spectrum-licence-renewal-2026",
    date: "2026-01-15",
    category: ["Notice", "Spectrum"],
    excerpt:
      "MACRA wishes to inform all spectrum licence holders that the annual licence renewal window is now open. Licensees are required to submit renewal applications together with the prescribed fees before the deadline of 28 February 2026 to avoid service interruptions.",
  },
  {
    title: "MACRA and ZICTA sign bilateral cooperation agreement",
    slug: "macra-zicta-bilateral-agreement",
    date: "2025-11-30",
    category: ["News", "International"],
    excerpt:
      "MACRA and the Zambia Information and Communications Technology Authority signed a bilateral cooperation agreement to strengthen cross-border regulatory collaboration, share best practices, and coordinate on spectrum management along the Malawi-Zambia border.",
  },
  {
    title: "Consumer awareness campaign reaches rural districts",
    slug: "consumer-awareness-rural-2025",
    date: "2025-10-08",
    category: ["Events", "Consumer Protection"],
    excerpt:
      "MACRA concluded a three-week consumer awareness campaign covering Ntchisi, Dowa, Kasungu, and Mzimba districts. The campaign educated citizens on their rights as communications consumers and on how to lodge complaints through MACRA official channels.",
  },
];

