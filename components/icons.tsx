export function IconCalendar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 3V6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M16 3V6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="6.5" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="14.5" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconClock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7V12L15.5 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 22C12 22 19 14.75 19 9.5C19 5.63 15.87 2.5 12 2.5C8.13 2.5 5 5.63 5 9.5C5 14.75 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.75" fill="currentColor" />
    </svg>
  );
}

export function IconRoute({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8 7C10 8 8 12 12 12C16 12 14 17 16 17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

export function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 3.5H9.5L11 8L8.5 9.5C9.4 11.6 11.4 13.6 13.5 14.5L15 12L19.5 13.5V16.5C19.5 18.16 18.16 19.5 16.5 19.5C10 19.09 4.91 14 4.5 7.5C4.42 5.86 5.16 3.5 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSun({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2.5V5M12 19V21.5M21.5 12H19M5 12H2.5M18.5 5.5L16.8 7.2M7.2 16.8L5.5 18.5M18.5 18.5L16.8 16.8M7.2 7.2L5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconRunner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="38" cy="10" r="5.5" fill="currentColor" />
      <path
        d="M34 18L26 24L30 32L22 38M30 32L38 34L44 26M38 34L34 46L24 52M38 34L46 44L44 52"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function FountainSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Line illustration of Buckingham Fountain</title>
      {/* central water jet */}
      <path
        d="M160 10C160 10 152 60 160 95"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M154 12C154 12 148 55 154 92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M166 12C166 12 172 55 166 92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* radiating side jets */}
      {[-70, -45, -20, 20, 45, 70].map((angle) => (
        <path
          key={angle}
          d={`M160 95 Q ${160 + angle * 0.6} ${70 - Math.abs(angle) * 0.3} ${160 + angle} 100`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      ))}
      {/* tiers */}
      <ellipse cx="160" cy="102" rx="34" ry="9" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="160" cy="122" rx="62" ry="12" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="160" cy="148" rx="92" ry="14" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="160" cy="178" rx="128" ry="17" stroke="currentColor" strokeWidth="2" />
      {/* base rim + basin dots */}
      <ellipse cx="160" cy="196" rx="150" ry="16" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 28 }).map((_, i) => {
        const t = i / 27;
        const x = 12 + t * 296;
        const y = 200 + Math.sin(t * Math.PI) * -4;
        return <circle key={i} cx={x} cy={y} r="1.6" fill="currentColor" opacity="0.5" />;
      })}
    </svg>
  );
}
