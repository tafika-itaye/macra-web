import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Projects | MACRA",
  description: "Current and completed projects by MACRA in the Malawi communications sector.",
};

const projects = [
  { title: "National Broadband Network", status: "Ongoing", description: "MACRA is coordinating the development of a national broadband infrastructure to extend high-speed internet connectivity to all districts of Malawi.", year: "2022 - Present" },
  { title: "Digital Migration", status: "Ongoing", description: "Malawi is transitioning from analogue to digital terrestrial television broadcasting. MACRA manages the licensing of digital broadcast infrastructure and coordinates the switchover programme.", year: "2020 - Present" },
  { title: "National Addressing Project", status: "Ongoing", description: "MACRA is implementing a national street addressing and postcode system to improve mail delivery and location services across Malawi.", year: "2019 - Present" },
  { title: "Universal Service Fund Projects", status: "Ongoing", description: "MACRA administers the Universal Service Fund which finances communications infrastructure in underserved communities across all regions of Malawi.", year: "2015 - Present" },
  { title: "Malawi CERT Establishment", status: "Completed", description: "MACRA established the Malawi Computer Emergency Response Team to coordinate national responses to cybersecurity incidents.", year: "2021" },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader title="Projects" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "MACRA and Community", href: "/macra-and-community" }, { label: "Projects" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="relative w-full h-56 rounded-lg overflow-hidden mb-8">
          <Image src={bp("/images/community/community-digital.jpg")} alt="MACRA projects" fill sizes="(max-width: 768px) 100vw, 1200px" className="object-cover" loading="lazy" />
        </div>
        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.title} className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-base font-semibold text-[#003087]">{p.title}</h2>
                <span className={["text-xs font-medium px-2 py-0.5 rounded", p.status === "Ongoing" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"].join(" ")}>{p.status}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{p.year}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
