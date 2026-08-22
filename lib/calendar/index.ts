import { RunEvent } from "@/types";
import { CalendarEventInput } from "./types";
import { googleCalendarProvider } from "./google";
import { microsoftCalendarProvider } from "./microsoft";
import { buildICS } from "./ics";

export * from "./types";

const EVENT_DESCRIPTION =
  "CCC Run Club — a casual student run from Columbia College Chicago to Buckingham Fountain and back.";

/** Converts app-level RunEvent data into the generic calendar service shape. */
export function runEventToCalendarInput(run: RunEvent): CalendarEventInput {
  return {
    title: run.title,
    description: EVENT_DESCRIPTION,
    location: `${run.meetingPoint} → ${run.destination}, Chicago, IL`,
    startTime: run.startTime,
    endTime: run.endTime,
    recurrence: run.recurrence === "WEEKLY" ? "WEEKLY" : "NONE",
    reminderMinutes: 60,
  };
}

export function getGoogleCalendarUrl(run: RunEvent): string {
  return googleCalendarProvider.buildEventUrl(runEventToCalendarInput(run));
}

export function getMicrosoftCalendarUrl(run: RunEvent): string {
  return microsoftCalendarProvider.buildEventUrl(runEventToCalendarInput(run));
}

export function getICSContent(run: RunEvent): string {
  return buildICS(runEventToCalendarInput(run), `${run.id}@cccrunclub`);
}
