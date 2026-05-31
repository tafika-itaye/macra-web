import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Policies | MACRA",
  description: "Policy documents issued by MACRA on communications regulation in Malawi.",
};

const policies = [
  { title: "National ICT Policy", description: "Sets out the government strategy for the development of information and communications technology in Malawi.", year: "2021" },
  { title: "Spectrum Management Policy", description: "Governs the allocation, assignment, and use of radio frequency spectrum in Malawi.", year: "2019" },
  { title: "Universal Service and Access Policy", description: "Provides the framework for extending communications services to underserved communities across Malawi.", year: "2018" },
  { title: "Cybersecurity Policy", description: "Sets out the national approach to protecting critical communications infrastructure and ensuring cyber resilience.", year: "2021" },
  { title: "Consumer Protection Policy", description: "Establishes the rights of communications consumers and the obligations of service providers in Malawi.", year: "2020" },
];

export default function PoliciesPage() {
  return (
    <main>
      <PageHeader title="Policies" />
      <JsonLd data={webPageSchema("Policies", "National communications policies and MACRA policy documents guiding sector regulation.", "/media/policies")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Policies" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative w-full h-56 rounded-lg overflow-hidden mb-8">
          <Image src={bp("/images/media/media-policy.jpg")} alt="MACRA policies" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((p) => (
            <div key={p.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-400">{p.year}</span>
              <h2 className="text-base font-semibold text-[#003087] mt-1 mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
