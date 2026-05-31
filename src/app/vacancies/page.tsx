import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Vacancies | MACRA",
  description:
    "View current job vacancies at the Malawi Communications Regulatory Authority.",
};

export default function VacanciesPage() {
  return (
    <main>
      <PageHeader title="Vacancies" />
      <JsonLd data={webPageSchema("Vacancies", "Current job vacancies and career opportunities at the Malawi Communications Regulatory Authority.", "/vacancies")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Vacancies" },
          ]}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-6">
          MACRA periodically advertises positions across its directorates and
          departments. All vacancies are advertised in the national press and on
          this website. Only shortlisted candidates are contacted.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm">
            There are no open vacancies at this time. Please check back later
            or follow MACRA on social media for updates.
          </p>
        </div>
      </section>
    </main>
  );
}
