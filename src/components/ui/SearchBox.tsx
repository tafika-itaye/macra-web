"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchIndex, SearchEntry } from "@/data/searchIndex";

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.6 },
    { name: "description", weight: 0.3 },
    { name: "section", weight: 0.1 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
});

export default function SearchBox({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const runSearch = useCallback((q: string) => {
    if (q.trim().length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    const hits = fuse.search(q).slice(0, 8).map((r) => r.item);
    setResults(hits);
    setOpen(hits.length > 0);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    runSearch(query);
  }, [query, runSearch]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(path: string) {
    setQuery("");
    setResults([]);
    setOpen(false);
    onClose?.();
    router.push(path);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        navigate(results[activeIndex].path);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  }

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const el = listRef.current.children[activeIndex] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 gap-2">
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search MACRA..."
          aria-label="Search MACRA website"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls="search-results"
          className="bg-transparent text-sm text-[#E30613] placeholder-gray-400 outline-none w-36 focus:w-48 transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); inputRef.current?.focus(); }}
            aria-label="Clear search"
            className="text-gray-400 hover:text-[#E30613] text-xs leading-none"
          >
            x
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <ul
          id="search-results"
          ref={listRef}
          role="listbox"
          aria-label="Search results"
          className="absolute right-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-80 max-h-96 overflow-y-auto z-50"
        >
          {results.map((entry, i) => (
            <li
              key={entry.path}
              role="option"
              aria-selected={i === activeIndex}
              className={[
                "px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0",
                i === activeIndex ? "bg-[#e8edf5]" : "hover:bg-gray-50",
              ].join(" ")}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => navigate(entry.path)}
            >
              <p className="text-xs text-[#C8A84B] font-semibold uppercase tracking-wide mb-0.5">
                {entry.section}
              </p>
              <p className="text-sm font-medium text-[#E30613]">{entry.title}</p>
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{entry.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

