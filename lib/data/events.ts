import { RunEvent } from "@/types";
import { getNextWeekday } from "@/lib/utils/date";

/**
 * TODO(database): This module currently returns in-memory mock data computed
 * from the recurrence rule below. Swap this for a Supabase/Postgres query
 * (e.g. `select * from run_events where active = true order by date asc`)
 * without changing the RunEvent shape or the callers of getNextRun/getUpcomingRuns.
 */

const WEDNESDAY = 3;
const START_HOUR = 12;
const START_MINUTE = 0;
const DURATION_MINUTES = 30;

function buildEvent(occurrence: Date, index: number): RunEvent {
  const end = new Date(occurrence.getTime() + DURATION_MINUTES * 60_000);
  return {
    id: `ccc-run-${occurrence.toISOString().slice(0, 10)}`,
    title: "CCC Run Club",
    date: occurrence.toISOString().slice(0, 10),
    startTime: occurrence.toISOString(),
    endTime: end.toISOString(),
    location: "Grant Park / Buckingham Fountain",
    meetingPoint: "Columbia College Student Center",
    destination: "Buckingham Fountain",
    distance: "½ mile each way",
    durationMinutes: DURATION_MINUTES,
    description:
      "A casual student run from Columbia College Chicago to Buckingham Fountain and back. Come run, meet people, and get outside.",
    recurrence: "WEEKLY",
    active: index === 0 ? true : true,
  };
}

export function getNextRun(from: Date = new Date()): RunEvent {
  const next = getNextWeekday(WEDNESDAY, START_HOUR, START_MINUTE, from);
  return buildEvent(next, 0);
}

export function getUpcomingRuns(count = 4, from: Date = new Date()): RunEvent[] {
  const runs: RunEvent[] = [];
  let cursor = from;
  for (let i = 0; i < count; i++) {
    const occurrence = getNextWeekday(WEDNESDAY, START_HOUR, START_MINUTE, cursor);
    runs.push(buildEvent(occurrence, i));
    cursor = new Date(occurrence.getTime() + 60_000);
  }
  return runs;
}
