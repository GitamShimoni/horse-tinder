import { createRef, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import TinderCard from "react-tinder-card";
import { horses } from "../data/horses";
import type { Horse } from "../types";
import ProfileCard from "../components/ProfileCard";
import MatchModal from "../components/MatchModal";
import ShopSkeleton from "../components/ShopSkeleton";
import Icon from "../components/Icon";
import { IconButton, Tabs, Button } from "../components/ui";

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
}

export default function SwipeView({ onMatch }: Props) {
  const [tab, setTab] = useState("feed");
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

  return (
    <div
      className="trotr-canvas"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px 4px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/brand/trotr-mark.svg" alt="" width={24} height={24} />
          <span
            className="trotr-gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
              fontSize: 20,
              letterSpacing: "var(--ls-tight)",
            }}
          >
            Trotr
          </span>
        </div>
        <div style={{ display: "flex", gap: 14, color: "var(--text-muted)" }}>
          <Icon name="bell" size={19} />
          <Icon name="settings" size={19} />
        </div>
      </header>

      {/* Tabs — Shop is a non-functional skeleton */}
      <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 10px" }}>
        <Tabs
          value={tab}
          onChange={setTab}
          items={[
            { id: "feed", label: "Dating", icon: "flame" },
            { id: "shop", label: "Shop", icon: "store" },
          ]}
        />
      </div>

      {tab === "shop" ? (
        <ShopSkeleton />
      ) : (
        <>
          {/* Card deck */}
          <div
            style={{
              position: "relative",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px 18px 0",
              minHeight: 0,
            }}
          >
            {currentIndex < 0 ? (
              <div
                className="trotr-glass"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: 360,
                  padding: "48px 28px",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                <span style={{ fontSize: 52 }}>🌾</span>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-strong)",
                    fontSize: 18,
                    marginTop: 12,
                  }}
                >
                  You&apos;ve trotted through everyone
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6, color: "var(--text-muted)" }}>
                  Check back after the next hay delivery for fresh stallions &amp; mares.
                </p>
                <Button onClick={restart} iconLeft="rotateCcw" style={{ marginTop: 20 }}>
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
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 18px",
                    }}
                  >
                    <ProfileCard horse={horse} style={{ width: "100%", maxWidth: 360 }} />
                  </div>
                </TinderCard>
              ))
            )}

            {/* Super Neigh flash */}
            {superFlash && (
              <div
                style={{
                  position: "absolute",
                  top: "38%",
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
                  gap: 16,
                  padding: "14px 0 4px",
                }}
              >
                <IconButton
                  icon="x"
                  tone="nope"
                  size="lg"
                  label="Nope"
                  disabled={!canSwipe}
                  onClick={() => swipe("left")}
                />
                <IconButton
                  icon="zap"
                  tone="super"
                  label="Super Neigh"
                  disabled={!canSwipe}
                  onClick={() => swipe("up")}
                />
                <IconButton
                  icon="heart"
                  tone="love"
                  size="lg"
                  label="Like"
                  disabled={!canSwipe}
                  onClick={() => swipe("right")}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "6px 0 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-faint)",
                }}
              >
                Nope · Super Neigh · Like
              </div>
            </>
          )}
        </>
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
