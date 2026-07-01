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

  if (view === "hero") {
    return <HeroView onStart={() => setView("swipe")} />;
  }

  if (view === "chat" && match) {
    return <ChatView horse={match} onBack={() => setView("swipe")} />;
  }

  return <SwipeView onMatch={goToChat} onHome={() => setView("hero")} />;
}
