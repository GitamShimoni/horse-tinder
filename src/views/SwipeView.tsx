import { createRef, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { horses } from "../data/horses";
import type { Horse } from "../types";
import HorseImage from "../components/HorseImage";
import MatchModal from "../components/MatchModal";

type Direction = "left" | "right" | "up" | "down";

// Structural type for react-tinder-card's imperative ref handle.
// Declared locally so we don't depend on the library's exported type name.
interface TinderCardApi {
  swipe: (dir?: Direction) => Promise<void>;
  restoreCard: () => Promise<void>;
}

// Show a match modal on the Nth "like". README: trigger on the 3rd Like.
const MATCH_ON_LIKE = 3;

interface Props {
  onMatch: (horse: Horse) => void;
}

export default function SwipeView({ onMatch }: Props) {
  const [currentIndex, setCurrentIndex] = useState(horses.length - 1);
  const [matched, setMatched] = useState<Horse | null>(null);

  // Refs mirror state so async swipe callbacks read fresh values.
  const currentIndexRef = useRef(currentIndex);
  const likeCountRef = useRef(0);

  const childRefs = useMemo(
    () => horses.map(() => createRef<TinderCardApi>()),
    [],
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const swiped = (direction: Direction, index: number) => {
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      likeCountRef.current += 1;
      if (likeCountRef.current === MATCH_ON_LIKE) {
        setMatched(horses[index]);
      }
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
    <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-rose-50 to-pink-100">
      {/* Header */}
      <header className="flex items-center justify-center py-4">
        <span className="text-2xl font-extrabold text-rose-500">🐎 Neigh-ber</span>
      </header>

      {/* Card stack */}
      <div className="relative flex flex-1 items-center justify-center px-6">
        <div className="relative h-[65vh] max-h-[560px] w-full max-w-sm">
          {currentIndex < 0 && (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-white/70 text-center shadow-inner">
              <span className="text-6xl">🐴</span>
              <p className="mt-4 px-8 text-lg font-semibold text-gray-600">
                You've met every horse in the stable!
              </p>
              <button
                onClick={restart}
                className="mt-6 rounded-full bg-rose-500 px-6 py-3 font-bold text-white shadow-lg transition-transform active:scale-95 hover:bg-rose-600"
              >
                Start over
              </button>
            </div>
          )}

          {horses.map((horse, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe absolute inset-0"
              key={horse.id}
              onSwipe={(dir) => swiped(dir as Direction, index)}
              onCardLeftScreen={() => outOfFrame(index)}
              preventSwipe={["up", "down"]}
            >
              <div className="h-full w-full select-none overflow-hidden rounded-3xl bg-white shadow-2xl">
                <div className="relative h-full w-full">
                  <HorseImage horse={horse} />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16 text-white">
                    <h2 className="text-3xl font-extrabold drop-shadow">
                      {horse.name}
                      <span className="ml-2 text-2xl font-medium">{horse.age}</span>
                    </h2>
                    <p className="mt-1 text-sm text-white/90">{horse.bio}</p>
                  </div>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-center gap-8 py-6">
        <button
          onClick={() => swipe("left")}
          disabled={!canSwipe}
          aria-label="Nope"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-lg transition-transform active:scale-90 disabled:opacity-40"
        >
          ❌
        </button>
        <button
          onClick={() => swipe("right")}
          disabled={!canSwipe}
          aria-label="Like"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-lg transition-transform active:scale-90 disabled:opacity-40"
        >
          💚
        </button>
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
