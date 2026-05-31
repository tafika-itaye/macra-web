import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Broadcasting Quality of Service | MACRA",
  description: "Quality of service standards for broadcasting operators in Malawi.",
};

export default function BroadcastingQoSPage() {
  return (
    <main>
      <PageHeader title="Broadcasting Quality of Service" />
      <JsonLd data={webPageSchema("Broadcasting Quality of Service", "MACRA broadcasting quality of service standards and compliance monitoring for radio and television operators.", "/services/broadcasting/qos")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/broadcasting" }, { label: "Broadcasting", href: "/services/broadcasting" }, { label: "Quality of Service" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#E30613] mb-4">Broadcasting Quality of Service</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA sets minimum quality of service standards for broadcasting operators in Malawi. These standards cover signal coverage, technical transmission quality, and content standards compliance.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Broadcasters are required to submit annual QoS reports to MACRA. MACRA conducts independent monitoring of broadcasting signal quality across all licensed broadcasters.</p>
        <h3 className="text-base font-semibold text-[#E30613] mb-3">Key Standards</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Minimum signal coverage area as specified in the licence</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Transmission availability of at least 98% per month</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Audio and video quality meeting ITU standards</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Compliance with local content ratio requirements</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Emergency broadcasting capability on all licensed stations</li>
        </ul>
      </section>
    </main>
  );
}
