import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Broadcasting Licensing | MACRA",
  description: "Licensing requirements for broadcasting operators in Malawi.",
};

const licenceTypes = [
  { name: "Commercial Radio Broadcasting Licence", description: "For operators providing radio broadcasting services on a commercial basis." },
  { name: "Commercial Television Broadcasting Licence", description: "For operators providing television broadcasting services on a commercial basis." },
  { name: "Community Broadcasting Licence", description: "For community-owned and operated radio or television stations serving a defined community." },
  { name: "Public Broadcasting Licence", description: "For publicly funded broadcasters providing public interest content." },
  { name: "Subscription Broadcasting Licence", description: "For operators providing broadcasting services on a subscription or pay basis." },
];

export default function BroadcastingLicensingPage() {
  return (
    <main>
      <PageHeader title="Broadcasting Licensing" />
      <JsonLd data={webPageSchema("Broadcasting Licensing", "How to apply for a broadcasting licence from MACRA including requirements, fees, and application procedures.", "/services/broadcasting/licensing")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/broadcasting" }, { label: "Broadcasting", href: "/services/broadcasting" }, { label: "Licensing" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">All broadcasting operators in Malawi must hold a valid licence issued by MACRA. Licences are issued following a formal application process and assessment against broadcasting policy criteria including local content requirements and technical standards.</p>
        <h2 className="text-lg font-bold text-[#E30613] mb-4">Licence Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {licenceTypes.map((l) => (
            <div key={l.name} className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-[#E30613] mb-1">{l.name}</h3>
              <p className="text-sm text-gray-600">{l.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#E30613] text-white rounded-lg p-6">
          <h3 className="font-semibold mb-2">How to Apply</h3>
          <p className="text-sm text-blue-100 leading-relaxed">Download the broadcasting licence application form from the <a href="/media/application-forms" className="underline hover:text-[#C8A84B]">Application Forms</a> page. Submit the completed form with supporting documents and the prescribed fee to MACRA.</p>
        </div>
      </section>
    </main>
  );
}
