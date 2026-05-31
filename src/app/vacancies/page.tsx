import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Vacancies",
  description: "Current job vacancies at MACRA - Malawi Communications Regulatory Authority.",
};

export default function VacanciesPage() {
  return (
    <>
      <PageHeader title="Vacancies" subtitle="Careers at MACRA" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Vacancies" }]} />
        <p className="mt-8 text-gray-700 text-sm">
          There are no open vacancies at this time. Check back regularly or follow us on social
          media for announcements.
        </p>
      </div>
    </>
  );
}
