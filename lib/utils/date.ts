/**
 * Returns the next occurrence of a given weekday (0 = Sunday ... 6 = Saturday)
 * at the given hour/minute, in the local timezone. If today is that weekday
 * and the time hasn't passed yet, returns today.
 */
export function getNextWeekday(
  weekday: number,
  hour: number,
  minute: number,
  from: Date = new Date()
): Date {
  const result = new Date(from);
  result.setHours(hour, minute, 0, 0);

  let daysUntil = (weekday - result.getDay() + 7) % 7;
  if (daysUntil === 0 && result.getTime() <= from.getTime()) {
    daysUntil = 7;
  }
  result.setDate(result.getDate() + daysUntil);
  return result;
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function formatEventTime(date: Date): string {
  return date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
    .replace(":00", "");
}

/** Formats a Date as a UTC-based iCalendar timestamp: YYYYMMDDTHHMMSSZ */
export function toICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
