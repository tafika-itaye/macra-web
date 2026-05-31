import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Legal Services | MACRA",
  description: "The Legal Services directorate of MACRA.",
};

export default function LegalServicesPage() {
  return (
    <main>
      <PageHeader title="Legal Services" />
      <JsonLd data={webPageSchema("Legal Services Directorate", "The Legal Services Directorate provides legal advice and ensures regulatory compliance across MACRA operations.", "/about-us/directorates/legal-services")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Legal Services" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">Directorate of Legal Services</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">The Directorate of Legal Services provides legal advisory and regulatory drafting support to MACRA. It ensures that the Authority exercises its powers lawfully and that its regulatory instruments are legally sound.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">The directorate handles dispute resolution, manages litigation involving MACRA, drafts regulations and licence conditions, and provides legal opinions on regulatory matters.</p>
        <h3 className="text-base font-semibold text-[#003087] mb-3">Key Functions</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Legal advisory services to MACRA management and Board</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Drafting of regulations, licence conditions, and determinations</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Dispute resolution and arbitration</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Litigation management</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Contracts review and management</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Compliance with legislative requirements</li>
        </ul>
      </section>
    </main>
  );
}
