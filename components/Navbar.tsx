"use client";

import { useState } from "react";

const LINKS = [
  { href: "#next-run", label: "Home" },
  { href: "#schedule", label: "Schedule" },
  { href: "#route", label: "Route" },
  { href: "#calendar", label: "Calendar" },
  { href: "#join", label: "Join" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="font-brush text-2xl leading-none text-ink sm:text-3xl">
          CCC <span className="text-cobalt">Run</span> Club
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-sm tracking-widest text-ink/80 transition-colors hover:text-cobalt"
              >
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <a href="#join" className="btn-primary hidden !px-5 !py-2.5 !text-sm md:inline-flex">
          Join the Run
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t-2 border-ink bg-paper px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-lg tracking-wide text-ink"
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Join the Run
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
