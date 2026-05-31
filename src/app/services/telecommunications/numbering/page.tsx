import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Numbering | MACRA",
  description: "Telephone numbering plan administration in Malawi.",
};

export default function NumberingPage() {
  return (
    <main>
      <PageHeader title="Numbering" />
      <JsonLd data={webPageSchema("Numbering", "MACRA national numbering plan administration and telephone number allocation in Malawi.", "/services/telecommunications/numbering")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/telecommunications" }, { label: "Telecommunications", href: "/services/telecommunications" }, { label: "Numbering" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#E30613] mb-4">Numbering Plan Administration</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA administers the national telephone numbering plan for Malawi. The numbering plan assigns number ranges to licensed operators and ensures that telephone numbers are used efficiently and in an organised manner.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Malawi uses the country code +265. MACRA allocates number blocks to operators and monitors utilisation to ensure efficient use of the finite numbering resource.</p>
        <h3 className="text-base font-semibold text-[#E30613] mb-3">Number Ranges</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E30613] text-white">
                <th className="text-left px-4 py-3 font-medium">Range</th>
                <th className="text-left px-4 py-3 font-medium">Service Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white"><td className="px-4 py-3 text-gray-800">088x xxxxxx</td><td className="px-4 py-3 text-gray-600">Mobile services</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-gray-800">099x xxxxxx</td><td className="px-4 py-3 text-gray-600">Mobile services</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 text-gray-800">01xx xxxxx</td><td className="px-4 py-3 text-gray-600">Fixed services</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-3 text-gray-800">080x xxxxxx</td><td className="px-4 py-3 text-gray-600">Freephone services</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
