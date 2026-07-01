import type { CSSProperties, ReactNode } from "react";
import { Button, IconButton, Badge } from "../components/ui";
import Icon from "../components/Icon";
import type { IconName } from "../components/Icon";
import ProfileCard from "../components/ProfileCard";
import { horses } from "../data/horses";

interface Props {
  onStart: () => void;
}

const bold = "var(--fw-bold)" as CSSProperties["fontWeight"];

function Feature({
  icon,
  color,
  title,
  children,
}: {
  icon: IconName;
  color: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="trotr-glass"
      style={{ borderRadius: "var(--radius-lg)", padding: "var(--space-5)", boxShadow: "var(--shadow-md)" }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(148,163,184,0.1)",
          border: "1px solid var(--border-hairline)",
          color,
        }}
      >
        <Icon name={icon} size={22} strokeWidth={2.2} />
      </div>
      <h3
        style={{
          margin: "14px 0 6px",
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-h3)",
          fontWeight: bold,
          color: "var(--text-strong)",
          letterSpacing: "var(--ls-snug)",
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: "var(--fs-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)" }}>
        {children}
      </p>
    </div>
  );
}

/**
 * HeroView — the Trotr marketing homepage. A full-width, responsive landing
 * with a nav bar, two-column hero (copy + phone mockup), a feature strip and
 * a footer. The primary CTA drops the visitor into the swipe dashboard.
 */
export default function HeroView({ onStart }: Props) {
  const showcase = horses[0];

  return (
    <div
      className="trotr-landing trotr-canvas"
      style={{
        background:
          "radial-gradient(60% 45% at 10% -5%, rgba(255,45,120,0.16), rgba(6,10,21,0) 55%)," +
          "radial-gradient(55% 45% at 95% 15%, rgba(245,181,36,0.10), rgba(6,10,21,0) 55%)," +
          "radial-gradient(70% 60% at 85% 105%, rgba(255,122,24,0.16), rgba(6,10,21,0) 55%)," +
          "var(--bg-app)",
      }}
    >
      {/* Nav */}
      <nav className="trotr-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/brand/trotr-mark.svg" alt="" width={30} height={30} />
          <span
            className="trotr-gradient-text"
            style={{ fontFamily: "var(--font-display)", fontWeight: bold, fontSize: 24, letterSpacing: "var(--ls-tight)" }}
          >
            Trotr
          </span>
        </div>
        <div className="trotr-nav-links" style={{ alignItems: "center", gap: 28 }}>
          {["Discover", "Neigh-Premium", "Stories", "About"].map((l) => (
            <span key={l} style={{ fontSize: "var(--fs-sm)", fontWeight: 600, color: "var(--text-muted)", cursor: "pointer" }}>
              {l}
            </span>
          ))}
        </div>
        <Button onClick={onStart} size="sm" iconRight="chevronRight">
          Start Swiping
        </Button>
      </nav>

      {/* Hero */}
      <header className="trotr-shell">
        <div className="trotr-hero-grid">
          {/* Copy */}
          <div>
            <span style={{ display: "inline-flex" }}>
              <Badge tone="neon" icon="sparkles">
                Where stable relationships begin
              </Badge>
            </span>
            <h1
              className="trotr-display-title"
              style={{
                margin: "18px 0 0",
                fontFamily: "var(--font-display)",
                lineHeight: 1.02,
                fontWeight: bold,
                letterSpacing: "var(--ls-tight)",
                color: "var(--text-strong)",
              }}
            >
              Find your <span className="trotr-gradient-text">mane</span> match.
            </h1>
            <p
              style={{
                margin: "20px 0 0",
                maxWidth: 480,
                fontSize: "var(--fs-h3)",
                lineHeight: "var(--lh-relaxed)",
                color: "var(--text-muted)",
              }}
            >
              Swipe through eligible stallions and mares in nearby barns, match
              with your soul-mare, and gallop off into a stable relationship. No
              riders, no drama, no low-grade oats.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <Button onClick={onStart} size="lg" iconRight="flame">
                Start Swiping
              </Button>
              <Button onClick={onStart} size="lg" variant="secondary" iconLeft="heart">
                See who trotted by
              </Button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="shieldCheck" size={17} style={{ color: "var(--emerald-400)" }} />
                <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-body)" }}>
                  <strong style={{ color: "var(--text-strong)" }}>14,000+</strong> verified studs &amp; mares
                </span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="star" size={17} style={{ color: "var(--gold-400)" }} />
                <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-body)" }}>
                  <strong style={{ color: "var(--text-strong)" }}>4.9</strong> in the Hay App Store
                </span>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="trotr-hero-visual">
            <div
              style={{
                position: "relative",
                width: 320,
                maxWidth: "100%",
                padding: 12,
                borderRadius: 44,
                background: "linear-gradient(160deg, #12151f, #04060d)",
                boxShadow: "var(--shadow-phone), 0 0 110px -26px var(--glow-pink)",
              }}
            >
              <div
                className="trotr-canvas"
                style={{ borderRadius: 34, overflow: "hidden", padding: "14px 14px 18px" }}
              >
                <ProfileCard horse={showcase} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 14,
                    marginTop: 16,
                  }}
                >
                  <IconButton icon="x" tone="nope" size="sm" label="Nope" onClick={onStart} />
                  <IconButton icon="zap" tone="super" size="sm" label="Super Neigh" onClick={onStart} />
                  <IconButton icon="heart" tone="love" size="sm" label="Like" onClick={onStart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature strip */}
      <section className="trotr-shell">
        <div className="trotr-features">
          <Feature icon="shieldCheck" color="var(--emerald-400)" title="Verified studs">
            Every profile is barn-checked and hoof-manicured. Swipe with
            confidence — no catfish, only thoroughbreds.
          </Feature>
          <Feature icon="zap" color="var(--accent-super)" title="Super Neigh">
            Out of subtlety? Send a Super Neigh and let them hear it across
            three paddocks. *NEIGHHH!*
          </Feature>
          <Feature icon="crown" color="var(--gold-400)" title="Neigh-Premium">
            Unlimited neighs, see who trotted your way, and a complimentary
            First-Date Hay-Champagne on us.
          </Feature>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-subtle)",
          marginTop: 8,
        }}
      >
        <div
          className="trotr-shell"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 20px 32px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--text-faint)" }}>
            © 2026 Trotr · No horsing around
          </span>
          <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-faint)" }}>
            Made with 🌾 for horses everywhere
          </span>
        </div>
      </footer>
    </div>
  );
}
