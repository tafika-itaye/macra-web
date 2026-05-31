import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Rules and Regulations | MACRA",
  description: "Rules and regulations issued by MACRA governing communications services in Malawi.",
};

const regulations = [
  { title: "Telecommunications Regulations, 2017", category: "Telecommunications" },
  { title: "Broadcasting Regulations, 2017", category: "Broadcasting" },
  { title: "Postal and Courier Services Regulations, 2017", category: "Postal" },
  { title: "Type Approval Regulations", category: "Telecommunications" },
  { title: "Quality of Service Regulations", category: "Telecommunications" },
  { title: "Numbering Regulations", category: "Telecommunications" },
  { title: "Consumer Protection Regulations", category: "Consumer Protection" },
  { title: "Interconnection Regulations", category: "Telecommunications" },
  { title: "Frequency Management Regulations", category: "Spectrum" },
];

export default function RulesRegulationsPage() {
  return (
    <main>
      <PageHeader title="Rules and Regulations" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Rules and Regulations" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">MACRA issues rules and regulations under the Communications Act to provide detailed requirements for licensees and other stakeholders in the communications sector.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#003087] text-white">
                <th className="text-left px-4 py-3 font-medium">Title</th>
                <th className="text-left px-4 py-3 font-medium">Category</th>
              </tr>
            </thead>
            <tbody>
              {regulations.map((r, i) => (
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
