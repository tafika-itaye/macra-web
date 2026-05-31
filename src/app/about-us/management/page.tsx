import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { management } from "@/data/management";

export const metadata: Metadata = {
  title: "Management",
  description:
    "Meet the MACRA management team responsible for overseeing communications regulation in Malawi.",
};

export default function ManagementPage() {
  return (
    <>
      <PageHeader title="Management" subtitle="About MACRA" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "About Us" }, { label: "Management" }]} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {management.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-100 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                {member.imageFile ? (
                  <img
                    src={`/images/management/${member.imageFile}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-xs px-2">Photo pending</span>
                )}
              </div>
              <h3 className="font-semibold text-[#003087]">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
