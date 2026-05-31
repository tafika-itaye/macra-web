import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "MACRA Board of Directors.",
};

export default function BoardPage() {
  return (
    <>
      <PageHeader title="Board of Directors" subtitle="About MACRA" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "About Us" }, { label: "Board of Directors" }]} />
        <p className="mt-8 text-gray-400 italic text-sm">
          Board of Directors content is pending. Populate from macra.mw/board-of-directors/
          and add a boardMembers array to src/data/management.ts.
        </p>
      </div>
    </>
  );
}
