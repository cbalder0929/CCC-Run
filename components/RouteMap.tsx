import Image from "next/image";
import { IconPin } from "./icons";

interface RouteMapProps {
  compact?: boolean;
}

export default function RouteMap({ compact = false }: RouteMapProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg">
      <Image
        src="/mapCCrun.png"
        alt="Route map from Columbia College Student Center, through Grant Park, to Buckingham Fountain"
        width={853}
        height={1844}
        className="w-full"
      />

      {!compact && (
        <>
          <div className="absolute" style={{ left: "8%", top: "80%" }}>
            <span className="brush-tag font-display text-xs tracking-wider">START!</span>
            <p className="mt-1 max-w-[9rem] font-body text-xs text-ink/70">
              Columbia College Student Center
            </p>
          </div>
          <div className="absolute w-max text-right" style={{ right: "6%", top: "10%" }}>
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
