import { CalendarEventInput } from "./types";

function toICSDate(iso: string): string {
  return iso.replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeICSText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function foldLine(line: string): string {
  // RFC 5545 recommends folding lines longer than 75 octets.
  if (line.length <= 75) return line;
  const chunks: string[] = [];
  let remaining = line;
  while (remaining.length > 75) {
    chunks.push(remaining.slice(0, 75));
    remaining = " " + remaining.slice(75);
  }
  chunks.push(remaining);
  return chunks.join("\r\n");
}

/** Builds a complete .ics file body for a single (optionally recurring) event. */
export function buildICS(event: CalendarEventInput, uid?: string): string {
  const reminder = event.reminderMinutes ?? 60;
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CCC Run Club//ccc-run-club//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid ?? `${Date.now()}@cccrunclub`}`,
    `DTSTAMP:${toICSDate(new Date().toISOString())}`,
    `DTSTART:${toICSDate(event.startTime)}`,
    `DTEND:${toICSDate(event.endTime)}`,
    `SUMMARY:${escapeICSText(event.title)}`,
    `DESCRIPTION:${escapeICSText(event.description)}`,
    `LOCATION:${escapeICSText(event.location)}`,
  ];

  if (event.recurrence === "WEEKLY") {
    lines.push("RRULE:FREQ=WEEKLY");
  }

  lines.push(
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeICSText(event.title)} starts in ${reminder} minutes`,
    `TRIGGER:-PT${reminder}M`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  );

  return lines.map(foldLine).join("\r\n") + "\r\n";
}
