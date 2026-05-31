import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "QoS Reports | MACRA",
  description: "Quality of Service monitoring reports published by MACRA.",
};

const reports = [
  { title: "Telecommunications QoS Report Q4 2023", category: "Telecommunications", period: "Q4 2023" },
  { title: "Telecommunications QoS Report Q3 2023", category: "Telecommunications", period: "Q3 2023" },
  { title: "Telecommunications QoS Report Q2 2023", category: "Telecommunications", period: "Q2 2023" },
  { title: "Telecommunications QoS Report Q1 2023", category: "Telecommunications", period: "Q1 2023" },
  { title: "Broadcasting QoS Report 2023", category: "Broadcasting", period: "Annual 2023" },
  { title: "Postal QoS Report 2023", category: "Postal", period: "Annual 2023" },
  { title: "Telecommunications QoS Report Q4 2022", category: "Telecommunications", period: "Q4 2022" },
  { title: "Broadcasting QoS Report 2022", category: "Broadcasting", period: "Annual 2022" },
];

export default function QoSReportsPage() {
  return (
    <main>
      <PageHeader title="QoS Reports" />
      <JsonLd data={webPageSchema("QoS Reports", "MACRA quality of service monitoring reports covering telecoms, broadcasting, and postal sectors.", "/media/qos-reports")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "QoS Reports" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">MACRA publishes Quality of Service monitoring reports to track compliance by operators with QoS standards across telecommunications, broadcasting, and postal services.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#003087] text-white">
                <th className="text-left px-4 py-3 font-medium">Report</th>
                <th className="text-left px-4 py-3 font-medium">Category</th>
                <th className="text-left px-4 py-3 font-medium">Period</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r, i) => (
                <tr key={r.title} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-800">{r.title}</td>
                  <td className="px-4 py-3 text-gray-500">{r.category}</td>
                  <td className="px-4 py-3 text-gray-500">{r.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
