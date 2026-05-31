import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Post Codes | MACRA",
  description: "Malawi postcode system managed by MACRA.",
};

const zones = [
  { zone: "1", area: "Blantyre and Southern Region Urban", example: "312225" },
  { zone: "2", area: "Lilongwe and Central Region Urban", example: "265000" },
  { zone: "3", area: "Mzuzu and Northern Region Urban", example: "333000" },
  { zone: "4", area: "Southern Region Rural", example: "400000" },
  { zone: "5", area: "Central Region Rural", example: "500000" },
  { zone: "6", area: "Northern Region Rural", example: "600000" },
];

export default function PostCodesPage() {
  return (
    <main>
      <PageHeader title="Post Codes" />
      <JsonLd data={webPageSchema("Post Codes", "Malawi post codes directory and the national postal code system administered by MACRA.", "/services/postal/post-codes")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/postal" }, { label: "Postal and Courier", href: "/services/postal" }, { label: "Post Codes" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">Malawi Post Codes</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Malawi uses a 6-digit postcode system developed by MACRA under the National Addressing Project. Postcodes are assigned to all premises to facilitate accurate mail delivery and location identification.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#003087] text-white">
                <th className="text-left px-4 py-3 font-medium">Zone</th>
                <th className="text-left px-4 py-3 font-medium">Area</th>
                <th className="text-left px-4 py-3 font-medium">Example Code</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((z, i) => (
                <tr key={z.zone} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-800">{z.zone}</td>
                  <td className="px-4 py-3 text-gray-600">{z.area}</td>
                  <td className="px-4 py-3 text-gray-500 font-mono">{z.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
