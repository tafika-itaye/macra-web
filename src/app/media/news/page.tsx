import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import NewsCard from "@/components/ui/NewsCard";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and events from MACRA - Malawi Communications Regulatory Authority.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News" subtitle="Latest from MACRA" />
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
