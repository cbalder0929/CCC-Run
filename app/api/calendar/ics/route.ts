import { NextResponse } from "next/server";
import { getNextRun } from "@/lib/data/events";
import { getICSContent } from "@/lib/calendar";

export async function GET() {
  const run = getNextRun();
  const ics = getICSContent(run);

  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="ccc-run-club.ics"',
    },
  });
}
