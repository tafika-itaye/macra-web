export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  image?: string;
  summary: string;
  body: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "minister-of-ict-visits-macra",
    title: "Minister of ICT visits MACRA",
    date: "24 March 2026",
    categories: ["Events", "News"],
    image: "/images/news/news-minister-ict-visit.jpg",
    summary: "We hosted the Minister of Information and Communications Technology, Dr Shadric Namalomba, at our head office in Blantyre to check progress of some key projects.",
    body: "The working visit is part of the government digitalization drive as Malawi moves to strengthen its digital infrastructure.",
  },
  {
    slug: "qos-monitoring-campaign-2026",
    title: "MACRA launches quality of service monitoring campaign",
    date: "10 February 2026",
    categories: ["News", "Telecommunications"],
    image: "/images/news/news-qos-campaign.jpg",
    summary: "MACRA has launched a nationwide quality of service monitoring campaign targeting mobile network operators across all regions of Malawi.",
    body: "The campaign aims to ensure operators meet minimum service standards as defined in the Quality of Service regulations.",
  },
  {
    slug: "spectrum-licence-renewal-2026",
    title: "Public notice: spectrum licence renewal window open",
    date: "15 January 2026",
    categories: ["Notice", "Spectrum"],
    image: "/images/news/news-spectrum-renewal.jpg",
    summary: "MACRA wishes to inform all spectrum licence holders that the annual licence renewal window is now open.",
    body: "Licensees are required to submit renewal applications together with the prescribed fees before the deadline.",
  },
  {
    slug: "macra-zicta-bilateral-cooperation",
    title: "MACRA and ZICTA sign bilateral cooperation agreement",
    date: "30 November 2025",
    categories: ["News", "International"],
    image: "/images/news/news-zicta-cooperation.jpg",
    summary: "MACRA and the Zambia Information and Communications Technology Authority signed a bilateral cooperation agreement to strengthen cross-border regulatory collaboration.",
    body: "The agreement covers areas including spectrum management, type approval, and consumer protection.",
  },
  {
    slug: "consumer-awareness-rural-districts",
    title: "Consumer awareness campaign reaches rural districts",
    date: "8 October 2025",
    categories: ["Events", "Consumer Protection"],
    image: "/images/news/news-consumer-awareness.jpg",
    summary: "MACRA concluded a three-week consumer awareness campaign covering Ntcheu, Chirwa, Kasungu, and Mchinji districts.",
    body: "The campaign educated consumers on their rights and obligations under the Communications Act.",
  },
]
