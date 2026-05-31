import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Consumer Complaints | MACRA",
  description:
    "Submit a complaint about a communications service provider to the Malawi Communications Regulatory Authority.",
};

export default function ConsumerComplaintsPage() {
  return (
    <main>
      <PageHeader title="Consumer Complaints" />
      <JsonLd data={webPageSchema("Consumer Complaints", "Submit a complaint to MACRA about poor communications services, billing disputes, or consumer rights violations.", "/consumer-protection/consumer-complaints")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Consumer Protection", href: "/consumer-protection/consumer-affairs" }, { label: "Consumer Complaints" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">How to Submit a Complaint</h2>
          <p className="text-gray-600">If you have an unresolved dispute with a telecommunications, broadcasting, or postal service provider, MACRA can assist. Before contacting MACRA you must first raise the matter directly with your service provider and allow them a reasonable opportunity to resolve it.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">Complaint Channels</h2>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Download and complete the Consumer Complaint Form and submit it to our offices.</li>
            <li>Email your complaint to <a href="mailto:kelious.mlenga@macra.mw" className="text-[#003087] underline">kelious.mlenga@macra.mw</a></li>
            <li>Call us on <a href="tel:011810497" className="text-[#003087] underline">(+265) (0) 1 810 497</a></li>
            <li>Visit us in person at Snr Chief Kapeni Campus, 8 Kasungu Crescent, Private Bag 261, Chichiri, Blantyre.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">What to Include</h2>
          <p className="text-gray-600">Your complaint should include your full name and contact details, the name of the service provider, a clear description of the problem, the date the problem started, steps already taken to resolve the issue, and any supporting documents or correspondence.</p>
        </div>
        <div>
          <a href="/downloads/consumer-complaint-form.pdf" className="inline-block bg-[#003087] text-white px-6 py-3 rounded font-medium hover:bg-[#002060] transition-colors">Download Complaint Form</a>
        </div>
      </section>
    </main>
  );
}
