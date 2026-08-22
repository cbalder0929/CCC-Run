const STEPS = [
  {
    label: "BEFORE",
    title: "Meet up",
    body: "Show up a few minutes early at the Student Center. Say hi, stretch a little, meet whoever's around.",
  },
  {
    label: "DURING",
    title: "Run together",
    body: "We head to Buckingham Fountain at a comfortable, conversational pace. Walk breaks are always fine.",
  },
  {
    label: "AFTER",
    title: "Hang out",
    body: "Catch your breath at the fountain, chat, and head back. Some folks grab water or coffee after.",
  },
];

export default function WhatToExpect() {
  return (
    <section className="bg-paper-dim px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="section-label">WHAT TO EXPECT</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Show up, run, hang out
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[2.35rem] hidden h-0.5 border-t-2 border-dashed border-cobalt/40 sm:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <div key={step.label} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-paper font-display text-lg">
                {i + 1}
              </span>
              <p className="mt-4 font-display text-xs tracking-[0.3em] text-cobalt">{step.label}</p>
              <h3 className="mt-1 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 font-body text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
