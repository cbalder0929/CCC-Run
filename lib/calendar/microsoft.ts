import { CalendarEventInput, CalendarProvider } from "./types";

// TODO(microsoft-graph): This generates a public Outlook "deeplink compose"
// URL, which requires no auth. To write directly into a signed-in user's
// calendar (and properly encode weekly recurrence + reminders instead of
// relying on the compose form's defaults), integrate Microsoft Graph here:
//   1. Register an app in Azure AD / Entra ID.
//   2. Request the `Calendars.ReadWrite` delegated scope.
//   3. Use the Graph `POST /me/events` endpoint with a `recurrence` object
//      and `reminderMinutesBeforeStart`, translated from CalendarEventInput.
// Keep this file's exported function signature stable so callers don't change.

export const microsoftCalendarProvider: CalendarProvider = {
  buildEventUrl(event: CalendarEventInput): string {
    const params = new URLSearchParams({
      path: "/calendar/action/compose",
      rru: "addevent",
      subject: event.title,
      body: event.description,
      location: event.location,
      startdt: event.startTime,
      enddt: event.endTime,
    });

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  },
};
