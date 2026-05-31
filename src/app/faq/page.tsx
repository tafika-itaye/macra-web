import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "FAQ | MACRA",
  description: "Frequently asked questions about MACRA and communications regulation in Malawi.",
};

const faqs = [
  { q: "What is MACRA?", a: "The Malawi Communications Regulatory Authority (MACRA) is the regulatory body responsible for regulating and monitoring the provision of communications services in Malawi. It was established under the Communications Act of 1998." },
  { q: "What services does MACRA regulate?", a: "MACRA regulates telecommunications, broadcasting, and postal and courier services in Malawi." },
  { q: "How do I file a complaint against a service provider?", a: "You can file a complaint by completing the Consumer Complaint Form available on the Application Forms page, or by contacting MACRA directly by phone or email. MACRA investigates complaints and mediates between consumers and service providers." },
  { q: "How do I apply for a telecommunications licence?", a: "Licence applications are submitted to MACRA using the prescribed application forms available on the Application Forms page. Applications must be accompanied by the required supporting documents and applicable fees." },
  { q: "What is type approval?", a: "Type approval is the certification process by which MACRA approves communications equipment for use on networks in Malawi. All equipment connected to public networks must be type-approved by MACRA." },
  { q: "What is the Universal Service Fund?", a: "The Universal Service Fund (USF) is a fund established to promote access to communications services in underserved areas of Malawi. It is administered by MACRA." },
  { q: "How do I contact MACRA?", a: "You can reach MACRA at (+265) (0) 1 810 497 or by email at dg@macra.mw. Our offices are located at Snr Chief Kapeni Campus, 8 Kasungu Crescent, Chichiri, Blantyre." },
  { q: "Does MACRA handle internet service complaints?", a: "Yes. Internet services are classified as telecommunications services and fall under MACRA regulation. Complaints about internet service providers can be submitted to MACRA for investigation." },
  { q: "What is the MACRA service charter?", a: "The MACRA Service Charter outlines the standards of service that the public can expect from MACRA and the commitments MACRA makes to its stakeholders." },
  { q: "How are broadcasting frequencies allocated?", a: "Broadcasting frequencies are allocated by MACRA following a formal application and licensing process. Allocations are made in accordance with the national frequency plan and international agreements." },
];

export default function FAQPage() {
  return (
    <main>
      <PageHeader title="Frequently Asked Questions" />
      <JsonLd data={webPageSchema("Frequently Asked Questions", "Answers to frequently asked questions about MACRA, licensing, consumer complaints, and communications services in Malawi.", "/faq")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-base font-semibold text-[#003087] mb-2">{item.q}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
