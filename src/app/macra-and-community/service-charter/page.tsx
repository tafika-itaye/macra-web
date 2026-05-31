import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Service Charter | MACRA",
  description: "The MACRA Service Charter outlining service standards and commitments.",
};

const commitments = [
  { service: "Licence Applications", standard: "Acknowledge within 5 working days. Decision within 60 working days of receipt of complete application." },
  { service: "Type Approval Applications", standard: "Acknowledge within 5 working days. Decision within 30 working days of receipt of complete application and test reports." },
  { service: "Consumer Complaints", standard: "Acknowledge within 5 working days. Resolution or referral within 30 working days." },
  { service: "General Enquiries", standard: "Respond to written enquiries within 10 working days." },
  { service: "Public Consultations", standard: "Provide at least 30 days for public comment on regulatory proposals." },
  { service: "Website Information", standard: "Update key regulatory information within 5 working days of changes." },
];

export default function ServiceCharterPage() {
  return (
    <main>
      <PageHeader title="Service Charter" />
      <JsonLd data={webPageSchema("Service Charter", "The MACRA service charter sets out the standards of service delivery that stakeholders can expect from the authority.", "/macra-and-community/service-charter")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "MACRA and Community", href: "/macra-and-community" }, { label: "Service Charter" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">Our Service Commitments</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">MACRA is committed to delivering high-quality regulatory services to all stakeholders. This Service Charter sets out the standards of service you can expect from MACRA and what to do if we fall short of these standards.</p>
        <div className="space-y-4">
          {commitments.map((c) => (
            <div key={c.service} className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-[#003087] mb-1">{c.service}</h3>
              <p className="text-sm text-gray-600">{c.standard}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-[#003087] mb-2">If We Fall Short</h3>
          <p className="text-sm text-gray-600 leading-relaxed">If MACRA does not meet the standards in this charter, please contact us at <a href="mailto:dg@macra.mw" className="text-[#003087] underline hover:text-[#C8A84B]">dg@macra.mw</a> or call <a href="tel:+2651810497" className="text-[#003087] underline hover:text-[#C8A84B]">(+265) (0) 1 810 497</a>.</p>
        </div>
      </section>
    </main>
  );
}
