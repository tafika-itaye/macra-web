import { contactInfo } from "@/data/contact";
import Link from "next/link";
import { bp } from "@/lib/basePath"

export default function Topbar() {
  return (
    <div className="bg-[#E30613] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex gap-4 items-center flex-wrap">
          <a href={contactInfo.phoneTel} className="hover:text-[#C8A84B]">
            {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.emailDG}`} className="hover:text-[#C8A84B]">
            {contactInfo.emailDG}
          </a>
          <Link href={bp("/media/application-forms")} className="hover:text-[#C8A84B]">
            Downloads
          </Link>
        </div>
        <div className="flex gap-3 flex-wrap">
          {contactInfo.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow MACRA on ${s.label}`}
              className="hover:text-[#C8A84B] text-xs"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
