import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Adverts | MACRA",
  description: "Public notices and advertisements from MACRA.",
};

const adverts = [
  { title: "Public Notice: Licence Renewal 2024", description: "MACRA invites all telecommunications licensees whose licences expire in 2024 to submit renewal applications.", date: "15 January 2024" },
  { title: "Call for Applications: Spectrum Allocation", description: "MACRA invites applications for the assignment of spectrum in the 700 MHz and 800 MHz bands for mobile broadband services.", date: "3 March 2024" },
  { title: "Public Consultation: Draft QoS Regulations", description: "MACRA invites public comments on the draft Quality of Service Regulations for telecommunications services.", date: "20 February 2024" },
  { title: "Tender Notice: IT Infrastructure Upgrade", description: "MACRA invites tenders from qualified firms for the supply and installation of IT infrastructure at its Blantyre offices.", date: "5 April 2024" },
  { title: "Public Notice: Type Approval Fee Review", description: "MACRA notifies stakeholders of a review of type approval fees effective 1 July 2024.", date: "1 May 2024" },
];

export default function AdvertsPage() {
  return (
    <main>
      <PageHeader title="Adverts" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Adverts" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="space-y-4">
          {adverts.map((a) => (
            <div key={a.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-400">{a.date}</span>
              <h2 className="text-base font-semibold text-[#003087] mt-1 mb-2">{a.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
