import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import { webPageSchema } from "@/lib/jsonLd";
import DownloadTable from "@/components/ui/DownloadTable";
import { annualReports } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Annual Reports | MACRA",
  description: "Download annual reports published by the Malawi Communications Regulatory Authority.",
};

export default function AnnualReportsPage() {
  return (
    <main>
      <PageHeader title="Annual Reports" />
      <JsonLd data={webPageSchema("Annual Reports", "MACRA annual reports documenting regulatory activities, financial performance, and sector developments.", "/media/annual-reports")} />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Annual Reports" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-8">MACRA publishes annual reports detailing its regulatory activities, financial performance, and sector developments across telecommunications, broadcasting, and postal services in Malawi.</p>
        <DownloadTable downloads={annualReports} />
      </section>
    </main>
  );
}
