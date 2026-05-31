import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "MACRA Magazine | MACRA",
  description: "The MACRA Magazine covering developments in the Malawi communications sector.",
};

const issues = [
  { title: "MACRA Magazine Issue 12", description: "Features coverage of the national broadband expansion programme, consumer protection highlights, and sector performance statistics.", year: "2024" },
  { title: "MACRA Magazine Issue 11", description: "Covers the launch of the Muuni Innovation Fund, spectrum management updates, and profiles of licensed operators.", year: "2023" },
  { title: "MACRA Magazine Issue 10", description: "Highlights the Universal Service Fund projects, postal sector modernisation, and MACRA community outreach programmes.", year: "2023" },
  { title: "MACRA Magazine Issue 9", description: "Reviews MACRA regulatory achievements, broadcasting sector growth, and the national addressing project.", year: "2022" },
];

export default function MacraMagazinePage() {
  return (
    <main>
      <PageHeader title="MACRA Magazine" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "MACRA Magazine" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative w-full h-56 rounded-lg overflow-hidden mb-8">
          <Image src={bp("/images/media/media-documents.jpg")} alt="MACRA Magazine" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <div key={issue.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-400">{issue.year}</span>
              <h2 className="text-base font-semibold text-[#003087] mt-1 mb-2">{issue.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{issue.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
