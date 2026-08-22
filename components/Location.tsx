import { IconPin } from "./icons";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Columbia+College+Chicago+Student+Center";

export default function Location() {
  return (
    <section className="bg-paper-dim px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label">WHERE TO MEET</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          Columbia College Student Center
        </h2>
        <p className="mt-4 flex items-center justify-center gap-2 font-body text-lg text-ink/70">
          <IconPin className="h-5 w-5 shrink-0 text-cobalt" />
          624 S Michigan Ave, Chicago, IL 60605
        </p>
        <p className="mx-auto mt-4 max-w-md font-body text-ink/60">
          Look for the group in running shoes just outside the main
          entrance a few minutes before 12:00 PM &mdash; can&apos;t miss us.
        </p>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 inline-flex"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
