"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navigation, NavItem, NavChild } from "@/data/navigation";

function DropdownItem({ item }: { item: NavChild }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003087] whitespace-nowrap"
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
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003087] whitespace-nowrap flex justify-between items-center gap-2"
        aria-expanded={open}
      >
        {item.label}
        <span aria-hidden="true" className="text-xs">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <ul className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg min-w-[220px] z-50">
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
        className="px-3 py-5 text-sm font-medium text-[#003087] hover:text-[#C8A84B] flex items-center gap-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        {item.children && (
          <span aria-hidden="true" className="text-xs mt-0.5">
            {open ? "^" : "v"}
          </span>
        )}
      </button>
      {open && item.children && (
        <ul className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[220px] z-50">
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
  return (
    <nav aria-label="Main navigation" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <button
          className="md:hidden py-4 text-[#003087] font-medium text-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
        <ul className="hidden md:flex flex-wrap" role="menubar">
          {navigation.map((item) =>
            item.children ? (
              <NavDropdown key={item.href} item={item} />
            ) : (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  className="px-3 py-5 text-sm font-medium text-[#003087] hover:text-[#C8A84B] block"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-[#003087] border-b border-gray-100 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
