import { useState } from "react";
import type { Horse, View } from "./types";
import HeroView from "./views/HeroView";
import SwipeView from "./views/SwipeView";
import ChatView from "./views/ChatView";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [view, setView] = useState<View>("hero");
  const [match, setMatch] = useState<Horse | null>(null);
  const [matches, setMatches] = useState(7);

  const goToChat = (horse: Horse) => {
    setMatch(horse);
    setMatches((m) => m + 1);
    setView("chat");
  };

  // Landing page is a standalone full-width homepage.
  if (view === "hero") {
    return <HeroView onStart={() => setView("swipe")} />;
  }

  // Sidebar nav — mostly cosmetic, but Discover/Messages route the phone.
  const onNavigate = (id: string) => {
    if (id === "discover") setView("swipe");
    else if ((id === "messages" || id === "matches") && match) setView("chat");
  };

  return (
    <Dashboard
      activeNav={view === "chat" ? "messages" : "discover"}
      matchCount={matches}
      greeting="Good evening 🌙"
      onHome={() => setView("hero")}
      onNavigate={onNavigate}
    >
      {view === "swipe" && <SwipeView onMatch={goToChat} />}
      {view === "chat" && match && (
        <ChatView horse={match} onBack={() => setView("swipe")} />
      )}
    </Dashboard>
  );
}
