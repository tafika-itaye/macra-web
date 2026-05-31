import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "USF Stakeholder Consultations | MACRA",
  description: "Universal Service Fund stakeholder consultations managed by MACRA.",
};

const consultations = [
  { title: "USF Programme Review Consultation 2024", status: "Open", deadline: "30 June 2024", description: "MACRA invites stakeholder comments on the review of the Universal Service Fund programme priorities for 2025 to 2027." },
  { title: "Rural Connectivity Needs Assessment 2023", status: "Closed", deadline: "31 October 2023", description: "Consultation on the identification of underserved communities for USF-funded connectivity projects." },
  { title: "USF Contribution Framework Review 2023", status: "Closed", deadline: "28 July 2023", description: "Review of the framework governing operator contributions to the Universal Service Fund." },
];

export default function USFConsultationsPage() {
  return (
    <main>
      <PageHeader title="USF Stakeholder Consultations" />
      <JsonLd data={webPageSchema("USF Consultations", "Universal Service Fund public consultations and stakeholder submission opportunities managed by MACRA.", "/quick-links/usf-consultations")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Quick Links", href: "#" }, { label: "USF Stakeholder Consultations" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative w-full h-56 rounded-lg overflow-hidden mb-8">
          <Image src={bp("/images/quicklinks/quicklinks-innovation.jpg")} alt="USF stakeholder consultations" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" loading="lazy" />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">MACRA conducts regular stakeholder consultations on the Universal Service Fund to ensure that USF programmes reflect the needs of underserved communities and the views of the communications sector.</p>
        <div className="space-y-4">
          {consultations.map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-base font-semibold text-[#E30613]">{c.title}</h2>
                <span className={["text-xs font-medium px-2 py-0.5 rounded", c.status === "Open" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"].join(" ")}>{c.status}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">Deadline: {c.deadline}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
