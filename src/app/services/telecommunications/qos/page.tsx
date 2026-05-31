import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Quality of Service - Telecommunications | MACRA",
  description: "Quality of service standards and monitoring for telecommunications services in Malawi.",
};

const standards = [
  { parameter: "Voice Call Setup Success Rate", target: "Greater than 95%", service: "Mobile Voice" },
  { parameter: "Call Drop Rate", target: "Less than 2%", service: "Mobile Voice" },
  { parameter: "Data Throughput (Download)", target: "At least 1 Mbps average", service: "Mobile Data" },
  { parameter: "Network Availability", target: "Greater than 99%", service: "All Services" },
  { parameter: "Fault Repair Time", target: "Within 24 hours for 80% of faults", service: "Fixed Services" },
  { parameter: "Customer Complaint Resolution", target: "Within 14 days", service: "All Services" },
];

export default function TelecomsQoSPage() {
  return (
    <main>
      <PageHeader title="Quality of Service" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/telecommunications" }, { label: "Telecommunications", href: "/services/telecommunications" }, { label: "Quality of Service" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">MACRA sets and enforces minimum quality of service standards for telecommunications operators in Malawi. Operators are required to meet these standards and submit regular QoS reports to MACRA. MACRA conducts independent QoS measurements to verify compliance.</p>
        <h2 className="text-lg font-bold text-[#003087] mb-4">Key QoS Parameters</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#003087] text-white">
                <th className="text-left px-4 py-3 font-medium">Parameter</th>
                <th className="text-left px-4 py-3 font-medium">Target</th>
                <th className="text-left px-4 py-3 font-medium">Service</th>
              </tr>
            </thead>
            <tbody>
              {standards.map((s, i) => (
                <tr key={s.parameter} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-gray-800">{s.parameter}</td>
                  <td className="px-4 py-3 text-gray-600">{s.target}</td>
                  <td className="px-4 py-3 text-gray-500">{s.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">QoS monitoring reports are published quarterly. View reports on the <a href="/media/qos-reports" className="text-[#003087] underline hover:text-[#C8A84B]">QoS Reports</a> page.</p>
      </section>
    </main>
  );
}
