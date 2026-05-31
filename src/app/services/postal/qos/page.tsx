import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import { bp } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Postal Quality of Service | MACRA",
  description: "Quality of service standards for postal and courier operators in Malawi.",
};

export default function PostalQoSPage() {
  return (
    <main>
      <PageHeader title="Postal Quality of Service" />
      <JsonLd data={webPageSchema("Postal Quality of Service", "MACRA postal quality of service standards and performance monitoring for licensed postal operators.", "/services/postal/qos")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/postal" }, { label: "Postal and Courier", href: "/services/postal" }, { label: "Quality of Service" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#E30613] mb-4">Postal Quality of Service</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">MACRA sets minimum quality of service standards for postal and courier operators in Malawi. These standards ensure that consumers receive reliable and timely postal services.</p>
        <h3 className="text-base font-semibold text-[#E30613] mb-3">Key Standards</h3>
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Domestic standard mail delivered within 5 working days for 90% of items</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Express domestic delivery within 24 hours for 95% of items</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Customer complaint acknowledgement within 2 working days</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Customer complaint resolution within 21 days</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Loss and damage rate not exceeding 0.5% of items handled</li>
        </ul>
        <p className="text-sm text-gray-500">Annual postal QoS monitoring reports are available on the <a href={bp("/media/qos-reports")} className="text-[#E30613] underline hover:text-[#C8A84B]">QoS Reports</a> page.</p>
      </section>
    </main>
  );
}
