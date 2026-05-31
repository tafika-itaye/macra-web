import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MACRA and Community",
};

export default function Page() {
  return (
    <>
      <PageHeader title="MACRA and Community" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "MACRA and Community" }]} />
        <p className="mt-8 text-gray-400 italic text-sm">
          Content pending. Populate from macra.mw and update the relevant data file in src/data/.
        </p>
      </div>
    </>
  );
}
