import { useState } from "react";
import type { Horse, View } from "./types";
import HeroView from "./views/HeroView";
import RegisterView from "./views/RegisterView";
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
    return <HeroView onStart={() => setView("register")} />;
  }

  if (view === "register") {
    return <RegisterView onComplete={() => setView("swipe")} onBack={() => setView("hero")} />;
  }

  if (view === "chat" && match) {
    return <ChatView horse={match} onBack={() => setView("swipe")} />;
  }

  return <SwipeView onMatch={goToChat} onHome={() => setView("hero")} />;
}
