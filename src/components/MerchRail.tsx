import type { CSSProperties } from "react";
import Icon from "./Icon";
import { Badge } from "./ui";
import { products, priceColor } from "../data/products";

/**
 * MerchRail — desktop right-hand Neigh-Premium rail. Display-only: the
 * product cards render for branding/layout but are inert (no buy flow).
 * A "Coming soon" note makes the non-functional state explicit. Hidden
 * under 1024px.
 */
export default function MerchRail() {
  const bold = "var(--fw-bold)" as CSSProperties["fontWeight"];
  return (
    <aside
      className="trotr-rail"
      style={{
        flexDirection: "column",
        height: "100%",
        padding: "var(--space-5)",
        gap: "var(--space-4)",
        borderLeft: "1px solid var(--border-subtle)",
        background: "linear-gradient(180deg, rgba(15,23,42,0.5), rgba(6,10,21,0.2))",
        overflowY: "auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="store" size={18} style={{ color: "var(--gold-400)" }} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: bold,
              fontSize: 17,
              color: "var(--text-strong)",
              letterSpacing: "var(--ls-tight)",
            }}
          >
            Neigh-Premium
          </span>
        </div>
        <Badge tone="gold" icon="crown">
          Soon
        </Badge>
      </div>

      <div
        aria-hidden="true"
        style={{
          display: "grid",
          gap: 12,
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0.7,
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              borderRadius: "var(--radius-lg)",
              padding: 14,
              background: "var(--surface-card)",
              border: "1px solid var(--border-hairline)",
              backdropFilter: "blur(var(--glass-blur))",
              WebkitBackdropFilter: "blur(var(--glass-blur))",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  background: "rgba(148,163,184,0.1)",
                }}
              >
                {p.emoji}
              </div>
              <Badge tone={p.tone}>{p.badge}</Badge>
            </div>
            <div
              style={{
                marginTop: 10,
                color: "var(--text-strong)",
                fontWeight: bold,
                fontSize: 14,
                lineHeight: 1.25,
              }}
            >
              {p.name}
            </div>
            <p style={{ margin: "6px 0 10px", fontSize: 12, lineHeight: 1.45, color: "var(--text-muted)" }}>
              {p.blurb}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: priceColor[p.tone],
                }}
              >
                {p.price}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: bold,
                  color: "var(--text-faint)",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid var(--border-hairline)",
                }}
              >
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, lineHeight: 1.5, color: "var(--text-faint)", textAlign: "center" }}>
        Shop is a preview — checkout opens after the next hay delivery. 🌾
      </p>
    </aside>
  );
}
