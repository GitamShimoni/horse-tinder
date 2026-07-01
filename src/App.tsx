import { useState } from "react";
import type { Horse, View } from "./types";
import HeroView from "./views/HeroView";
import SwipeView from "./views/SwipeView";
import ChatView from "./views/ChatView";

export default function App() {
  const [view, setView] = useState<View>("hero");
  const [match, setMatch] = useState<Horse | null>(null);

  const goToChat = (horse: Horse) => {
    setMatch(horse);
    setView("chat");
  };

  return (
    // Phone-style frame, centered on larger screens.
    <div className="flex h-full w-full items-center justify-center bg-neutral-900 font-sans">
      <div className="relative h-full w-full overflow-hidden bg-white sm:h-[92vh] sm:max-h-[900px] sm:w-[420px] sm:rounded-[2.5rem] sm:shadow-2xl sm:ring-8 sm:ring-black/80">
        {view === "hero" && <HeroView onStart={() => setView("swipe")} />}
        {view === "swipe" && <SwipeView onMatch={goToChat} />}
        {view === "chat" && match && (
          <ChatView horse={match} onBack={() => setView("swipe")} />
        )}
      </div>
    </div>
  );
}
