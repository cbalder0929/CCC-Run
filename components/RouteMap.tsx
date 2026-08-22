import { IconPin } from "./icons";

interface RouteMapProps {
  compact?: boolean;
}

export default function RouteMap({ compact = false }: RouteMapProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <svg
        viewBox="0 0 320 520"
        fill="none"
        className="w-full"
        role="img"
        aria-label="Route map from Columbia College Student Center, through Grant Park, to Buckingham Fountain"
      >
        <path
          d="M70 500C70 460 130 440 110 400C90 355 40 340 60 290C80 245 150 240 140 190C130 140 90 110 130 70C160 42 190 30 200 15"
          stroke="#1B2FC4"
          strokeWidth="4"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
        {/* Start marker */}
        <circle cx="70" cy="500" r="9" fill="#141414" />
        <circle cx="70" cy="500" r="4" fill="#F3EEE4" />
        {/* Finish marker */}
        <circle cx="200" cy="15" r="9" fill="#1B2FC4" />
        <circle cx="200" cy="15" r="4" fill="#F3EEE4" />
      </svg>

      {!compact && (
        <>
          <div className="absolute bottom-2 left-1/2 w-max -translate-x-[68%]">
            <span className="brush-tag font-display text-xs tracking-wider">START!</span>
            <p className="mt-1 max-w-[9rem] font-body text-xs text-ink/70">
              Columbia College Student Center
            </p>
          </div>
          <div className="absolute right-0 top-0 w-max -translate-x-[2%] translate-y-[-10%] text-right">
            <span className="brush-tag font-display text-xs tracking-wider">FINISH!</span>
            <p className="mt-1 max-w-[9rem] font-body text-xs text-ink/70">
              Buckingham Fountain
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export function RouteSteps() {
  const steps = [
    { label: "CCC Student Center", note: "Start line" },
    { label: "Grant Park", note: "Halfway stretch" },
    { label: "Buckingham Fountain", note: "Turnaround point" },
  ];

  return (
    <ol className="mx-auto flex max-w-xs flex-col items-center gap-0">
      {steps.map((step, i) => (
        <li key={step.label} className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <IconPin className="h-5 w-5 text-cobalt" />
            <span className="font-display text-xl tracking-wide">{step.label}</span>
          </div>
          <span className="mb-1 text-xs uppercase tracking-widest text-ink/50">{step.note}</span>
          {i < steps.length - 1 && (
            <span className="my-1 h-8 w-0.5 border-l-2 border-dashed border-cobalt/60" />
          )}
        </li>
      ))}
    </ol>
  );
}
