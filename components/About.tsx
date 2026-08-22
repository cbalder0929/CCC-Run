import { IconPin, IconRoute, IconSun } from "./icons";

const FEATURES = [
  {
    title: "RUN",
    body: "½ mile to Buckingham Fountain.",
    icon: IconRoute,
  },
  {
    title: "CONNECT",
    body: "Meet other CCC students.",
    icon: IconPin,
  },
  {
    title: "SOAK UP THE SUN",
    body: "Get outside during the school day.",
    icon: IconSun,
  },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">WHY RUN?</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          You&apos;re invited &mdash; no experience required
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-lg text-ink/70">
          No pace requirement, no gear checklist. Just show up, run a little,
          meet some people, and get some sun. New faces are always welcome.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`animate-fade-up rounded-lg border-2 border-ink bg-paper-dim p-8 text-left animate-delay-${(i + 1) * 100}`}
            >
              <f.icon className="h-9 w-9 text-cobalt" />
              <h3 className="mt-5 font-display text-2xl tracking-wide">{f.title}</h3>
              <p className="mt-2 font-body text-ink/70">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
