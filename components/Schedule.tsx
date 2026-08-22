import { RunEvent } from "@/types";
import { getGoogleCalendarUrl, getMicrosoftCalendarUrl } from "@/lib/calendar";
import { formatEventDate, formatEventTime } from "@/lib/utils/date";
import AddToCalendarMenu from "./AddToCalendarMenu";
import { IconClock, IconPin, IconRoute } from "./icons";

export default function Schedule({ runs }: { runs: RunEvent[] }) {
  return (
    <section id="schedule" className="bg-paper-dim px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-label">RUN WITH US</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Upcoming runs
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-ink/70">
            Every Wednesday, 12:00 PM, at the CCC Student Center. Here&apos;s
            what&apos;s on the calendar next.
          </p>
        </div>

        <ul className="mt-12 flex flex-col gap-4">
          {runs.map((run, i) => {
            const date = new Date(run.startTime);
            return (
              <li
                key={run.id}
                className="flex flex-col gap-4 rounded-lg border-2 border-ink bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-2xl">{formatEventDate(date)}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink/70">
                    <span className="flex items-center gap-1.5">
                      <IconClock className="h-4 w-4 text-cobalt" />
                      {formatEventTime(date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <IconPin className="h-4 w-4 text-cobalt" />
                      {run.meetingPoint}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <IconRoute className="h-4 w-4 text-cobalt" />
                      {run.distance}
                    </span>
                  </div>
                </div>
                <AddToCalendarMenu
                  googleUrl={getGoogleCalendarUrl(run)}
                  microsoftUrl={getMicrosoftCalendarUrl(run)}
                  icsHref="/api/calendar/ics"
                  label="Add to Calendar"
                  variant={i === 0 ? "primary" : "secondary"}
                  align="right"
                  className="shrink-0"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
