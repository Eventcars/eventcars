"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#search", label: "Search" },
  { href: "#categories", label: "Categories" },
  { href: "#featured", label: "Featured" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#list-your-car", label: "List your car" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30 transition group-hover:bg-gold/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-gold"
              aria-hidden
            >
              <path
                d="M5 11h14M7 16h10M9 6h6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 11l2-4h14l2 4v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-xl tracking-wide text-cream">
            Event<span className="text-gold">Cars</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#sign-in"
            className="hidden text-sm text-cream/70 transition hover:text-cream sm:inline"
          >
            Sign in
          </Link>
          <Link
            href="#search"
            className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-black transition hover:bg-gold-light sm:inline-flex"
          >
            Search cars
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gold/20 text-cream lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-gold/10 bg-black px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-cream/80 transition hover:bg-gold/10 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#search"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-lg bg-gold px-3 py-2.5 text-center text-sm font-semibold text-black"
              >
                Search cars
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
