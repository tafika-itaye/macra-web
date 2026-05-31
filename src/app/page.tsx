import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import NewsCard from "@/components/ui/NewsCard";
import DownloadTable from "@/components/ui/DownloadTable";
import { newsItems } from "@/data/news";
import { featuredDownloads } from "@/data/downloads";

export const metadata: Metadata = {
  title: "MACRA - Malawi Communications Regulatory Authority",
  description:
    "MACRA regulates and monitors the provision of communications services in Malawi. Communications services for a digitally transformed nation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section aria-labelledby="news-heading" className="mb-16">
          <h2 id="news-heading" className="text-2xl font-bold text-[#E30613] mb-6">
            Latest News and Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
        <section aria-labelledby="downloads-heading">
          <h2 id="downloads-heading" className="text-2xl font-bold text-[#E30613] mb-6">
            Press Releases and Notices
          </h2>
          <DownloadTable downloads={featuredDownloads} />
        </section>
      </div>
    </>
  );
}
