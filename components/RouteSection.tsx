import RouteMap, { RouteSteps } from "./RouteMap";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Columbia+College+Chicago+Student+Center";

export default function RouteSection() {
  return (
    <section id="route" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label">THE ROUTE</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Straight down to the fountain and back
          </h2>
          <p className="mt-5 max-w-md font-body text-lg text-ink/70">
            We meet at the CCC Student Center, cut through Grant Park, and
            turn around at Buckingham Fountain &mdash; a flat, easy out-and-back
            with skyline views the whole way.
          </p>

          <div className="mt-8">
            <RouteSteps />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t-2 border-ink/15 pt-6">
            <div>
              <p className="font-display text-2xl">½ mile</p>
              <p className="text-xs uppercase tracking-widest text-ink/50">each way</p>
            </div>
            <div>
              <p className="font-display text-2xl">~30 min</p>
              <p className="text-xs uppercase tracking-widest text-ink/50">total, there &amp; back</p>
            </div>
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-8 inline-flex"
          >
            Get Directions
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-full bg-cobalt/5 blur-3xl" aria-hidden="true" />
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
