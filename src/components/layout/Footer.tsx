import Link from "next/link";
import Image from "next/image";
import { contactInfo } from "@/data/contact";
import { bp } from "@/lib/basePath";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#003087] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src={bp("/images/macra-logo.png")}
            alt="MACRA"
            width={140}
            height={42}
            className="mb-4 brightness-0 invert"
          />
          <p className="text-sm text-blue-200">
            Malawi Communications Regulatory Authority
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[#C8A84B] mb-3">Contact</h2>
          <address className="not-italic text-sm text-blue-100 space-y-1">
            <p>{contactInfo.address.line1}</p>
            <p>{contactInfo.address.line2}</p>
            <p>{contactInfo.address.line3}</p>
            <p>{contactInfo.address.line4}</p>
            <p>Postcode: {contactInfo.address.postcode}</p>
          </address>
          <div className="mt-3 text-sm space-y-1">
            <p>
              <a href={contactInfo.phoneTel} className="hover:text-[#C8A84B]">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.emailDG}`} className="hover:text-[#C8A84B]">
                {contactInfo.emailDG}
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-[#C8A84B] mb-3">Quick Links</h2>
          <ul className="text-sm text-blue-100 space-y-2">
            <li><Link href="/contact" className="hover:text-white">Enquiries and Feedback</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/media/application-forms" className="hover:text-white">Application Forms</Link></li>
            <li><Link href="/media/annual-reports" className="hover:text-white">Annual Reports</Link></li>
            <li><Link href="/vacancies" className="hover:text-white">Vacancies</Link></li>
          </ul>
          <div className="mt-4 flex gap-3 flex-wrap">
            {contactInfo.social.map((s) => (
              
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MACRA on ${s.label}`}
                className="text-xs text-blue-200 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 text-xs text-blue-200 flex flex-col sm:flex-row justify-between gap-2">
          <p>All Rights Reserved. Copyright {year} MACRA.</p>
          <p>
            
              href={contactInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Find us on Google Maps
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}