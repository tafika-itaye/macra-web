import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Finance Directorate | MACRA",
  description: "The Finance directorate of MACRA.",
};

export default function FinancePage() {
  return (
    <main>
      <PageHeader title="Finance" />
      <JsonLd data={webPageSchema("Finance Directorate", "The Finance Directorate manages MACRA financial resources, budgeting, and accounts.", "/about-us/directorates/finance")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Finance" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#E30613] mb-4">Directorate of Finance</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">The Directorate of Finance is responsible for financial management, planning, and reporting at MACRA. It ensures the prudent use of public resources and maintains the financial integrity of the Authority.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">The directorate prepares annual budgets, manages accounts, coordinates external audits, and ensures compliance with public finance management requirements.</p>
        <h3 className="text-base font-semibold text-[#E30613] mb-3">Key Functions</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Budget preparation and financial planning</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Financial accounting and reporting</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Treasury management and cash flow planning</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Internal controls and audit coordination</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Revenue collection and licence fee management</li>
        </ul>
      </section>
    </main>
  );
}
