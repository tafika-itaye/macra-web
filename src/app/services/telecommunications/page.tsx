import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Telecommunications | MACRA",
  description:
    "MACRA regulates telecommunications services in Malawi including licensing, spectrum management, numbering, quality of service, and type approval.",
};

const areas = [
  {
    title: "Licensing",
    body: "MACRA issues licences to telecommunications operators providing voice, data, and internet services in Malawi. Licences are issued under the Communications Act and are subject to ongoing compliance requirements.",
  },
  {
    title: "Spectrum Management",
    body: "MACRA manages the radio frequency spectrum to ensure efficient and equitable access. Spectrum is assigned on a first-come first-served basis, by auction, or through other selection procedures where spectrum is limited.",
  },
  {
    title: "Quality of Service",
    body: "MACRA sets and monitors minimum quality of service standards for all licensed telecommunications operators to ensure consumers receive reliable services.",
  },
  {
    title: "Type Approval",
    body: "All telecommunications equipment imported or used in Malawi must be type-approved by MACRA to ensure it meets technical standards and does not cause interference.",
  },
  {
    title: "Numbering",
    body: "MACRA administers the national numbering plan and allocates number resources to licensed operators to ensure the orderly use of telephone numbers in Malawi.",
  },
  {
    title: "Fault Handling",
    body: "MACRA publishes fault handling regulations that require licensed operators to resolve customer faults within prescribed timeframes.",
  },
];

export default function TelecommunicationsPage() {
  return (
    <main>
      <PageHeader title="Telecommunications" />
      <JsonLd data={webPageSchema("Telecommunications Services", "MACRA regulates telecommunications services in Malawi including mobile, fixed, internet, and data services.", "/services/telecommunications")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/telecommunications" },
            { label: "Telecommunications" },
          ]}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-10">
          MACRA regulates the telecommunications sector in Malawi under the
          Communications Act. The Telecommunications Directorate oversees
          licensing, spectrum, numbering, quality of service monitoring, and
          type approval of equipment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#003087] mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">{area.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
