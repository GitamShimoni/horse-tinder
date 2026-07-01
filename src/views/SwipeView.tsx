import { createRef, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import TinderCard from "react-tinder-card";
import { horses } from "../data/horses";
import { leftGifs, rightGifs } from "../data/sideGifs";
import type { Horse } from "../types";
import ProfileCard from "../components/ProfileCard";
import MatchModal from "../components/MatchModal";
import Icon from "../components/Icon";
import type { IconName } from "../components/Icon";
import { AmbientSparkles } from "../components/Sparkles";
import { IconButton, Button } from "../components/ui";

type Direction = "left" | "right" | "up" | "down";
type Hint = "like" | "nope" | "super" | null;

// Structural type for react-tinder-card's imperative ref handle.
interface TinderCardApi {
  swipe: (dir?: Direction) => Promise<void>;
  restoreCard: () => Promise<void>;
}

// Show a match toast on the Nth "like" (right or super). Trigger on the 3rd.
const MATCH_ON_LIKE = 3;

const dirToHint = (dir: Direction): Hint =>
  dir === "right" ? "like" : dir === "left" ? "nope" : dir === "up" ? "super" : null;

const HINTS: Record<Exclude<Hint, null>, { label: string; icon: IconName; main: string; glow: string; rot: number; wrap: CSSProperties }> = {
  like: { label: "LIKE", icon: "heart", main: "var(--green-300)", glow: "var(--glow-green)", rot: -14, wrap: { top: 24, left: 22 } },
  nope: { label: "NOPE", icon: "x", main: "var(--red-400)", glow: "var(--glow-red)", rot: 14, wrap: { top: 24, right: 22 } },
  super: { label: "SUPER NEIGH", icon: "zap", main: "var(--accent-super)", glow: "var(--glow-super)", rot: -6, wrap: { top: 22, left: "50%", transform: "translateX(-50%)" } },
};

interface Props {
  onMatch: (horse: Horse) => void;
  onHome: () => void;
}

export default function SwipeView({ onMatch, onHome }: Props) {
  const [currentIndex, setCurrentIndex] = useState(horses.length - 1);
  const [matched, setMatched] = useState<Horse | null>(null);
  const [superFlash, setSuperFlash] = useState(false);
  const [hint, setHint] = useState<Hint>(null);

  // Refs mirror state so async swipe callbacks read fresh values.
  const currentIndexRef = useRef(currentIndex);
  const likeCountRef = useRef(0);
  const superTimer = useRef<number | null>(null);

  const childRefs = useMemo(
    () => horses.map(() => createRef<TinderCardApi>()),
    [],
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const registerLike = (index: number) => {
    likeCountRef.current += 1;
    if (likeCountRef.current === MATCH_ON_LIKE) {
      setMatched(horses[index]);
    }
  };

  const swiped = (direction: Direction, index: number) => {
    setHint(null);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      registerLike(index);
    } else if (direction === "up") {
      registerLike(index);
      setSuperFlash(true);
      if (superTimer.current) window.clearTimeout(superTimer.current);
      superTimer.current = window.setTimeout(() => setSuperFlash(false), 900);
    }
  };

  // Restore a card only if it left the screen while still "behind" the stack.
  const outOfFrame = (index: number) => {
    if (currentIndexRef.current >= index) {
      childRefs[index].current?.restoreCard();
    }
  };

  const swipe = async (dir: Direction) => {
    if (canSwipe && currentIndex < horses.length) {
      setHint(dirToHint(dir));
      await childRefs[currentIndex].current?.swipe(dir);
    }
  };

  const restart = () => {
    likeCountRef.current = 0;
    setMatched(null);
    setHint(null);
    updateCurrentIndex(horses.length - 1);
    childRefs.forEach((ref) => ref.current?.restoreCard());
  };

  const bold = "var(--fw-bold)" as CSSProperties["fontWeight"];
  const activeHint = hint ? HINTS[hint] : null;

  return (
    <div
      className="trotr-canvas trotr-play"
      style={{
        background:
          "radial-gradient(60% 45% at 12% -5%, rgba(255,45,120,0.16), rgba(6,10,21,0) 55%)," +
          "radial-gradient(65% 55% at 88% 105%, rgba(255,122,24,0.16), rgba(6,10,21,0) 55%)," +
          "var(--bg-app)",
      }}
    >
      <AmbientSparkles />

      {/* Minimal brand (click = home) */}
      <button
        onClick={onHome}
        aria-label="Back to home"
        style={{
          position: "absolute",
          top: 22,
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 4,
        }}
      >
        <img src="/brand/trotr-mark.svg" alt="" width={22} height={22} />
        <span
          className="trotr-gradient-text"
          style={{ fontFamily: "var(--font-display)", fontWeight: bold, fontSize: 16, letterSpacing: "var(--ls-tight)" }}
        >
          Horse Before Hoes
        </span>
      </button>

      {/* Left GIF rail (renders only when GIFs are supplied) */}
      {leftGifs.length > 0 && (
        <aside className="trotr-sidegif">
          {leftGifs.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </aside>
      )}

      {/* Centered play column */}
      <div className="trotr-play-col" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="trotr-deck"
          style={{
            boxShadow: activeHint ? `0 0 80px -12px ${activeHint.glow}` : "none",
            transition: "box-shadow var(--dur-base) var(--ease-out)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          {currentIndex < 0 ? (
            <div
              className="trotr-glass"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px 28px",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <span style={{ fontSize: 56 }}>🌾</span>
              <div style={{ fontFamily: "var(--font-display)", color: "var(--text-strong)", fontSize: 20, marginTop: 14 }}>
                You&apos;ve trotted through every loyal soul
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, marginTop: 8, color: "var(--text-muted)", maxWidth: 260 }}>
                That&apos;s the whole stable. Check back after the next hay delivery for fresh studs who put horse before hoes.
              </p>
              <Button onClick={restart} iconLeft="rotateCcw" style={{ marginTop: 22 }}>
                Start over
              </Button>
            </div>
          ) : (
            horses.map((horse, index) => (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={horse.id}
                onSwipe={(dir) => swiped(dir as Direction, index)}
                onCardLeftScreen={() => outOfFrame(index)}
                onSwipeRequirementFulfilled={(dir) => setHint(dirToHint(dir as Direction))}
                onSwipeRequirementUnfulfilled={() => setHint(null)}
                swipeRequirementType="position"
                swipeThreshold={80}
                preventSwipe={["down"]}
              >
                <ProfileCard horse={horse} fill style={{ width: "100%", height: "100%" }} />
              </TinderCard>
            ))
          )}

          {/* Directional color feedback (vignette + stamp) */}
          {activeHint && currentIndex >= 0 && (
            <div style={{ position: "absolute", inset: 0, zIndex: 6, pointerEvents: "none", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "var(--radius-xl)",
                  border: `3px solid ${activeHint.main}`,
                  boxShadow: `inset 0 0 70px -10px ${activeHint.glow}`,
                  background:
                    hint === "like"
                      ? "linear-gradient(to left, rgba(34,197,94,0.28), transparent 55%)"
                      : hint === "nope"
                        ? "linear-gradient(to right, rgba(239,68,68,0.28), transparent 55%)"
                        : "linear-gradient(to bottom, rgba(56,189,248,0.28), transparent 55%)",
                }}
              />
              <div style={{ position: "absolute", ...activeHint.wrap }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    border: `3px solid ${activeHint.main}`,
                    color: activeHint.main,
                    background: "rgba(6,10,21,0.35)",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "blur(2px)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 26,
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                    textShadow: `0 0 18px ${activeHint.glow}`,
                    "--rot": `${activeHint.rot}deg`,
                    animation: "trotr-stamp-in 0.22s var(--ease-spring) both",
                  } as CSSProperties}
                >
                  <Icon name={activeHint.icon} size={24} strokeWidth={2.6} />
                  {activeHint.label}
                </div>
              </div>
            </div>
          )}

          {/* Super Neigh flash */}
          {superFlash && (
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px 20px",
                borderRadius: "var(--radius-pill)",
                background: "var(--accent-super)",
                color: "#04222e",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 22,
                boxShadow: "0 10px 40px var(--glow-super)",
                animation: "trotr-pop 0.3s var(--ease-spring)",
                pointerEvents: "none",
                zIndex: 10,
              }}
            >
              *NEIGHHH!*
            </div>
          )}
        </div>

        {/* Action row */}
        {currentIndex >= 0 && (
          <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 22 }}>
              <IconButton icon="x" tone="red" size="lg" label="Nope" disabled={!canSwipe} onClick={() => swipe("left")} />
              <IconButton icon="zap" tone="super" label="Super Neigh" disabled={!canSwipe} onClick={() => swipe("up")} />
              <IconButton icon="heart" tone="green" size="lg" label="Like" disabled={!canSwipe} onClick={() => swipe("right")} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                marginTop: 14,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-faint)",
              }}
            >
              <span style={{ color: "var(--red-400)" }}>Nope</span> ·{" "}
              <span style={{ color: "var(--accent-super)" }}>Super Neigh</span> ·{" "}
              <span style={{ color: "var(--green-300)" }}>Like</span>
            </div>
          </>
        )}
      </div>

      {/* Right GIF rail (renders only when GIFs are supplied) */}
      {rightGifs.length > 0 && (
        <aside className="trotr-sidegif">
          {rightGifs.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </aside>
      )}

      {matched && (
        <MatchModal
          horse={matched}
          onSendMessage={() => onMatch(matched)}
          onKeepSwiping={() => setMatched(null)}
        />
      )}
    </div>
  );
}
