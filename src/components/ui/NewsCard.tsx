import { NewsItem } from "@/data/news";
import Link from "next/link";

export default function NewsCard({ item }: { item: NewsItem }) {
  const date = new Date(item.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-100 h-44 flex items-center justify-center text-gray-400 text-sm">
        {item.imageFile ? (
          <img
            src={`/images/news/${item.imageFile}`}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>No image available</span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">
          {date} | {item.category.join(", ")}
        </p>
        <h3 className="font-semibold text-[#E30613] mb-2 leading-snug">
          <Link href={bp(`/media/news/${item.slug}`)} className="hover:underline">
            {item.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{item.excerpt}</p>
        <Link
          href={bp(`/media/news/${item.slug}`)}
          className="mt-4 inline-block text-sm text-[#E30613] font-medium hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
