"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { newsItems } from "@/data/news";

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

  return (
    <section
      className="bg-[#003087] text-white py-20 px-4"
      aria-label="Homepage hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left column: static vision statement */}
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
                className="inline-block bg-[#C8A84B] text-[#003087] font-semibold px-6 py-3 rounded hover:brightness-110 transition-all"
              >
                About MACRA
              </Link>
              <Link
                href="/consumer-protection/consumer-complaints"
                className="inline-block bg-white text-[#003087] font-semibold px-6 py-3 rounded hover:bg-[#e8edf5] transition-all"
              >
                Submit a Complaint
              </Link>
            </div>
          </div>

          {/* Right column: rotating news */}
          <div className="bg-white/10 rounded-xl p-6 min-h-[220px] flex flex-col justify-between">
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
                {item.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              {/* Dot indicators */}
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
              {/* Prev / next arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous news item"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center text-white text-sm"
                >
                  &larr;
                </button>
                <button
                  onClick={next}
                  aria-label="Next news item"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center text-white text-sm"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

