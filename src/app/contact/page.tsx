import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Malawi Communications Regulatory Authority. Phone, email, and office address.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Enquiries and Feedback" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Contact" }]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-4">Get in Touch</h2>
            <address className="not-italic text-gray-700 space-y-1 text-sm leading-relaxed">
              <p className="font-medium text-base">{contactInfo.address.line1}</p>
              <p>{contactInfo.address.line2}</p>
              <p>{contactInfo.address.line3}</p>
              <p>{contactInfo.address.line4}</p>
              <p>Postcode: {contactInfo.address.postcode}</p>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <span className="font-medium">Phone: </span>
                <a href={contactInfo.phoneTel} className="text-[#003087] hover:underline">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">DG Office: </span>
                <a href={`mailto:${contactInfo.emailDG}`} className="text-[#003087] hover:underline">
                  {contactInfo.emailDG}
                </a>
              </p>
              <p>
                <span className="font-medium">General Enquiries: </span>
                <a href={`mailto:${contactInfo.emailPublic}`} className="text-[#003087] hover:underline">
                  {contactInfo.emailPublic}
                </a>
              </p>
            </div>
            <a
              href={contactInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#003087] text-white px-5 py-2 rounded hover:bg-[#005BAA] transition-colors text-sm"
            >
              View on Google Maps
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#003087] mb-4">Follow Us</h2>
            <ul className="space-y-3 text-sm">
              {contactInfo.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003087] hover:underline"
                  >
                    {s.label} - {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
