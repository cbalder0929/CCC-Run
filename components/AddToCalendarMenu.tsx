"use client";

import { useEffect, useRef, useState } from "react";
import { IconCalendar } from "./icons";

interface AddToCalendarMenuProps {
  googleUrl: string;
  microsoftUrl: string;
  icsHref: string;
  label?: string;
  variant?: "primary" | "secondary" | "light";
  /** Where the popover hangs relative to the button. Use "right" when the
   *  button sits at the right edge of its container (e.g. a list row) so the
   *  menu can't overflow past the viewport edge. */
  align?: "center" | "right";
  className?: string;
}

export default function AddToCalendarMenu({
  googleUrl,
  microsoftUrl,
  icsHref,
  label = "Add to Calendar",
  variant = "primary",
  align = "center",
  className = "",
}: AddToCalendarMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickAway(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickAway);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const buttonClass =
    variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-outline-light";

  return (
    <div className={`relative inline-block ${className}`} ref={containerRef}>
      <button
        type="button"
        className={buttonClass}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <IconCalendar className="h-5 w-5" />
        {label}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-30 mt-2 w-64 max-w-[calc(100vw-2.5rem)] rounded-md border-2 border-ink bg-paper p-2 shadow-xl animate-fade-up ${
            align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
          }`}
        >
          <a
            role="menuitem"
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded px-4 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-cobalt hover:text-paper"
          >
            Google Calendar
          </a>
          <a
            role="menuitem"
            href={icsHref}
            className="block rounded px-4 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-cobalt hover:text-paper"
          >
            Apple Calendar (.ics)
          </a>
          <a
            role="menuitem"
            href={microsoftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded px-4 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-cobalt hover:text-paper"
          >
            Microsoft Outlook
          </a>
        </div>
      )}
    </div>
  );
}
