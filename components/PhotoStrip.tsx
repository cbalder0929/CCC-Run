const PLACEHOLDERS = [
  { caption: "Wednesday crew, Grant Park", tone: "bg-ink" },
  { caption: "Turnaround at the fountain", tone: "bg-cobalt" },
  { caption: "Post-run stretch", tone: "bg-ink" },
  { caption: "New faces every week", tone: "bg-cobalt" },
];

export default function PhotoStrip() {
  return (
    <section aria-labelledby="photo-strip-heading" className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 id="photo-strip-heading" className="section-label text-center">
          RUN WITH US
        </h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {PLACEHOLDERS.map((p) => (
            <figure
              key={p.caption}
              className={`relative flex h-40 w-56 shrink-0 items-end overflow-hidden rounded-lg border-2 border-ink p-4 ${p.tone}`}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #F3EEE4 0, #F3EEE4 2px, transparent 2px, transparent 14px)",
                }}
                aria-hidden="true"
              />
              <figcaption className="relative font-display text-sm tracking-wide text-paper">
                {p.caption}
                <span className="mt-0.5 block text-[10px] font-body font-normal uppercase tracking-widest text-paper/50">
                  Photo coming soon
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
