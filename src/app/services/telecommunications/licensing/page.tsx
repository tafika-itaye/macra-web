import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Telecommunications Licensing | MACRA",
  description: "Licensing requirements and procedures for telecommunications operators in Malawi.",
};

const licenceTypes = [
  { name: "Public Switched Telecommunications Network Licence", description: "For operators providing fixed voice and data services over a switched network." },
  { name: "Cellular Mobile Licence", description: "For operators providing mobile voice, data, and value-added services." },
  { name: "Internet Service Provider Licence", description: "For operators providing internet access services to end users." },
  { name: "Very Small Aperture Terminal (VSAT) Licence", description: "For operators providing satellite-based telecommunications services." },
  { name: "Public Payphone Licence", description: "For operators deploying and managing public payphone facilities." },
  { name: "Value Added Services Licence", description: "For providers of supplementary communications services over licensed networks." },
];

export default function TelecomsLicensingPage() {
  return (
    <main>
      <PageHeader title="Telecommunications Licensing" />
      <JsonLd data={webPageSchema("Telecommunications Licensing", "How to apply for a telecommunications licence from MACRA including service categories and application requirements.", "/services/telecommunications/licensing")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/telecommunications" }, { label: "Telecommunications", href: "/services/telecommunications" }, { label: "Licensing" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative w-full h-56 rounded-lg overflow-hidden mb-8">
          <Image src={bp("/images/services/services-licensing.jpg")} alt="Telecommunications licensing" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" loading="lazy" />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">MACRA issues licences to telecommunications operators under the Communications Act. All operators providing telecommunications services in Malawi must hold a valid licence issued by MACRA. Applications must be submitted with the required documentation and applicable fees.</p>
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
          <p className="text-sm text-blue-100 leading-relaxed">Download the relevant application form from the <a href={bp("/media/application-forms")} className="underline hover:text-[#C8A84B]">Application Forms</a> page. Submit the completed form together with supporting documents and the prescribed application fee to MACRA. Contact us at <a href="mailto:dg@macra.mw" className="underline hover:text-[#C8A84B]">dg@macra.mw</a> for further guidance.</p>
        </div>
      </section>
    </main>
  );
}
