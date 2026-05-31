import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Broadcasting Frequencies | MACRA",
  description: "Broadcasting frequency allocation and assignment in Malawi.",
};

export default function BroadcastingFrequenciesPage() {
  return (
    <main>
      <PageHeader title="Broadcasting Frequencies" />
      <JsonLd data={webPageSchema("Broadcasting Frequencies", "MACRA frequency planning and allocation for broadcasting services in Malawi.", "/services/broadcasting/frequencies")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/broadcasting" }, { label: "Broadcasting", href: "/services/broadcasting" }, { label: "Broadcasting Frequencies" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#E30613] mb-4">Broadcasting Frequencies</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA manages the allocation and assignment of frequencies for broadcasting services in Malawi. Frequency assignments are made as part of the broadcasting licence and in accordance with the national frequency plan.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Malawi uses the following frequency bands for broadcasting services:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E30613] text-white">
                <th className="text-left px-4 py-3 font-medium">Band</th>
                <th className="text-left px-4 py-3 font-medium">Frequency Range</th>
                <th className="text-left px-4 py-3 font-medium">Service</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white"><td className="px-4 py-3 text-gray-800">FM</td><td className="px-4 py-3 text-gray-600">87.5 - 108 MHz</td><td className="px-4 py-3 text-gray-500">FM Radio Broadcasting</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-gray-800">VHF</td><td className="px-4 py-3 text-gray-600">174 - 230 MHz</td><td className="px-4 py-3 text-gray-500">Digital Terrestrial Television</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-gray-800">UHF</td><td className="px-4 py-3 text-gray-600">470 - 694 MHz</td><td className="px-4 py-3 text-gray-500">Digital Terrestrial Television</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">Frequency assignments are included in each broadcasting licence. Applications for new broadcasting licences should be submitted to MACRA using the forms on the <a href="/media/application-forms" className="text-[#E30613] underline hover:text-[#C8A84B]">Application Forms</a> page.</p>
      </section>
    </main>
  );
}
