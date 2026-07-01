import type { CSSProperties } from "react";
import { Badge } from "./ui";
import { products, priceColor } from "../data/products";

/**
 * ShopSkeleton — the Neigh-Premium marketplace inside the phone's Shop
 * tab, rendered as a static, NON-FUNCTIONAL UI skeleton. Product rows are
 * shown for layout/branding but the whole panel is inert (pointer-events
 * disabled) behind a "Coming soon" overlay. No buy actions are wired up.
 */
export default function ShopSkeleton() {
  return (
    <div style={{ position: "relative", flex: 1, overflow: "hidden", minHeight: 0 }}>
      {/* Inert product list (skeleton only — not interactive) */}
      <div
        aria-hidden="true"
        style={{
          padding: "6px 18px 20px",
          display: "grid",
          gap: 10,
          pointerEvents: "none",
          userSelect: "none",
          filter: "saturate(0.85)",
          opacity: 0.55,
        }}
      >
        <div className="trotr-eyebrow" style={{ padding: "2px 2px 4px" }}>
          Neigh-Premium
        </div>
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: 10,
              borderRadius: "var(--radius-md)",
              background: "var(--surface-card)",
              border: "1px solid var(--border-hairline)",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                flexShrink: 0,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                background: "rgba(148,163,184,0.1)",
              }}
            >
              {p.emoji}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    color: "var(--text-strong)",
                    fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
                    fontSize: 13,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </span>
                <Badge tone={p.tone}>{p.badge}</Badge>
              </div>
              <div
                style={{
                  color: "var(--text-faint)",
                  fontSize: 11,
                  marginTop: 3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {p.blurb}
              </div>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 14,
                color: priceColor[p.tone],
              }}
            >
              {p.price}
            </span>
          </div>
        ))}
      </div>

      {/* Coming-soon overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 32px",
          background:
            "radial-gradient(80% 60% at 50% 45%, rgba(6,10,21,0.55), rgba(6,10,21,0.85))",
        }}
      >
        <span style={{ fontSize: 46 }}>🛍️</span>
        <div style={{ marginTop: 14 }}>
          <Badge tone="gold" icon="crown">
            Coming Soon
          </Badge>
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-strong)",
            fontSize: 20,
            marginTop: 14,
            letterSpacing: "var(--ls-tight)",
          }}
        >
          The Neigh-Premium Shop
        </div>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.55,
            marginTop: 8,
            color: "var(--text-muted)",
            maxWidth: 280,
          }}
        >
          Luxury merch for the modern steed is being stabled. Check back after
          the next hay delivery.
        </p>
      </div>
    </div>
  );
}
