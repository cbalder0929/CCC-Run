export interface CalendarEventInput {
  title: string;
  description: string;
  location: string;
  /** ISO 8601 datetime string, e.g. "2026-08-26T17:00:00.000Z" (UTC) */
  startTime: string;
  /** ISO 8601 datetime string, e.g. "2026-08-26T17:30:00.000Z" (UTC) */
  endTime: string;
  recurrence?: "WEEKLY" | "NONE";
  /** Minutes before start to trigger a reminder. One VALARM is added per entry. */
  reminderMinutesList?: number[];
}

export interface CalendarProvider {
  /** Returns a URL the user can open to add the event, or null if unsupported. */
  buildEventUrl(event: CalendarEventInput): string;
}
