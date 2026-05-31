import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Malawi CERT | MACRA",
  description: "The Malawi Computer Emergency Response Team established by MACRA.",
};

export default function CERTPage() {
  return (
    <main>
      <PageHeader title="Malawi CERT" />
      <JsonLd data={webPageSchema("CERT", "The Malawi Computer Emergency Response Team coordinates cybersecurity incident response and digital security awareness.", "/quick-links/cert")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Quick Links", href: "#" }, { label: "Malawi CERT" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl font-bold text-[#E30613] mb-4">Malawi Computer Emergency Response Team</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The Malawi CERT is the national computer emergency response team established by MACRA to coordinate responses to cybersecurity incidents affecting Malawi. It serves as the national point of contact for cybersecurity incident reporting and response.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Malawi CERT works with government agencies, the private sector, and international CERT organisations to protect Malawi critical information infrastructure and promote cybersecurity awareness.</p>
            <h3 className="text-base font-semibold text-[#E30613] mt-4 mb-3">Services</h3>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Cybersecurity incident response coordination</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Vulnerability alerts and security advisories</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Cybersecurity awareness training and campaigns</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>Technical assistance to organisations under cyber attack</li>
              <li className="flex gap-2"><span className="text-[#C8A84B] font-bold">-</span>International CERT coordination and information sharing</li>
            </ul>
            <div className="bg-[#E30613] text-white rounded-lg p-5">
              <h3 className="font-semibold mb-2">Report an Incident</h3>
              <p className="text-sm text-blue-100">To report a cybersecurity incident contact Malawi CERT at <a href="mailto:dg@macra.mw" className="underline hover:text-[#C8A84B]">dg@macra.mw</a> or call <a href="tel:+2651810497" className="underline hover:text-[#C8A84B]">(+265) (0) 1 810 497</a>.</p>
            </div>
          </div>
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image src={bp("/images/quicklinks/quicklinks-cert.jpg")} alt="Malawi CERT cybersecurity" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
