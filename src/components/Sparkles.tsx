import type { CSSProperties } from "react";

/* Ambient twinkling sparkles scattered behind the swipe deck. Purely
   decorative — pointer-events disabled so they never block a swipe. */
interface Spark {
  top: string;
  left: string;
  size: number;
  char: string;
  color: string;
  delay: number;
  dur: number;
  drift: number;
}

const PALETTE = [
  "var(--neon-pink)",
  "var(--neon-orange)",
  "var(--gold-400)",
  "var(--emerald-300)",
  "var(--sky-400)",
];

const AMBIENT: Spark[] = [
  { top: "8%", left: "6%", size: 18, char: "✨", color: PALETTE[0], delay: 0, dur: 3.4, drift: 5 },
  { top: "16%", left: "88%", size: 14, char: "✦", color: PALETTE[3], delay: 0.6, dur: 4.1, drift: 6 },
  { top: "30%", left: "3%", size: 12, char: "✦", color: PALETTE[2], delay: 1.2, dur: 3.8, drift: 7 },
  { top: "26%", left: "94%", size: 20, char: "✨", color: PALETTE[1], delay: 0.3, dur: 4.6, drift: 5 },
  { top: "54%", left: "2%", size: 16, char: "✨", color: PALETTE[4], delay: 1.6, dur: 3.6, drift: 8 },
  { top: "62%", left: "96%", size: 13, char: "✦", color: PALETTE[0], delay: 0.9, dur: 4.3, drift: 6 },
  { top: "80%", left: "8%", size: 15, char: "✦", color: PALETTE[2], delay: 2.0, dur: 3.9, drift: 7 },
  { top: "86%", left: "90%", size: 18, char: "✨", color: PALETTE[3], delay: 0.4, dur: 4.0, drift: 5 },
  { top: "44%", left: "10%", size: 10, char: "✦", color: PALETTE[1], delay: 1.4, dur: 3.5, drift: 6 },
  { top: "40%", left: "92%", size: 11, char: "✦", color: PALETTE[4], delay: 2.2, dur: 4.2, drift: 8 },
];

export function AmbientSparkles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {AMBIENT.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            fontSize: s.size,
            color: s.color,
            textShadow: `0 0 10px ${s.color}`,
            animation: `trotr-twinkle ${s.dur}s ${s.delay}s ease-in-out infinite, trotr-drift ${s.dur * 1.7}s ${s.delay}s ease-in-out infinite`,
            willChange: "transform, opacity",
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}

/* A one-shot radial sparkle burst, used on the match celebration. */
const BURST = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const radius = 70 + (i % 3) * 26;
  return {
    bx: Math.cos(angle) * radius,
    by: Math.sin(angle) * radius,
    color: PALETTE[i % PALETTE.length],
    size: 12 + (i % 4) * 4,
    char: i % 2 === 0 ? "✨" : "✦",
    delay: (i % 5) * 0.05,
  };
});

export function SparkleBurst() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none", zIndex: 1 }}>
      {BURST.map((s, i) => (
        <span
          key={i}
          style={
            {
              position: "absolute",
              top: "42%",
              left: "50%",
              fontSize: s.size,
              color: s.color,
              textShadow: `0 0 10px ${s.color}`,
              "--bx": `${s.bx}px`,
              "--by": `${s.by}px`,
              animation: `trotr-burst 1.1s ${s.delay}s var(--ease-out) forwards`,
            } as CSSProperties
          }
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}
