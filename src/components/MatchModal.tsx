import type { CSSProperties } from "react";
import type { Horse } from "../types";
import { Avatar, Button } from "./ui";
import Icon from "./Icon";
import { SparkleBurst } from "./Sparkles";

interface Props {
  horse: Horse;
  onSendMessage: () => void;
  onKeepSwiping: () => void;
}

/**
 * MatchModal — the celebratory "It's a Match!" moment, styled as the
 * design system's MatchToast: neon gradient border-glow, two overlapping
 * avatars, gradient headline, then the send/keep-swiping actions.
 */
export default function MatchModal({ horse, onSendMessage, onKeepSwiping }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        background: "rgba(6,10,21,0.72)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <div
        role="status"
        style={{
          position: "relative",
          width: 340,
          maxWidth: "90%",
          padding: 2,
          borderRadius: "var(--radius-xl)",
          background: "var(--grad-dating)",
          boxShadow: "0 24px 70px rgba(255,45,120,0.4), 0 0 0 1px rgba(255,45,120,0.3)",
          animation: "trotr-pulse-glow 2.6s var(--ease-out) infinite, trotr-pop 0.3s var(--ease-spring)",
        }}
      >
        <SparkleBurst />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            borderRadius: "calc(var(--radius-xl) - 2px)",
            background: "var(--surface-glass-strong)",
            backdropFilter: "blur(var(--glass-blur-strong))",
            WebkitBackdropFilter: "blur(var(--glass-blur-strong))",
            padding: "var(--space-6) var(--space-5) var(--space-5)",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "var(--space-4)" }}>
            <div style={{ marginRight: -14, transform: "rotate(-8deg)" }}>
              <Avatar emoji="🧑‍🌾" size="xl" ring="neon" />
            </div>
            <div style={{ marginLeft: -14, transform: "rotate(8deg)" }}>
              <Avatar emoji={horse.emoji} src={horse.imageUrl} size="xl" ring="neon" />
            </div>
          </div>

          <div
            className="trotr-gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h1)",
              fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
              letterSpacing: "var(--ls-tight)",
              lineHeight: 1.05,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Icon name="sparkles" size={26} style={{ color: "var(--neon-orange)" }} />
            It&apos;s a Match!
          </div>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: "var(--fs-body)",
              color: "var(--text-body)",
              lineHeight: "var(--lh-normal)",
            }}
          >
            You and <strong style={{ color: "var(--text-strong)" }}>{horse.name}</strong> both swore
            the oath: horse before hoes, forever. A barn-wedding simulation is now booking your stable…
          </p>

          <div style={{ marginTop: "var(--space-5)", display: "grid", gap: 10 }}>
            <Button onClick={onSendMessage} block iconLeft="messageCircle">
              Send a Message
            </Button>
            <Button onClick={onKeepSwiping} variant="ghost" block>
              Keep Swiping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
