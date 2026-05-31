"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navigation, NavItem, NavChild } from "@/data/navigation";
import SearchBox from "@/components/ui/SearchBox";

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="block px-4 py-3 text-sm font-medium text-[#003087] border-b border-gray-100 hover:bg-gray-50"
          onClick={onClose}
        >
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-[#003087] border-b border-gray-100 hover:bg-gray-50"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <span aria-hidden="true" className="text-xs">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <ul className="bg-gray-50 border-b border-gray-100">
          {item.children.map((child) => (
            <MobileChildItem key={child.href} item={child} onClose={onClose} />
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileChildItem({ item, onClose }: { item: NavChild; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="block px-6 py-2.5 text-sm text-gray-600 border-b border-gray-100 hover:text-[#003087] hover:bg-gray-100"
          onClick={onClose}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
        >
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <button
        className="w-full flex justify-between items-center px-6 py-2.5 text-sm text-gray-600 border-b border-gray-100 hover:text-[#003087] hover:bg-gray-100"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <span aria-hidden="true" className="text-xs">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <ul className="bg-gray-100">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-8 py-2 text-sm text-gray-600 border-b border-gray-100 hover:text-[#003087]"
                onClick={onClose}
                target={child.external ? "_blank" : undefined}
                rel={child.external ? "noopener noreferrer" : undefined}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function DropdownItem({ item }: { item: NavChild }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#003087] whitespace-nowrap"
        >
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#003087] whitespace-nowrap flex justify-between items-center gap-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <span aria-hidden="true" className="text-xs">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <ul className="absolute left-full top-0 bg-white border border-gray-200 shadow-md min-w-[220px] z-50">
          {item.children.map((child) => (
            <DropdownItem key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-4 text-sm font-medium text-[#003087] hover:text-[#C8A84B] flex items-center gap-1 focus:outline-none focus-visible:underline"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d={open ? "M2 8l4-4 4 4" : "M2 4l4 4 4-4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>
      {open && item.children && (
        <ul
          className="absolute top-full left-0 bg-white border border-gray-200 shadow-md min-w-[220px] z-50"
          role="menu"
        >
          {item.children.map((child) => (
            <DropdownItem key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className={[
        "bg-white border-b border-gray-200 sticky top-0 z-40 transition-shadow duration-200",
        scrolled ? "shadow-md" : "",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <ul className="hidden md:flex flex-wrap" role="menubar">
          {navigation.map((item) =>
            item.children ? (
              <NavDropdown key={item.href} item={item} />
            ) : (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  className="px-3 py-4 text-sm font-medium text-[#003087] hover:text-[#C8A84B] block focus:outline-none focus-visible:underline"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="hidden md:block py-3">
          <SearchBox />
        </div>
        <button
          className="md:hidden py-4 px-1 text-[#003087] focus:outline-none focus-visible:underline"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="px-4 py-3 border-b border-gray-100">
            <SearchBox onClose={() => setMobileOpen(false)} />
          </div>
          <ul>
            {navigation.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

