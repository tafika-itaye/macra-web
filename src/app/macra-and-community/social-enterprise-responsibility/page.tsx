import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Social Enterprise Responsibility | MACRA",
  description: "MACRA social enterprise responsibility programmes and community initiatives.",
};

export default function SERPage() {
  return (
    <main>
      <PageHeader title="Social Enterprise Responsibility" />
      <JsonLd data={webPageSchema("Social Enterprise Responsibility", "MACRA corporate social responsibility initiatives supporting communities and digital inclusion in Malawi.", "/macra-and-community/social-enterprise-responsibility")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "MACRA and Community", href: "/macra-and-community" }, { label: "Social Enterprise Responsibility" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-4">Our Community Commitment</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA is committed to contributing to the social and economic development of Malawi through its Social Enterprise Responsibility programmes. These programmes focus on digital literacy, education, and community access to communications services.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA works with schools, communities, and government partners to extend the benefits of communications technology to all Malawians, with particular focus on underserved communities.</p>
            <h3 className="text-base font-semibold text-[#003087] mt-4 mb-3">Programme Areas</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Digital literacy training in schools and communities</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>ICT equipment donations to educational institutions</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Community internet access point support</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Consumer awareness campaigns on communications rights</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Support for persons with disabilities in accessing communications services</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/community/community-outreach.jpg")} alt="MACRA community outreach" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
