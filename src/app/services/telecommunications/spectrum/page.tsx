import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Spectrum Management | MACRA",
  description: "Radio frequency spectrum management in Malawi.",
};

export default function SpectrumPage() {
  return (
    <main>
      <PageHeader title="Spectrum Management" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/telecommunications" }, { label: "Telecommunications", href: "/services/telecommunications" }, { label: "Spectrum" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-4">Spectrum Management</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA is responsible for managing the radio frequency spectrum in Malawi. The spectrum is a finite national resource and MACRA ensures it is used efficiently and in accordance with national and international requirements.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">MACRA assigns spectrum to operators through licensing and maintains the national frequency register. Spectrum assignments are made in accordance with the national frequency plan and the ITU Radio Regulations.</p>
            <h3 className="text-base font-semibold text-[#003087] mt-4 mb-3">Key Activities</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Frequency planning and coordination</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Spectrum licensing and assignment</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Interference investigation and resolution</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Spectrum monitoring and enforcement</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>International frequency coordination</li>
            </ul>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/services/services-spectrum.jpg")} alt="Spectrum management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
