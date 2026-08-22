import { RunEvent } from "@/types";
import { formatEventDate, formatEventTime } from "@/lib/utils/date";
import { IconClock, IconPin, IconRoute } from "./icons";

export default function NextRun({ run }: { run: RunEvent }) {
  const date = new Date(run.startTime);

  return (
    <section id="next-run" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-up rounded-lg border-2 border-ink bg-ink p-8 text-paper shadow-[8px_8px_0_0_#1B2FC4] sm:p-12">
          <span className="brush-tag font-display text-xs tracking-[0.3em]">NEXT RUN</span>

          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
            {formatEventDate(date)}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <IconClock className="h-6 w-6 shrink-0 text-cobalt-light" />
              <div>
                <p className="font-display text-lg">{formatEventTime(date)}</p>
                <p className="text-xs uppercase tracking-widest text-paper/50">Every Wednesday</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IconRoute className="h-6 w-6 shrink-0 text-cobalt-light" />
              <div>
                <p className="font-display text-lg">{run.distance}</p>
                <p className="text-xs uppercase tracking-widest text-paper/50">
                  ~{run.durationMinutes} min total
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IconPin className="h-6 w-6 shrink-0 text-cobalt-light" />
              <div>
                <p className="font-display text-lg">{run.meetingPoint}</p>
                <p className="text-xs uppercase tracking-widest text-paper/50">Meet here</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-paper/15 pt-6 font-display text-sm tracking-wide text-paper/85 sm:text-base">
            <span>{run.meetingPoint}</span>
            <span className="text-cobalt-light">&#8594;</span>
            <span className="text-paper/60">Grant Park</span>
            <span className="text-cobalt-light">&#8594;</span>
            <span>{run.destination}</span>
            <span className="text-cobalt-light">&#8594;</span>
            <span className="text-paper/60">and back</span>
          </div>
        </div>
      </div>
    </section>
  );
}
