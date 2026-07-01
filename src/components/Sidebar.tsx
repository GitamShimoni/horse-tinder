import { useState } from "react";
import type { CSSProperties } from "react";
import Icon from "./Icon";
import type { IconName } from "./Icon";
import { Avatar, Badge } from "./ui";

interface NavDef {
  id: string;
  icon: IconName;
  label: string;
  count?: number;
}

interface Props {
  active: string;
  onNavigate: (id: string) => void;
  onHome: () => void;
  matchCount: number;
}

function NavItem({
  def,
  active,
  onClick,
}: {
  def: NavDef;
  active: boolean;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "10px 12px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body)",
        fontWeight: "var(--fw-semibold)" as CSSProperties["fontWeight"],
        color: active ? "var(--text-strong)" : "var(--text-muted)",
        background: active
          ? "var(--grad-dating-soft)"
          : hover
            ? "rgba(148,163,184,0.08)"
            : "transparent",
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
      }}
    >
      {active && (
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            bottom: 8,
            width: 3,
            borderRadius: 999,
            background: "var(--grad-dating)",
          }}
        />
      )}
      <Icon
        name={def.icon}
        size={19}
        style={{ color: active ? "var(--neon-pink)" : "currentColor" }}
      />
      <span style={{ flex: 1 }}>{def.label}</span>
      {def.count != null && def.count > 0 && (
        <Badge tone={active ? "neon" : "neutral"}>{def.count}</Badge>
      )}
    </button>
  );
}

/**
 * Sidebar — desktop barn sidebar: brand lockup (click = home), primary
 * nav, the Neigh-Premium upsell, and a profile chip. Hidden under 1024px.
 */
export default function Sidebar({ active, onNavigate, onHome, matchCount }: Props) {
  const nav: NavDef[] = [
    { id: "discover", icon: "flame", label: "Discover" },
    { id: "matches", icon: "heart", label: "Matches", count: matchCount },
    { id: "messages", icon: "messageCircle", label: "Messages", count: 2 },
    { id: "shop", icon: "crown", label: "Neigh-Premium" },
    { id: "profile", icon: "users", label: "My Profile" },
    { id: "settings", icon: "settings", label: "Barn Settings" },
  ];

  return (
    <aside
      className="trotr-sidebar"
      style={{
        flexDirection: "column",
        height: "100%",
        padding: "var(--space-5)",
        gap: "var(--space-5)",
        borderRight: "1px solid var(--border-subtle)",
        background: "linear-gradient(180deg, rgba(15,23,42,0.5), rgba(6,10,21,0.2))",
      }}
    >
      {/* Brand */}
      <button
        onClick={onHome}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "4px 6px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src="/brand/trotr-mark.svg" alt="" width={32} height={32} />
        <span
          className="trotr-gradient-text"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 25,
            fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
            letterSpacing: "var(--ls-tight)",
          }}
        >
          Trotr
        </span>
      </button>

      {/* Nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {nav.map((n) => (
          <NavItem key={n.id} def={n} active={active === n.id} onClick={() => onNavigate(n.id)} />
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      {/* Premium upsell */}
      <div
        style={{
          position: "relative",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-4)",
          background: "var(--grad-gold)",
          color: "var(--text-on-gold)",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(245,181,36,0.28)",
        }}
      >
        <Icon name="crown" size={22} strokeWidth={2.4} />
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
            fontSize: 16,
            marginTop: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Go Neigh-Premium
        </div>
        <p style={{ margin: "4px 0 12px", fontSize: 12, lineHeight: 1.45, opacity: 0.82 }}>
          Unlimited neighs, see who trotted your way, and one free Hay-Champagne.
        </p>
        <div
          style={{
            width: "100%",
            padding: "9px",
            borderRadius: "var(--radius-pill)",
            textAlign: "center",
            background: "#2a1c02",
            color: "var(--gold-400)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Upgrade — $12/mo
        </div>
      </div>

      {/* Profile chip */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 4px" }}>
        <Avatar emoji="🐴" size="md" ring="neon" online />
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              color: "var(--text-strong)",
              fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
              fontSize: 14,
            }}
          >
            Mr. Ed
          </div>
          <div style={{ color: "var(--text-faint)", fontSize: 12 }}>Barn 12 · Free plan</div>
        </div>
      </div>
    </aside>
  );
}
