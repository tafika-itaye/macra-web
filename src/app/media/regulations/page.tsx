import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Regulations | MACRA",
  description: "Regulations issued under the Communications Act by MACRA.",
};

const items = [
  { title: "Electronic Communications (Licensing) Regulations, 2020", category: "Licensing" },
  { title: "Electronic Communications (Interconnection) Regulations, 2020", category: "Interconnection" },
  { title: "Electronic Communications (Consumer Protection) Regulations, 2020", category: "Consumer Protection" },
  { title: "Electronic Communications (Quality of Service) Regulations, 2020", category: "Quality of Service" },
  { title: "Electronic Communications (Spectrum Management) Regulations, 2020", category: "Spectrum" },
  { title: "Electronic Communications (Type Approval) Regulations, 2020", category: "Type Approval" },
  { title: "Broadcasting Regulations, 2020", category: "Broadcasting" },
  { title: "Postal and Courier Services Regulations, 2020", category: "Postal" },
];

export default function RegulationsPage() {
  return (
    <main>
      <PageHeader title="Regulations" />
      <JsonLd data={webPageSchema("Regulations", "Statutory regulations made by MACRA under the Communications Act of Malawi.", "/media/regulations")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Regulations" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">The following regulations have been issued by MACRA under the Communications Act to provide detailed requirements for operators and other stakeholders.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E30613] text-white">
                <th className="text-left px-4 py-3 font-medium">Title</th>
                <th className="text-left px-4 py-3 font-medium">Category</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r, i) => (
                <tr key={r.title} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-800">{r.title}</td>
                  <td className="px-4 py-3 text-gray-500">{r.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
