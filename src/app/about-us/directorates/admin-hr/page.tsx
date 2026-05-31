import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Administration and Human Resource | MACRA",
  description: "The Administration and Human Resource directorate of MACRA.",
};

export default function AdminHRPage() {
  return (
    <main>
      <PageHeader title="Administration and Human Resource" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Administration and Human Resource" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">Directorate of Administration and Human Resource</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">The Directorate of Administration and Human Resource is responsible for the management of MACRA human capital and administrative functions. It ensures that the Authority has the right people, systems, and facilities to deliver on its mandate.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">The directorate develops and implements human resource policies, manages staff recruitment and development, and oversees the administrative and facilities management functions of MACRA.</p>
        <h3 className="text-base font-semibold text-[#003087] mb-3">Key Functions</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Human resource planning, recruitment, and retention</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Staff training, development, and performance management</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Compensation and benefits administration</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Facilities and fleet management</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Records and information management</li>
          <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Procurement and asset management</li>
        </ul>
      </section>
    </main>
  );
}
