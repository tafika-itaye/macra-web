import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Research | MACRA",
  description: "Research publications and studies by MACRA on the Malawi communications sector.",
};

const research = [
  { title: "Communications Sector Survey Report 2023", description: "Annual survey tracking key performance indicators across telecommunications, broadcasting, and postal sectors.", year: "2023", category: "Sector Survey" },
  { title: "Mobile Broadband Coverage Study 2022", description: "Analysis of mobile broadband coverage across all districts of Malawi with population coverage statistics.", year: "2022", category: "Coverage Study" },
  { title: "Consumer Satisfaction Survey 2023", description: "Survey of consumer experiences with telecommunications and broadcasting services in Malawi.", year: "2023", category: "Consumer Research" },
  { title: "Digital Readiness Assessment 2022", description: "Assessment of Malawi readiness for digital transformation across infrastructure, skills, and policy dimensions.", year: "2022", category: "Policy Research" },
  { title: "Universal Access Study 2021", description: "Study examining barriers to communications access in rural and underserved communities in Malawi.", year: "2021", category: "Access Study" },
];

export default function ResearchPage() {
  return (
    <main>
      <PageHeader title="Research" />
      <JsonLd data={webPageSchema("Research", "MACRA research publications, sector studies, and market analysis reports.", "/media/research")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Research" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">MACRA conducts and publishes research to inform evidence-based regulation and policy development in the Malawi communications sector.</p>
        <div className="space-y-4">
          {research.map((r) => (
            <div key={r.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="sm:w-32 flex-shrink-0">
                <span className="text-xs font-medium text-[#C8A84B] uppercase tracking-wide">{r.category}</span>
                <p className="text-xs text-gray-400 mt-1">{r.year}</p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-[#003087] mb-1">{r.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
