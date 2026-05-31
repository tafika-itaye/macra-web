import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Acts | MACRA",
  description: "Acts of Parliament governing communications regulation in Malawi.",
};

const acts = [
  { title: "Communications Act, 2016", description: "The principal legislation governing the regulation of communications services in Malawi. It establishes MACRA and sets out the framework for licensing, regulation, and consumer protection.", category: "Primary Legislation" },
  { title: "Electronic Transactions and Cyber Security Act, 2016", description: "Provides for the legal recognition of electronic transactions and establishes a framework for cyber security in Malawi.", category: "Primary Legislation" },
  { title: "Postal Corporation Act", description: "Governs the operations of the Malawi Posts Corporation and related postal services.", category: "Primary Legislation" },
  { title: "Data Protection Act, 2024", description: "Provides for the protection of personal data and the rights of data subjects in Malawi.", category: "Primary Legislation" },
];

export default function ActsPage() {
  return (
    <main>
      <PageHeader title="Acts" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Acts" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="relative w-full h-56 rounded-lg overflow-hidden mb-6">
            <Image src={bp("/images/media-documents.jpg")} alt="Acts and legislation" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">The following Acts of Parliament form the legal framework within which MACRA operates and regulates the communications sector in Malawi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {acts.map((act) => (
            <div key={act.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-[#C8A84B] uppercase tracking-wide">{act.category}</span>
              <h2 className="text-base font-semibold text-[#003087] mt-2 mb-2">{act.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{act.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
