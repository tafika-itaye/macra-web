import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Postal Directorate | MACRA",
  description: "The Postal directorate of MACRA responsible for regulating postal and courier services in Malawi.",
};

export default function PostalDirectoratePage() {
  return (
    <main>
      <PageHeader title="Postal" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us/organisation" }, { label: "Directorates", href: "#" }, { label: "Postal" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-4">Directorate of Postal Services</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The Directorate of Postal Services regulates and monitors postal and courier services in Malawi. It licenses postal and courier operators and monitors their compliance with quality of service standards.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The directorate also manages the National Addressing Project and the implementation of the Malawi postcode system to improve mail delivery accuracy across the country.</p>
            <h3 className="text-base font-semibold text-[#003087] mt-6 mb-3">Key Functions</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Licensing of postal and courier service operators</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Quality of service monitoring for postal services</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>National Addressing Project management</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Postcode system implementation and maintenance</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Enforcement of postal regulations</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/services/services-postal.jpg")} alt="Postal services" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
