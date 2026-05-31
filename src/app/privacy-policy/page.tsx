import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MACRA privacy policy explaining how we collect, use, and protect personal information on this website.",
  openGraph: {
    title: "Privacy Policy | MACRA",
    description: "MACRA privacy policy explaining how we collect, use, and protect personal information on this website.",
    url: "https://tafika-itaye.github.io/macra-web/privacy-policy",
    siteName: "MACRA - Malawi Communications Regulatory Authority",
    locale: "en_US",
    type: "website",
    images: [{ url: "/macra-web/images/macra-logo.png", width: 200, height: 60, alt: "MACRA" }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | MACRA",
    description: "MACRA privacy policy explaining how we collect, use, and protect personal information on this website.",
    images: ["/macra-web/images/macra-logo.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="Legal" />
      <JsonLd data={webPageSchema("Privacy Policy", "MACRA privacy policy explaining how we collect, use, and protect personal information on this website.", "/privacy-policy")} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        <div className="max-w-3xl mt-6 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Introduction</h2>
            <p>
              The Malawi Communications Regulatory Authority (MACRA) is committed to protecting the privacy
              and security of personal information. This privacy policy explains what information we collect
              when you visit this website, how we use it, and the choices you have regarding your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Information We Collect</h2>
            <p className="mb-3">
              When you visit this website we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Usage data:</strong> pages visited, time spent on pages, referring URLs, and browser
                type. This information is collected in aggregate and is not linked to individual users.
              </li>
              <li>
                <strong>Contact form submissions:</strong> if you contact us through this website, we collect
                the name, email address, and message content you provide.
              </li>
              <li>
                <strong>Cookie preferences:</strong> we store your cookie consent choice in your browser
                local storage so we do not ask again on repeat visits.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Cookies</h2>
            <p className="mb-3">
              This website uses only functional cookies necessary for the site to operate correctly. We do
              not use advertising cookies, tracking cookies, or third-party analytics cookies without your
              consent.
            </p>
            <p>
              You may withdraw your consent at any time by clearing your browser local storage or using
              your browser settings to block cookies. Withdrawing consent will not affect the lawfulness
              of any processing carried out before withdrawal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use information collected through this website to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries and complaints submitted through the contact page.</li>
              <li>Improve the content and usability of this website.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Data Sharing</h2>
            <p>
              MACRA does not sell, rent, or trade personal information to third parties. Information may be
              shared with government agencies where required by Malawi law or a court order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Data Retention</h2>
            <p>
              Contact form submissions are retained for as long as necessary to respond to your enquiry
              and for record-keeping purposes in accordance with MACRA records management policy. Usage
              data is retained in aggregate form indefinitely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Your Rights</h2>
            <p className="mb-3">
              You have the right to request access to personal information MACRA holds about you, to request
              correction of inaccurate information, and to request deletion of your information where there
              is no lawful reason to retain it.
            </p>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:dg@macra.mw" className="text-[#E30613] underline hover:text-[#C8A84B]">
                dg@macra.mw
              </a>
              {" "}or by post at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Contact</h2>
            <address className="not-italic space-y-1">
              <p className="font-medium text-[#E30613]">Malawi Communications Regulatory Authority</p>
              <p>Snr Chief Kapeni Campus, 8 Kasungu Crescent</p>
              <p>Private Bag 261, Chichiri, Blantyre</p>
              <p>Postcode: 312225, Malawi</p>
              <p>
                <a href="mailto:dg@macra.mw" className="text-[#E30613] underline hover:text-[#C8A84B]">
                  dg@macra.mw
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#E30613] mb-3">Changes to This Policy</h2>
            <p>
              MACRA may update this privacy policy from time to time. Any changes will be published on
              this page. We encourage you to review this policy periodically.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

