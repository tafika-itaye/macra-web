import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Telecommunications Directorate | MACRA",
  description: "The Telecommunications directorate of MACRA.",
};

export default function TelecomsDirectoratePage() {
  return (
    <main>
      <PageHeader title="Telecommunications" />
      <JsonLd data={webPageSchema("Telecommunications Directorate", "The Telecommunications Directorate regulates telecom operators, spectrum, numbering, and quality of service in Malawi.", "/about-us/directorates/telecommunications")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Telecommunications" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#E30613] mb-4">Directorate of Telecommunications</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The Directorate of Telecommunications is responsible for regulating and monitoring telecommunications services in Malawi. It manages the licensing of telecommunications operators and ensures compliance with technical and service quality standards.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The directorate also manages spectrum allocation, type approval of communications equipment, and numbering plan administration.</p>
            <h3 className="text-base font-semibold text-[#E30613] mt-6 mb-3">Key Functions</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Licensing of telecommunications operators</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Spectrum management and frequency assignment</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Type approval of communications equipment</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Numbering plan administration</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Quality of service monitoring and enforcement</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Interconnection and access regulation</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/hero-telecom.jpg")} alt="Telecommunications" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
