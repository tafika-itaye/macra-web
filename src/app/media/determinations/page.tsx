import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Determinations | MACRA",
  description: "Regulatory determinations issued by MACRA.",
};

const determinations = [
  { title: "Determination on Mobile Termination Rates 2023", description: "Sets the regulated rates for terminating voice calls on mobile networks in Malawi.", date: "March 2023" },
  { title: "Determination on Fixed Termination Rates 2023", description: "Sets the regulated rates for terminating calls on fixed networks in Malawi.", date: "March 2023" },
  { title: "Determination on Significant Market Power 2022", description: "Identifies operators with significant market power in the telecommunications market and sets corresponding obligations.", date: "November 2022" },
  { title: "Determination on Interconnection Disputes 2022", description: "Resolves disputes between operators regarding interconnection arrangements and rates.", date: "June 2022" },
  { title: "Determination on Spectrum Fees 2021", description: "Sets the fees payable for the use of radio frequency spectrum in Malawi.", date: "January 2021" },
];

export default function DeterminationsPage() {
  return (
    <main>
      <PageHeader title="Determinations" />
      <JsonLd data={webPageSchema("Determinations", "MACRA regulatory determinations and formal decisions on licensing, disputes, and sector matters.", "/media/determinations")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Determinations" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">MACRA issues determinations on regulatory matters affecting the communications sector. These are binding decisions made under the Communications Act.</p>
        <div className="space-y-4">
          {determinations.map((d) => (
            <div key={d.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-400">{d.date}</span>
              <h2 className="text-base font-semibold text-[#003087] mt-1 mb-2">{d.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
