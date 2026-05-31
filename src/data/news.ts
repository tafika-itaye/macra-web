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
];
