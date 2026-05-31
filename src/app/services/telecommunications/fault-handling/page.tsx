import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Fault Handling Regulations | MACRA",
  description: "Fault handling requirements for telecommunications operators in Malawi.",
};

export default function FaultHandlingPage() {
  return (
    <main>
      <PageHeader title="Fault Handling Regulations" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/telecommunications" }, { label: "Telecommunications", href: "/services/telecommunications" }, { label: "Fault Handling Regulations" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">Fault Handling Regulations</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA requires telecommunications operators to maintain effective fault reporting and resolution procedures. Operators must provide customers with accessible channels for reporting faults and must resolve reported faults within prescribed timeframes.</p>
        <h3 className="text-base font-semibold text-[#003087] mb-3">Operator Requirements</h3>
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Maintain a 24-hour fault reporting hotline accessible to all customers</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Acknowledge reported faults within 4 hours</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Resolve 80% of faults within 24 hours of reporting</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Provide customers with fault reference numbers for tracking</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Submit monthly fault statistics reports to MACRA</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Compensate customers where service disruptions exceed regulated thresholds</li>
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">Customers whose faults are not resolved within the required timeframes may escalate complaints to MACRA. Contact MACRA at <a href="mailto:dg@macra.mw" className="text-[#003087] underline hover:text-[#C8A84B]">dg@macra.mw</a> or visit the <a href="/consumer-protection/consumer-complaints" className="text-[#003087] underline hover:text-[#C8A84B]">Consumer Complaints</a> page.</p>
      </section>
    </main>
  );
}
