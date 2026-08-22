import { RunEvent } from "@/types";
import { getGoogleCalendarUrl, getMicrosoftCalendarUrl } from "@/lib/calendar";
import { IconCalendar } from "./icons";

export default function CalendarButtons({ run }: { run: RunEvent }) {
  const google = getGoogleCalendarUrl(run);
  const microsoft = getMicrosoftCalendarUrl(run);

  return (
    <section id="calendar" className="bg-paper-dim px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">NEVER MISS A RUN</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          Put it on the calendar
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-ink/70">
          Add the weekly run to your calendar and get reminded one hour
          before we meet &mdash; every Wednesday, automatically.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={google}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <IconCalendar className="h-5 w-5" />
            Google Calendar
          </a>
          <a
            href={microsoft}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto"
          >
            <IconCalendar className="h-5 w-5" />
            Microsoft Outlook
          </a>
        </div>

        <a
          href="/api/calendar/ics"
          className="mt-6 inline-block font-display text-sm tracking-widest text-cobalt underline underline-offset-4 hover:text-cobalt-dark"
        >
          DOWNLOAD CALENDAR EVENT (.ICS) &mdash; WORKS WITH APPLE CALENDAR
        </a>

        <p className="mx-auto mt-8 max-w-md text-xs uppercase tracking-widest text-ink/40">
          Repeats weekly &middot; 60-minute reminder included &middot; no account needed
        </p>
      </div>
    </section>
  );
}
