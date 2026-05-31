export type Download = {
  title: string;
  filename: string;
  category: string;
  date?: string;
};

export const featuredDownloads: Download[] = [
  {
    title: "Type Approved Equipment List March 2026",
    filename: "type-approved-equipment-list-march-2026.pdf",
    category: "Type Approval",
    date: "2026-03",
  },
  {
    title: "Press Statement - Content Licensees Compliance",
    filename: "press-statement-content-licensees-compliance.pdf",
    category: "Press Releases",
    date: "2026",
  },
  {
    title: "National ICT Innovation Awards",
    filename: "national-ict-innovation-awards.pdf",
    category: "Events",
    date: "2026",
  },
];
