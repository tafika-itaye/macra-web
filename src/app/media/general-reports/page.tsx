import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "General Reports | MACRA",
  description: "General reports and publications from MACRA.",
};

const reports = [
  { title: "State of the Communications Sector Report 2023", description: "Comprehensive annual overview of the telecommunications, broadcasting, and postal sectors in Malawi.", year: "2023" },
  { title: "State of the Communications Sector Report 2022", description: "Annual review of sector performance, regulatory activities, and market developments.", year: "2022" },
  { title: "Spectrum Audit Report 2023", description: "Report on the utilisation of assigned radio frequency spectrum by licensed operators.", year: "2023" },
  { title: "Infrastructure Sharing Report 2022", description: "Review of infrastructure sharing arrangements among telecommunications operators in Malawi.", year: "2022" },
];

export default function GeneralReportsPage() {
  return (
    <main>
      <PageHeader title="General Reports" />
      <JsonLd data={webPageSchema("General Reports", "MACRA general reports, sector statistics, and publications for stakeholders and the public.", "/media/general-reports")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "General Reports" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {reports.map((r) => (
            <div key={r.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-400">{r.year}</span>
              <h2 className="text-base font-semibold text-[#E30613] mt-1 mb-2">{r.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
