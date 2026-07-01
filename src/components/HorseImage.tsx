import { useState } from "react";
import type { Horse } from "../types";

interface Props {
  horse: Horse;
  className?: string;
}

/**
 * Renders the horse photo with a graceful fallback: if the remote image
 * fails to load, we show a gradient + emoji instead of a broken image.
 * This keeps the demo bulletproof even on flaky networks or dead URLs.
 */
export default function HorseImage({ horse, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-rose-300 via-pink-300 to-amber-200 ${className}`}
      >
        <span className="text-[7rem] drop-shadow-lg" role="img" aria-label="horse">
          🐴
        </span>
      </div>
    );
  }

  return (
    <img
      src={horse.imageUrl}
      alt={horse.name}
      draggable={false}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
