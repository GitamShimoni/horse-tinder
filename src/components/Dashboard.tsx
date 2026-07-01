import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MerchRail from "./MerchRail";

interface Props {
  children: ReactNode;
  activeNav: string;
  matchCount: number;
  onHome: () => void;
  onNavigate: (id: string) => void;
}

/**
 * Dashboard — desktop shell around the app: left barn Sidebar, the current
 * screen in a centered full-height content column, and the right
 * Neigh-Premium MerchRail. No phone mockup — the feed sits directly on the
 * canvas like a real web app. Sidebar/rail collapse under 1024px so the app
 * column goes full-bleed on mobile (see index.css).
 */
export default function Dashboard({
  children,
  activeNav,
  matchCount,
  onHome,
  onNavigate,
}: Props) {
  return (
    <div
      className="trotr-dashboard"
      style={{
        background:
          "radial-gradient(60% 80% at 15% 0%, rgba(255,45,120,0.16), rgba(6,10,21,0) 60%)," +
          "radial-gradient(55% 75% at 90% 100%, rgba(255,122,24,0.14), rgba(6,10,21,0) 55%)," +
          "radial-gradient(50% 60% at 85% 5%, rgba(245,181,36,0.1), rgba(6,10,21,0) 55%)," +
          "var(--slate-950)",
      }}
    >
      <Sidebar
        active={activeNav}
        matchCount={matchCount}
        onHome={onHome}
        onNavigate={onNavigate}
      />

      <main className="trotr-stage">
        <div className="trotr-app-screen">{children}</div>
      </main>

      <MerchRail />
    </div>
  );
}
