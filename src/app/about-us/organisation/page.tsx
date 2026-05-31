import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Organisation",
  openGraph: {
    title: "Organisation | MACRA",
    description: "MACRA was established under the Communications Act 1998 and draws its mandate from the Communications Act 2016 to regulate and monitor communications services in Malawi.",
    url: "https://tafika-itaye.github.io/about-us/organisation",
    siteName: "MACRA - Malawi Communications Regulatory Authority",
    locale: "en_US",
    type: "website",
    images: [{ url: "/macra-web/images/macra-logo.png", width: 200, height: 60, alt: "MACRA" }],
  },
  twitter: {
    card: "summary",
    title: "Organisation | MACRA",
    description: "MACRA was established under the Communications Act 1998 and draws its mandate from the Communications Act 2016 to regulate and monitor communications services in Malawi.",
    images: ["/macra-web/images/macra-logo.png"],
  },
  description:
    "MACRA was established under the Communications Act 1998 and draws its mandate from the Communications Act 2016 to regulate and monitor communications services in Malawi.",
};

export default function OrganisationPage() {
  return (
    <>
      <PageHeader title="Organisation" subtitle="About MACRA" />
      <JsonLd data={webPageSchema("Organisation", "MACRA was established under the Communications Act 1998 and draws its mandate from the Communications Act 2016 to regulate and monitor communications services in Malawi.", "/about-us/organisation")} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "About Us" }, { label: "Organisation" }]} />
        <div className="max-w-3xl mt-6 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Our Mandate</h2>
            <p className="text-gray-700 leading-relaxed">
              MACRA was established pursuant to Section 3 of the Communications Act 1998 of the
              Laws of Malawi to regulate the country&apos;s communications sector. MACRA now draws
              its mandate from the Communications Act 2016 to regulate and monitor the provision
              of communications services and ensure that, as far as it is practicable, reliable
              and affordable communications services are provided throughout Malawi.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Communications services for a digitally transformed nation.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Core Values</h2>
            <p className="text-gray-400 italic text-sm">
              Content to be populated from macra.mw/organisation/. See migration-notes.md.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
