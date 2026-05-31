import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MACRA and Community | MACRA",
  description:
    "MACRA engages with communities across Malawi through corporate social responsibility, consumer education, and community broadcasting initiatives.",
};

const initiatives = [
  {
    title: "Consumer Education",
    body: "MACRA conducts outreach campaigns in schools, communities, and through media to educate Malawians about their rights as consumers of communications services, online safety, and responsible digital use.",
  },
  {
    title: "Community Radio Stations",
    body: "MACRA supports and licences community radio stations to ensure local and underserved communities have access to information and communications relevant to their needs.",
  },
  {
    title: "Corporate Social Responsibility",
    body: "MACRA staff and management participate in community service activities including hospital cleaning exercises, school outreach, and safer internet day campaigns as part of the Authority's commitment to social responsibility.",
  },
  {
    title: "Online Safety",
    body: "MACRA leads online safety awareness initiatives in collaboration with schools and community organisations, helping young Malawians navigate the internet safely and responsibly.",
  },
  {
    title: "Service Charter",
    body: "MACRA maintains a public service charter that sets out the standards of service the public can expect when interacting with the Authority.",
  },
];

export default function MacraAndCommunityPage() {
  return (
    <main>
      <PageHeader title="MACRA and Community" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "MACRA and Community" },
          ]}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-10">
          MACRA is committed to making a positive impact beyond its regulatory
          mandate. Through consumer education, community broadcasting, and
          corporate social responsibility, the Authority works to ensure all
          Malawians benefit from reliable, safe, and affordable communications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#003087] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
