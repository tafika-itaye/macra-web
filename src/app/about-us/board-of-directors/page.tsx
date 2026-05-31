import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Board of Directors | MACRA",
  description:
    "Meet the Board of Directors of the Malawi Communications Regulatory Authority.",
};

interface BoardMember {
  name: string;
  title: string;
  image: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Counsel Chancy Gondwe",
    title: "Board Chairperson",
    image: "/images/board/board-chair.jpg",
  },
  {
    name: "Mr. Andrew Kumbatira",
    title: "Board Member",
    image: "/images/board/board-member-2.jpg",
  },
  {
    name: "Mrs. Mary Mpanga",
    title: "Board Member",
    image: "/images/board/board-member-3.jpg",
  },
  {
    name: "Rev. Gervazio Namba",
    title: "Board Member",
    image: "/images/board/board-member-4.jpg",
  },
  {
    name: "Mr. Shindi Mwala",
    title: "Board Member",
    image: "/images/board/board-member-5.jpg",
  },
  {
    name: "Dr. Innocent Kafodya",
    title: "Board Member",
    image: "/images/board/board-member-6.jpg",
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <main>
      <PageHeader title="Board of Directors" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us/organisation" },
            { label: "Board of Directors" },
          ]}
        />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden text-center"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#003087]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
