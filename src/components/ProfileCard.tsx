import { useState } from "react";
import type { CSSProperties } from "react";
import type { Horse } from "../types";
import Icon from "./Icon";
import { Badge, Tag } from "./ui";

interface Props {
  horse: Horse;
  style?: CSSProperties;
}

/**
 * ProfileCard — the horse dating card. Full-bleed hero (photo with an
 * emoji/neon-wash fallback), protection gradient, name/age + horse-years,
 * distance, verified badge, trait tags and an italic bio.
 */
export default function ProfileCard({ horse, style }: Props) {
  const [failed, setFailed] = useState(false);
  const showPhoto = !failed && !!horse.imageUrl;

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--surface-solid)",
        border: "1px solid var(--border-hairline)",
        boxShadow: "var(--shadow-lg)",
        ...style,
      }}
    >
      {/* Hero */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(130% 100% at 50% 15%, rgba(255,45,120,0.35), rgba(255,122,24,0.16) 45%, rgba(11,17,32,0.9) 80%)",
          fontSize: 128,
        }}
      >
        {showPhoto ? (
          <img
            src={horse.imageUrl}
            alt={horse.name}
            draggable={false}
            onError={() => setFailed(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span style={{ filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.5))" }}>
            {horse.emoji}
          </span>
        )}

        {/* top-right verified */}
        {horse.verified && (
          <span style={{ position: "absolute", top: 14, right: 14, zIndex: 2 }}>
            <Badge tone="emerald" icon="shieldCheck">
              Verified Stud
            </Badge>
          </span>
        )}

        {/* protection gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(6,10,21,0.96) 4%, rgba(6,10,21,0.55) 32%, rgba(6,10,21,0) 60%)",
          }}
        />

        {/* name block */}
        <div
          style={{
            position: "absolute",
            left: 18,
            right: 18,
            bottom: 16,
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-h1)",
                fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
                color: "var(--white)",
                letterSpacing: "var(--ls-tight)",
                lineHeight: 1,
              }}
            >
              {horse.name}
              <span
                style={{
                  fontWeight:
                    "var(--fw-regular)" as CSSProperties["fontWeight"],
                  color: "var(--slate-200)",
                }}
              >
                {" "}
                {horse.age}
              </span>
            </h3>
            <span
              style={{
                fontSize: "var(--fs-sm)",
                color: "var(--slate-300)",
                fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
              }}
            >
              ({horse.horseAge} in horse years)
            </span>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              marginTop: 7,
              color: "var(--slate-300)",
              fontSize: "var(--fs-sm)",
              fontWeight: "var(--fw-medium)" as CSSProperties["fontWeight"],
            }}
          >
            <Icon
              name="mapPin"
              size={14}
              style={{ color: "var(--neon-orange)" }}
            />
            {horse.distance}
            <span style={{ color: "var(--slate-400)" }}>
              · {horse.location}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "var(--space-4)" }}>
        {horse.tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: "var(--space-4)",
            }}
          >
            {horse.tags.map((tg, i) => (
              <Tag key={i} emoji={tg.emoji}>
                {tg.label}
              </Tag>
            ))}
          </div>
        )}
        <p
          style={{
            margin: 0,
            fontSize: "var(--fs-body)",
            color: "var(--text-body)",
            lineHeight: "var(--lh-relaxed)",
            fontStyle: "italic",
          }}
        >
          “{horse.bio}”
        </p>
      </div>
    </div>
  );
}
