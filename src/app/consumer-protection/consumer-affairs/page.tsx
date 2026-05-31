import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Consumer Affairs | MACRA",
  description:
    "MACRA protects the rights of users of ICT services in Malawi through the Communications Act, Electronic Transactions and Cybersecurity Act, and sector regulations.",
};

export default function ConsumerAffairsPage() {
  return (
    <main>
      <PageHeader title="Consumer Affairs" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Consumer Protection", href: "/consumer-protection/consumer-affairs" }, { label: "Consumer Affairs" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">Our Mandate</h2>
          <p className="text-gray-600">MACRA has a legal obligation to protect the rights of consumers of ICT services in Malawi. This mandate is carried out using the Communications Act, the Electronic Transactions and Cybersecurity Act, sector regulations, rules, and guidelines on handling ICT consumer complaints.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">What We Do</h2>
          <p className="text-gray-600">The Consumer Affairs Unit monitors compliance by licensed operators, investigates consumer complaints, conducts outreach and education campaigns, and works to ensure that all Malawians receive fair, reliable, and affordable communications services.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">Legal Framework</h2>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Communications Act</li>
            <li>Electronic Transactions and Cybersecurity Act</li>
            <li>Sector Regulations and Rules</li>
            <li>Guidelines on Handling ICT Consumer Complaints</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#003087] mb-3">Contact the Consumer Affairs Unit</h2>
          <p className="text-gray-600">For enquiries or to report a concern contact us on <a href="tel:011810497" className="text-[#003087] underline">(+265) (0) 1 810 497</a> or email <a href="mailto:kelious.mlenga@macra.mw" className="text-[#003087] underline">kelious.mlenga@macra.mw</a>.</p>
        </div>
      </section>
    </main>
  );
}
