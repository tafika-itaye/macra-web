import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Broadcasting Directorate | MACRA",
  description: "The Broadcasting directorate of MACRA responsible for regulating broadcasting services in Malawi.",
};

export default function BroadcastingDirectoratePage() {
  return (
    <main>
      <PageHeader title="Broadcasting" />
      <JsonLd data={webPageSchema("Broadcasting Directorate", "The Broadcasting Directorate regulates and monitors broadcasting services including radio and television in Malawi.", "/about-us/directorates/broadcasting")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Broadcasting" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#E30613] mb-4">Directorate of Broadcasting</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The Directorate of Broadcasting is responsible for regulating and monitoring broadcasting services in Malawi. It licenses radio and television broadcasters and ensures compliance with broadcasting standards and regulations.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The directorate manages frequency planning for broadcasting, monitors signal coverage, and enforces content and technical standards across all licensed broadcasters.</p>
            <h3 className="text-base font-semibold text-[#E30613] mt-6 mb-3">Key Functions</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Licensing of radio and television broadcasters</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Broadcasting frequency planning and assignment</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Monitoring of broadcasting quality of service</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Enforcement of broadcasting regulations and standards</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Digital migration coordination and implementation</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/services/services-broadcasting.jpg")} alt="Broadcasting services" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
