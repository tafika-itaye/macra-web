import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Executive | MACRA",
  description: "The Executive directorate of the Malawi Communications Regulatory Authority.",
};

export default function ExecutivePage() {
  return (
    <main>
      <PageHeader title="Executive" />
      <JsonLd data={webPageSchema("Executive Directorate", "The Executive Directorate provides strategic leadership and coordinates MACRA operations at the highest level.", "/about-us/directorates/executive")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Executive" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#E30613] mb-4">Office of the Director General</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The Executive directorate provides strategic leadership and overall management of MACRA. It is headed by the Director General who is responsible for the day-to-day operations of the Authority and implementation of Board decisions.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The Director General serves as the accounting officer of MACRA and is responsible for ensuring that the Authority fulfils its mandate under the Communications Act.</p>
            <h3 className="text-base font-semibold text-[#E30613] mt-6 mb-3">Key Functions</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Strategic planning and institutional leadership</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Implementation of Board resolutions and decisions</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Stakeholder engagement at national and international levels</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Oversight of regulatory programmes and performance</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Representing MACRA in regional and international forums</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/macra-office.jpg")} alt="MACRA Executive Office" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
