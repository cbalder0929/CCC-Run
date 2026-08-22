import { RunEvent } from "@/types";
import { getGoogleCalendarUrl, getMicrosoftCalendarUrl } from "@/lib/calendar";
import { formatEventDate, formatEventTime } from "@/lib/utils/date";
import AddToCalendarMenu from "./AddToCalendarMenu";
import RouteMap from "./RouteMap";
import { IconClock, IconPin } from "./icons";

export default function Hero({ run }: { run: RunEvent }) {
  const date = new Date(run.startTime);
  const google = getGoogleCalendarUrl(run);
  const microsoft = getMicrosoftCalendarUrl(run);

  return (
    <section id="top" className="paper-grain relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="section-label mb-4">COLUMBIA COLLEGE CHICAGO</p>
          <h1 className="font-display text-[15vw] leading-[0.85] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            CCC
            <br />
            <span className="text-cobalt">RUN</span>
            <br />
            CLUB
          </h1>

          <p className="brush-underline mt-6 font-brush text-2xl text-ink sm:text-3xl">
            Run. Connect. Soak up the sun.
          </p>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/75">
            A casual student run from Columbia College Chicago to Buckingham
            Fountain and back. Come run, meet people, and get outside &mdash;
            no experience required.
          </p>

          {/* Immediate next-run facts, visible without scrolling */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y-2 border-ink/15 py-4 font-display text-sm tracking-wide text-ink sm:text-base">
            <span className="flex items-center gap-2">
              <IconClock className="h-5 w-5 text-cobalt" />
              {formatEventDate(date)} &middot; {formatEventTime(date)}
            </span>
            <span className="flex items-center gap-2">
              <IconPin className="h-5 w-5 text-cobalt" />
              {run.meetingPoint}
            </span>
            <span className="text-ink/50">{run.distance}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#join" className="btn-primary">
              Join the Run
            </a>
            <AddToCalendarMenu
              googleUrl={google}
              microsoftUrl={microsoft}
              icsHref="/api/calendar/ics"
              label="Add to Calendar"
              variant="secondary"
            />
          </div>
        </div>

        <div className="relative animate-fade-in animate-delay-200">
          <div className="absolute -inset-6 -z-10 rounded-full bg-cobalt/5 blur-2xl" aria-hidden="true" />
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
