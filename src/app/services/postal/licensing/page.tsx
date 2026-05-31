import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Postal and Courier Licensing | MACRA",
  description: "Licensing requirements for postal and courier operators in Malawi.",
};

export default function PostalLicensingPage() {
  return (
    <main>
      <PageHeader title="Postal and Courier Licensing" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/postal" }, { label: "Postal and Courier", href: "/services/postal" }, { label: "Licensing" }]} />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#003087] mb-4">Postal and Courier Licensing</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">All postal and courier service operators in Malawi must hold a valid licence issued by MACRA. The licensing framework distinguishes between reserved postal services operated by the Malawi Posts Corporation and liberalised courier services open to licensed private operators.</p>
        <h3 className="text-base font-semibold text-[#003087] mb-3">Licence Categories</h3>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4"><h4 className="text-sm font-semibold text-[#003087]">Courier Service Licence</h4><p className="text-sm text-gray-600 mt-1">For operators providing domestic and international parcel and document delivery services.</p></div>
          <div className="border border-gray-200 rounded-lg p-4"><h4 className="text-sm font-semibold text-[#003087]">Express Mail Service Licence</h4><p className="text-sm text-gray-600 mt-1">For operators providing time-guaranteed express document and parcel delivery.</p></div>
          <div className="border border-gray-200 rounded-lg p-4"><h4 className="text-sm font-semibold text-[#003087]">Postal Agency Licence</h4><p className="text-sm text-gray-600 mt-1">For retail agents providing postal services on behalf of licensed postal operators.</p></div>
        </div>
        <p className="text-sm text-gray-500">Download the postal licence application form from the <a href="/media/application-forms" className="text-[#003087] underline hover:text-[#C8A84B]">Application Forms</a> page.</p>
      </section>
    </main>
  );
}
