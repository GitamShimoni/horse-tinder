import { createRef, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import TinderCard from "react-tinder-card";
import { horses } from "../data/horses";
import type { Horse } from "../types";
import ProfileCard from "../components/ProfileCard";
import MatchModal from "../components/MatchModal";
import Icon from "../components/Icon";
import { IconButton, Button } from "../components/ui";

type Direction = "left" | "right" | "up" | "down";

// Structural type for react-tinder-card's imperative ref handle.
interface TinderCardApi {
  swipe: (dir?: Direction) => Promise<void>;
  restoreCard: () => Promise<void>;
}

// Show a match toast on the Nth "like" (right or super). Trigger on the 3rd.
const MATCH_ON_LIKE = 3;

interface Props {
  onMatch: (horse: Horse) => void;
  onHome: () => void;
}

export default function SwipeView({ onMatch, onHome }: Props) {
  const [currentIndex, setCurrentIndex] = useState(horses.length - 1);
  const [matched, setMatched] = useState<Horse | null>(null);
  const [superFlash, setSuperFlash] = useState(false);

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
      await childRefs[currentIndex].current?.swipe(dir);
    }
  };

  const restart = () => {
    likeCountRef.current = 0;
    setMatched(null);
    updateCurrentIndex(horses.length - 1);
    childRefs.forEach((ref) => ref.current?.restoreCard());
  };

  const bold = "var(--fw-bold)" as CSSProperties["fontWeight"];

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
        }}
      >
        <img src="/brand/trotr-mark.svg" alt="" width={22} height={22} />
        <span
          className="trotr-gradient-text"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: bold,
            fontSize: 19,
            letterSpacing: "var(--ls-tight)",
          }}
        >
          Trotr
        </span>
      </button>

      {/* Centered play column */}
      <div className="trotr-play-col">
        <div className="trotr-deck">
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
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-strong)",
                  fontSize: 20,
                  marginTop: 14,
                }}
              >
                You&apos;ve trotted through everyone
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, marginTop: 8, color: "var(--text-muted)", maxWidth: 260 }}>
                Check back after the next hay delivery for fresh stallions &amp; mares.
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
                preventSwipe={["down"]}
              >
                <ProfileCard horse={horse} fill style={{ width: "100%", height: "100%" }} />
              </TinderCard>
            ))
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
                zIndex: 20,
              }}
            >
              *NEIGHHH!*
            </div>
          )}
        </div>

        {/* Action row */}
        {currentIndex >= 0 && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                marginTop: 22,
              }}
            >
              <IconButton icon="x" tone="nope" size="lg" label="Nope" disabled={!canSwipe} onClick={() => swipe("left")} />
              <IconButton icon="zap" tone="super" label="Super Neigh" disabled={!canSwipe} onClick={() => swipe("up")} />
              <IconButton icon="heart" tone="love" size="lg" label="Like" disabled={!canSwipe} onClick={() => swipe("right")} />
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
              <Icon name="chevronLeft" size={12} /> Nope · Super Neigh · Like <Icon name="chevronRight" size={12} />
            </div>
          </>
        )}
      </div>

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
