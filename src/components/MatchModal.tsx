import type { Horse } from "../types";
import HorseImage from "./HorseImage";

interface Props {
  horse: Horse;
  onSendMessage: () => void;
  onKeepSwiping: () => void;
}

export default function MatchModal({ horse, onSendMessage, onKeepSwiping }: Props) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-gradient-to-br from-rose-500/95 to-pink-600/95 px-8 text-center text-white backdrop-blur-sm">
      <div className="animate-pop">
        <h2 className="text-4xl font-extrabold drop-shadow-md">It's a Match!</h2>
        <p className="mt-1 text-2xl">🐴 ❤️ 🐴</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <div className="flex h-full w-full items-center justify-center bg-white text-5xl">
              🧑‍🌾
            </div>
          </div>
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <HorseImage horse={horse} className="rounded-full" />
          </div>
        </div>

        <p className="mt-6 text-lg font-medium">
          You and <span className="font-bold">{horse.name}</span> liked each other.
        </p>

        <button
          onClick={onSendMessage}
          className="mt-8 w-full max-w-xs rounded-full bg-white px-8 py-3.5 text-lg font-bold text-rose-600 shadow-xl transition-transform active:scale-95 hover:bg-rose-50"
        >
          Send a Message 💬
        </button>
        <button
          onClick={onKeepSwiping}
          className="mt-3 w-full max-w-xs rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition-colors active:scale-95 hover:bg-white/10"
        >
          Keep Swiping
        </button>
      </div>
    </div>
  );
}
