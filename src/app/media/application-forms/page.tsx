import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import DownloadTable from "@/components/ui/DownloadTable";
import { applicationForms } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Application Forms | MACRA",
  description: "Download licence application forms and consumer complaint forms from the Malawi Communications Regulatory Authority.",
};

export default function ApplicationFormsPage() {
  return (
    <main>
      <PageHeader title="Application Forms" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Media", href: "/media/news" }, { label: "Application Forms" }]} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600 mb-8">Download the relevant form below. Completed forms should be submitted to MACRA offices at Snr Chief Kapeni Campus, 8 Kasungu Crescent, Private Bag 261, Chichiri, Blantyre. For assistance call (+265) (0) 1 810 497 or email kelious.mlenga@macra.mw.</p>
        <DownloadTable downloads={applicationForms} />
      </section>
    </main>
  );
}
