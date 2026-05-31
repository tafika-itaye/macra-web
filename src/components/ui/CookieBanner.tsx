"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { bp } from "@/lib/basePath";

const STORAGE_KEY = "macra-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      // localStorage unavailable
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* ignore */ }
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch { /* ignore */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#E30613] text-white px-4 py-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-blue-100 max-w-2xl">
          This website uses functional cookies to ensure it works correctly. We do not use advertising
          or tracking cookies. See our{" "}
          <Link href={bp("/privacy-policy")} className="underline hover:text-[#C8A84B]">
            Privacy Policy
          </Link>
          {" "}for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={accept}
            className="bg-[#C8A84B] text-[#E30613] font-semibold text-sm px-5 py-2 rounded hover:brightness-110 transition-all"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="bg-white/10 text-white font-semibold text-sm px-5 py-2 rounded hover:bg-white/20 transition-all"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

