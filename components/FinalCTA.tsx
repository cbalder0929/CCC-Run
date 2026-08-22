import { RunEvent } from "@/types";
import { getGoogleCalendarUrl, getMicrosoftCalendarUrl } from "@/lib/calendar";
import { formatEventDate, formatEventTime } from "@/lib/utils/date";
import AddToCalendarMenu from "./AddToCalendarMenu";

export default function FinalCTA({ run }: { run: RunEvent }) {
  const date = new Date(run.startTime);
  const google = getGoogleCalendarUrl(run);
  const microsoft = getMicrosoftCalendarUrl(run);

  return (
    <section className="paper-grain relative overflow-hidden bg-ink px-5 py-20 text-center text-paper sm:px-8 sm:py-28">
      <p className="brush-underline mx-auto font-brush text-3xl sm:text-4xl">Come run with us.</p>
      <p className="mt-6 font-display text-2xl tracking-wide text-paper/85 sm:text-3xl">
        Next run: {formatEventDate(date)} &middot; {formatEventTime(date)}
      </p>
      <div className="mt-10 flex justify-center">
        <AddToCalendarMenu
          googleUrl={google}
          microsoftUrl={microsoft}
          icsHref="/api/calendar/ics"
          label="Add to Calendar"
          variant="light"
        />
      </div>
    </section>
  );
}
