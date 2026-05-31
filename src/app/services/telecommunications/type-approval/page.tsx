import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Type Approval | MACRA",
  description: "Type approval certification for communications equipment in Malawi.",
};

export default function TypeApprovalPage() {
  return (
    <main>
      <PageHeader title="Type Approval" />
      <JsonLd data={webPageSchema("Type Approval", "MACRA type approval process for communications equipment and terminal devices sold or used in Malawi.", "/services/telecommunications/type-approval")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/telecommunications" }, { label: "Telecommunications", href: "/services/telecommunications" }, { label: "Type Approval" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#E30613] mb-4">Type Approval</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">Type approval is the process by which MACRA certifies that communications equipment meets the technical standards required for use in Malawi. All terminal equipment and radio communications devices connected to public networks or used over the air must be type-approved by MACRA before sale or use.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Type approval protects consumers and the integrity of communications networks by ensuring that equipment operates correctly and does not cause interference.</p>
        <h3 className="text-base font-semibold text-[#E30613] mb-3">Equipment Requiring Type Approval</h3>
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Mobile handsets and smartphones</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Modems, routers, and data terminal equipment</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Radio transmitters and receivers</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Private branch exchanges (PBX)</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>VSAT terminals and satellite equipment</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Fixed telephone sets</li>
        </ul>
        <h3 className="text-base font-semibold text-[#E30613] mb-3">Application Process</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">Submit a type approval application to MACRA with the equipment technical specifications, test reports from an accredited laboratory, and the prescribed application fee. MACRA will review the application and issue a type approval certificate for equipment that meets the required standards.</p>
        <p className="text-sm text-gray-500">For application forms visit the <a href="/media/application-forms" className="text-[#E30613] underline hover:text-[#C8A84B]">Application Forms</a> page or contact MACRA at <a href="mailto:dg@macra.mw" className="text-[#E30613] underline hover:text-[#C8A84B]">dg@macra.mw</a>.</p>
      </section>
    </main>
  );
}
