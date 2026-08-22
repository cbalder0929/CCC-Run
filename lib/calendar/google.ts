import { CalendarEventInput, CalendarProvider } from "./types";

// TODO(google-oauth): This generates a public "quick add" template link, which
// requires no auth and works for any visitor. If we later want to write
// directly into a signed-in user's calendar (rather than opening a prefilled
// form), integrate Google Calendar API + OAuth here:
//   1. Register an OAuth client in Google Cloud Console.
//   2. Request the `calendar.events` scope.
//   3. Use googleapis' `calendar.events.insert` with the same CalendarEventInput
//      shape, translated to a Google Event resource.
// Keep this file's exported function signature stable so callers don't change.

function toGoogleDate(iso: string): string {
  return iso.replace(/[-:]/g, "").split(".")[0] + "Z";
}

export const googleCalendarProvider: CalendarProvider = {
  buildEventUrl(event: CalendarEventInput): string {
    const dates = `${toGoogleDate(event.startTime)}/${toGoogleDate(event.endTime)}`;
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: event.title,
      details: event.description,
      location: event.location,
      dates,
    });

    if (event.recurrence === "WEEKLY") {
      params.set("recur", "RRULE:FREQ=WEEKLY");
    }

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  },
};
