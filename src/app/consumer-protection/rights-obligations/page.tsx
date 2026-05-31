import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Consumer Rights and Obligations | MACRA",
  description:
    "Learn about the basic rights and obligations of consumers of communications services in Malawi.",
};

const rights = [
  {
    title: "Timely and Accurate Bills",
    body: "The right to accurate and understandable bills for products and services you authorized, and to fair and prompt redress for billing problems.",
  },
  {
    title: "Quality of Service",
    body: "The right to receive communications services that meet minimum quality standards as set by MACRA.",
  },
  {
    title: "Information",
    body: "The right to clear and accurate information about service terms, pricing, and conditions before and during the service contract.",
  },
  {
    title: "Redress",
    body: "The right to lodge a complaint with your service provider and, if unresolved, to escalate the matter to MACRA for independent resolution.",
  },
  {
    title: "Privacy",
    body: "The right to have your personal data and communications handled in accordance with applicable laws and regulations.",
  },
];

const obligations = [
  {
    title: "Honest Use",
    body: "Consumers must use communications services lawfully and must not use services to commit fraud, harassment, or any other illegal act.",
  },
  {
    title: "Payment",
    body: "Consumers are obligated to pay for services they have used in accordance with agreed terms and conditions.",
  },
  {
    title: "Accurate Information",
    body: "Consumers must provide accurate information when subscribing to or applying for communications services.",
  },
  {
    title: "Reporting",
    body: "Consumers should report service faults, illegal content, and abuse to their service provider or to MACRA.",
  },
];

export default function RightsObligationsPage() {
  return (
    <main>
      <PageHeader title="Consumer Rights and Obligations" />
      <JsonLd data={webPageSchema("Rights and Obligations", "Understand your rights and obligations as a communications consumer under Malawi communications law.", "/consumer-protection/rights-obligations")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Consumer Protection", href: "/consumer-protection/consumer-affairs" },
            { label: "Rights and Obligations" },
          ]}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-[#003087] mb-6">
            Consumer Rights
          </h2>
          <div className="space-y-6">
            {rights.map((item) => (
              <div key={item.title} className="border-l-4 border-[#C8A84B] pl-4">
                <h3 className="font-semibold text-[#003087] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#003087] mb-6">
            Consumer Obligations
          </h2>
          <div className="space-y-6">
            {obligations.map((item) => (
              <div key={item.title} className="border-l-4 border-[#C8A84B] pl-4">
                <h3 className="font-semibold text-[#003087] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
