"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { bp } from "@/lib/basePath";

const heroImages = [
  "/images/hero-telecom.jpg",
  "/images/hero-broadcasting.jpg",
  "/images/hero-postal.jpg",
  "/images/hero-banner.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = newsItems.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const item = newsItems[active];
  const bgImage = heroImages[active % heroImages.length];

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "520px" }}
      aria-label="Homepage hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${bp(bgImage)})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#E30613]/80" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8A84B] font-medium mb-3 text-sm uppercase tracking-widest">
              Vision
            </p>
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight mb-6">
              Communications services for a digitally transformed nation
            </h1>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about-us/organisation"
                className="inline-block bg-[#C8A84B] text-[#E30613] font-semibold px-6 py-3 rounded hover:brightness-110 transition-all"
              >
                About MACRA
              </Link>
              <Link
                href="/consumer-protection/consumer-complaints"
                className="inline-block bg-white text-[#E30613] font-semibold px-6 py-3 rounded hover:bg-[#e8edf5] transition-all"
              >
                Submit a Complaint
              </Link>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-6 min-h-[220px] flex flex-col justify-between backdrop-blur-sm">
            <div>
              <p className="text-[#C8A84B] text-xs font-semibold uppercase tracking-widest mb-3">
                Latest News
              </p>
              <p className="text-white/60 text-xs mb-2">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-lg font-bold text-white mb-3 leading-snug">
                {item.title}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                {item.summary}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2" role="tablist" aria-label="News slides">
                {newsItems.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`News item ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-[#C8A84B] w-5" : "bg-white/40 hover:bg-white/70"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous news item"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center text-white text-sm"
                >
                  &#8592;
                </button>
                <button
                  onClick={next}
                  aria-label="Next news item"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center text-white text-sm"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}