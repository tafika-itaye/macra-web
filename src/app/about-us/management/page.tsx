import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { managementMembers } from "@/data/management";
import { bp } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Management | MACRA",
  description: "Meet the management team of the Malawi Communications Regulatory Authority.",
};

export default function ManagementPage() {
  return (
    <main>
      <PageHeader title="Management" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us/organisation" },
          { label: "Management" },
        ]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden text-center">
              <div className="relative w-full h-64">
                <Image
                  src={bp(member.image)}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#003087]">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
