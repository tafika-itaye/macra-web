import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import NewsCard from "@/components/ui/NewsCard";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  openGraph: {
    title: "News | MACRA",
    description: "Latest news, press releases, and announcements from the Malawi Communications Regulatory Authority.",
    url: "https://tafika-itaye.github.io/media/news",
    siteName: "MACRA - Malawi Communications Regulatory Authority",
    locale: "en_US",
    type: "website",
    images: [{ url: "/macra-web/images/macra-logo.png", width: 200, height: 60, alt: "MACRA" }],
  },
  twitter: {
    card: "summary",
    title: "News | MACRA",
    description: "Latest news, press releases, and announcements from the Malawi Communications Regulatory Authority.",
    images: ["/macra-web/images/macra-logo.png"],
  },
  description: "Latest news and events from MACRA - Malawi Communications Regulatory Authority.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News" subtitle="Latest from MACRA" />
      <JsonLd data={webPageSchema("News", "Latest news, press releases, and announcements from the Malawi Communications Regulatory Authority.", "/media/news")} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Media" }, { label: "News" }]} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {newsItems.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
