import { RunEvent } from "@/types";
import { getGoogleCalendarUrl, getMicrosoftCalendarUrl } from "@/lib/calendar";
import AddToCalendarMenu from "./AddToCalendarMenu";
import NextRun from "./NextRun";
import RouteMap from "./RouteMap";

export default function Hero({ run }: { run: RunEvent }) {
  const google = getGoogleCalendarUrl(run);
  const microsoft = getMicrosoftCalendarUrl(run);

  return (
    <section id="top" className="paper-grain relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14">
      <NextRun run={run} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 animate-fade-up">
          <div className="mt-6 flex flex-wrap gap-4">
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
