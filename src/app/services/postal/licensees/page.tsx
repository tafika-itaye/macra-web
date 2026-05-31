import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Postal Licensees | MACRA",
  description: "Licensed postal and courier operators in Malawi.",
};

const licensees = [
  { name: "Malawi Posts Corporation", type: "Public Postal Operator", status: "Active" },
  { name: "DHL Express Malawi", type: "International Courier", status: "Active" },
  { name: "FedEx Malawi", type: "International Courier", status: "Active" },
  { name: "TNT Malawi", type: "International Courier", status: "Active" },
  { name: "Skynet Worldwide Express", type: "Domestic and International Courier", status: "Active" },
  { name: "Swift Couriers", type: "Domestic Courier", status: "Active" },
];

export default function PostalLicenseesPage() {
  return (
    <main>
      <PageHeader title="Postal Licensees" />
      <JsonLd data={webPageSchema("Postal Licensees", "List of licensed postal service operators currently authorised to operate in Malawi.", "/services/postal/licensees")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/postal" }, { label: "Postal and Courier", href: "/services/postal" }, { label: "Licensees" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">The following organisations hold valid postal and courier licences issued by MACRA.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E30613] text-white">
                <th className="text-left px-4 py-3 font-medium">Operator</th>
                <th className="text-left px-4 py-3 font-medium">Licence Type</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {licensees.map((l, i) => (
                <tr key={l.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-800">{l.name}</td>
                  <td className="px-4 py-3 text-gray-600">{l.type}</td>
                  <td className="px-4 py-3"><span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded">{l.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
