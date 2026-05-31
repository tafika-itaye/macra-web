import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "National Addressing Project | MACRA",
  description: "The National Addressing Project in Malawi managed by MACRA.",
};

export default function NationalAddressingPage() {
  return (
    <main>
      <PageHeader title="National Addressing Project" />
      <JsonLd data={webPageSchema("National Addressing System", "The Malawi National Addressing System assigns unique addresses to every household and premises in the country.", "/services/postal/national-addressing")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/postal" }, { label: "Postal and Courier", href: "/services/postal" }, { label: "National Addressing Project" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">National Addressing Project</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">The National Addressing Project is a government initiative managed by MACRA to develop a formal street addressing and postcode system for Malawi. The project assigns unique addresses and postcodes to all premises across the country to improve mail delivery, emergency services, and business operations.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Accurate addressing is a foundation for e-commerce, financial services, and public service delivery. The project is being implemented in phases starting with urban centres and extending to all districts.</p>
        <h3 className="text-base font-semibold text-[#003087] mb-3">Project Objectives</h3>
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Assign unique physical addresses to all premises in Malawi</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Develop and implement a national postcode system</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Improve mail delivery accuracy and efficiency</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Support emergency services with accurate location data</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Enable e-commerce and digital financial services growth</li>
        </ul>
      </section>
    </main>
  );
}
