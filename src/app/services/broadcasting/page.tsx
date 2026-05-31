import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Broadcasting | MACRA",
  description:
    "MACRA regulates broadcasting services in Malawi including radio and television licensing, quality of service, and broadcasting frequencies.",
};

const areas = [
  {
    title: "Licensing",
    body: "MACRA licences commercial, community, and public broadcasters operating radio and television services in Malawi. Licences are issued under the Communications Act.",
  },
  {
    title: "Broadcasting Frequencies",
    body: "MACRA assigns and manages broadcasting frequencies to ensure efficient use of the spectrum and to minimise interference between broadcasters.",
  },
  {
    title: "Quality of Service",
    body: "MACRA monitors compliance with broadcasting quality of service standards and works with broadcasters to ensure audiences receive reliable and high-quality content.",
  },
  {
    title: "Broadcasting Ethics and Professionalism",
    body: "MACRA engages broadcasters on ethics, professionalism, and responsible content handling, including guidelines on coverage of current affairs and elections.",
  },
  {
    title: "Community Radio",
    body: "MACRA supports community broadcasting as part of its mandate to ensure access to communications services for all Malawians, including those in rural and underserved areas.",
  },
];

export default function BroadcastingPage() {
  return (
    <main>
      <PageHeader title="Broadcasting" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/telecommunications" },
            { label: "Broadcasting" },
          ]}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-10">
          MACRA regulates broadcasting in Malawi under the Communications Act.
          The Broadcasting Directorate oversees the licensing of radio and
          television stations, frequency assignment, quality of service, and
          broadcaster compliance with content and technical standards.
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
