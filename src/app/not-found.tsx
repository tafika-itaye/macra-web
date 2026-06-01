"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import type Fuse from "fuse.js"
import type { IFuseOptions } from "fuse.js"
import { bp } from "@/lib/basePath"
import type { SearchEntry } from "@/data/searchIndex"

const quickLinks = [
  {
    label: "About Us",
    href: "/about-us/organisation",
    links: [
      { label: "Organisation", href: "/about-us/organisation" },
      { label: "Board of Directors", href: "/about-us/board-of-directors" },
      { label: "Management", href: "/about-us/management" },
    ],
  },
  {
    label: "Services",
    href: "/services/telecommunications",
    links: [
      { label: "Telecommunications", href: "/services/telecommunications" },
      { label: "Broadcasting", href: "/services/broadcasting" },
      { label: "Postal", href: "/services/postal" },
    ],
  },
  {
    label: "Consumer Protection",
    href: "/consumer-protection/consumer-affairs",
    links: [
      { label: "Consumer Affairs", href: "/consumer-protection/consumer-affairs" },
      { label: "Rights and Obligations", href: "/consumer-protection/rights-obligations" },
      { label: "Submit a Complaint", href: "/consumer-protection/consumer-complaints" },
    ],
  },
  {
    label: "Media",
    href: "/media/news",
    links: [
      { label: "News", href: "/media/news" },
      { label: "Annual Reports", href: "/media/annual-reports" },
      { label: "Application Forms", href: "/media/application-forms" },
      { label: "Policies", href: "/media/policies" },
    ],
  },
  {
    label: "Quick Links",
    href: "/quick-links/cert",
    links: [
      { label: "Malawi CERT", href: "/quick-links/cert" },
      { label: "USF Consultations", href: "/quick-links/usf-consultations" },
      { label: "Vacancies", href: "/vacancies" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export default function NotFound() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<{ title: string; path: string; description: string }[]>([])
  const [fuseReady, setFuseReady] = useState(false)
  const fuseRef = useRef<Fuse<SearchEntry> | null>(null)

  useEffect(() => {
    Promise.all([
      import("fuse.js"),
      import("@/data/searchIndex"),
    ]).then(([mod, idx]) => {
      const FuseClass = mod.default as new (
        list: SearchEntry[],
        options: IFuseOptions<SearchEntry>
      ) => Fuse<SearchEntry>
      fuseRef.current = new FuseClass(idx.searchIndex, {
        keys: ["title", "description", "keywords"],
        threshold: 0.35,
        includeScore: true,
      })
      setFuseReady(true)
    })
  }, [])

  useEffect(() => {
    if (!fuseReady || !fuseRef.current) return
    if (query.trim().length < 2) { setResults([]); return }
    const raw = fuseRef.current.search(query.trim())
    setResults(raw.slice(0, 6).map((r) => ({ title: r.item.title, path: r.item.path, description: r.item.description })))
  }, [query, fuseReady])

  return (
    <main className="min-h-screen bg-[#F5F5F5]">

      <div className="bg-[#E30613] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl font-black tracking-tighter leading-none mb-4 opacity-20 select-none">
            404
          </div>
          <h1 className="text-2xl font-bold mb-2 -mt-6 relative z-10">
            Page not found
          </h1>
          <p className="text-white/80 text-sm mb-8">
            The page you are looking for may have moved or no longer exists.
          </p>

          <div className="relative max-w-lg mx-auto">
            <input
              type="search"
              placeholder="Search MACRA..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full text-[#333333] text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              autoFocus
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {results.length > 0 && (
            <ul className="mt-3 max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-lg text-left">
              {results.map((r) => (
                <li key={r.path} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={r.path}
                    className="flex flex-col px-5 py-3 hover:bg-red-50 transition-colors"
                  >
                    <span className="text-[#E30613] font-semibold text-sm">{r.title}</span>
                    <span className="text-gray-500 text-xs mt-0.5 line-clamp-1">{r.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query.trim().length >= 2 && results.length === 0 && fuseReady && (
            <p className="mt-3 text-white/60 text-sm">No results for &ldquo;{query}&rdquo;</p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Or go directly to
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickLinks.map((section) => (
            <div key={section.label} className="bg-white rounded-xl p-4 shadow-sm">
              <Link
                href={section.href}
                className="block text-sm font-bold text-[#333333] hover:text-[#E30613] transition-colors mb-3"
              >
                {section.label}
              </Link>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-[#E30613] transition-colors leading-snug block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#E30613] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#B8000F] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to home
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-500 hover:text-[#E30613] transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
