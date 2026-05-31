import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Postal and Courier | MACRA",
  description:
    "MACRA regulates postal and courier services in Malawi including licensing, quality of service, and the national addressing project.",
};

const areas = [
  {
    title: "Licensing",
    body: "MACRA licences postal and courier operators in Malawi. Operators must hold a valid licence to provide domestic or international mail and parcel delivery services.",
  },
  {
    title: "Quality of Service",
    body: "MACRA sets and monitors quality of service standards for licensed postal and courier operators to ensure timely and reliable delivery for consumers and businesses.",
  },
  {
    title: "National Addressing Project",
    body: "MACRA is implementing a national addressing project to assign standardised addresses and postcodes across Malawi, improving delivery accuracy and supporting e-commerce and emergency services.",
  },
  {
    title: "Post Codes",
    body: "As part of the national addressing project, MACRA has introduced a postcode system for Malawi. Blantyre Chichiri carries postcode 312225.",
  },
  {
    title: "E-Commerce",
    body: "MACRA is working to develop the postal sector as a key enabler of digital commerce in Malawi, supporting last-mile delivery and electronic tracking solutions.",
  },
];

export default function PostalPage() {
  return (
    <main>
      <PageHeader title="Postal and Courier" />
      <JsonLd data={webPageSchema("Postal Services", "MACRA regulates postal services in Malawi including licensing, quality standards, and the national addressing system.", "/services/postal")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/telecommunications" },
            { label: "Postal and Courier" },
          ]}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-10">
          MACRA regulates postal and courier services in Malawi under the
          Communications Act. The Postal Directorate oversees operator
          licensing, quality of service, the national addressing project, and
          the development of e-commerce infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#E30613] mb-2">
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
