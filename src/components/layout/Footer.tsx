import Link from "next/link";
import Image from "next/image";
import { contactInfo } from "@/data/contact";
import { bp } from "@/lib/basePath";
import BackToTop from "@/components/ui/BackToTop";

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
  if (label === "Twitter") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M2 3h6.5l13 18H15z" />
    </svg>
  );
  if (label === "Instagram") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
  if (label === "YouTube") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  );
  if (label === "TikTok") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
  return <span className="text-xs">{label}</span>;
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#E30613] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div>
            <Image
              src={bp("/images/macra-logo.png")}
              alt="MACRA"
              width={140}
              height={42}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-sm text-blue-200 mb-5 leading-relaxed">
              Malawi Communications Regulatory Authority. Regulating communications for a digitally transformed nation.
            </p>
            <div className="flex gap-3 flex-wrap">
              {contactInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"MACRA on " + s.label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C8A84B] hover:text-[#E30613] text-white flex items-center justify-center transition-all"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h2 className="font-semibold text-[#C8A84B] mb-4 uppercase text-xs tracking-widest">Contact</h2>
            <address className="not-italic text-sm text-blue-100 space-y-1 mb-4">
              <p>{contactInfo.address.line1}</p>
              <p>{contactInfo.address.line2}</p>
              <p>{contactInfo.address.line3}</p>
              <p>{contactInfo.address.line4}</p>
              <p>Postcode: {contactInfo.address.postcode}</p>
            </address>
            <div className="text-sm space-y-1">
              <p>
                <a href={contactInfo.phoneTel} className="text-blue-100 hover:text-[#C8A84B]">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href={"mailto:" + contactInfo.emailDG} className="text-blue-100 hover:text-[#C8A84B]">
                  {contactInfo.emailDG}
                </a>
              </p>
              <p>
                <a
                  href={contactInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-[#C8A84B]"
                >
                  Find us on Google Maps
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h2 className="font-semibold text-[#C8A84B] mb-4 uppercase text-xs tracking-widest">Quick Links</h2>
            <ul className="text-sm text-blue-100 space-y-2">
              <li><Link href="/about-us/organisation" className="hover:text-white">About MACRA</Link></li>
              <li><Link href="/consumer-protection/consumer-complaints" className="hover:text-white">Submit a Complaint</Link></li>
              <li><Link href="/media/application-forms" className="hover:text-white">Application Forms</Link></li>
              <li><Link href="/media/annual-reports" className="hover:text-white">Annual Reports</Link></li>
              <li><Link href="/media/news" className="hover:text-white">News</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/vacancies" className="hover:text-white">Vacancies</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h2 className="font-semibold text-[#C8A84B] mb-4 uppercase text-xs tracking-widest">Services</h2>
            <ul className="text-sm text-blue-100 space-y-2">
              <li><Link href="/services/telecommunications" className="hover:text-white">Telecommunications</Link></li>
              <li><Link href="/services/telecommunications/licensing" className="hover:text-white">Telecom Licensing</Link></li>
              <li><Link href="/services/telecommunications/spectrum" className="hover:text-white">Spectrum Management</Link></li>
              <li><Link href="/services/broadcasting" className="hover:text-white">Broadcasting</Link></li>
              <li><Link href="/services/broadcasting/licensing" className="hover:text-white">Broadcasting Licensing</Link></li>
              <li><Link href="/services/postal" className="hover:text-white">Postal Services</Link></li>
              <li><Link href="/services/postal/national-addressing" className="hover:text-white">National Addressing</Link></li>
              <li><Link href="/quick-links/cert" className="hover:text-white">CERT</Link></li>
            </ul>
          </div>

        </div>
        <div className="border-t border-blue-800 py-4">
          <div className="max-w-7xl mx-auto px-4 text-xs text-blue-200 flex flex-col sm:flex-row justify-between gap-2">
            <p>All Rights Reserved. Copyright {year} MACRA.</p>
            <p>Malawi Communications Regulatory Authority</p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}

