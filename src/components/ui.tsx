import { useState } from "react";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import Icon from "./Icon";
import type { IconName } from "./Icon";

/* ============================================================
   Trotr shared primitives — typed ports of the design system's
   Tag, Badge, Avatar, IconButton, Tabs and Button components.
   ============================================================ */

/* -------------------------------- Tag -------------------------------- */

interface TagProps {
  children: ReactNode;
  emoji?: string;
  style?: CSSProperties;
}

export function Tag({ children, emoji, style }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        background: "rgba(148,163,184,0.1)",
        border: "1px solid var(--border-hairline)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-sm)",
        fontWeight: "var(--fw-semibold)" as CSSProperties["fontWeight"],
        lineHeight: 1.1,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {emoji && <span style={{ fontSize: "1.05em", lineHeight: 1 }}>{emoji}</span>}
      {children}
    </span>
  );
}

/* ------------------------------- Badge ------------------------------- */

export type BadgeTone = "neon" | "gold" | "emerald" | "super" | "neutral";

const BADGE_TONES: Record<
  BadgeTone,
  { bg: string; color: string; border: string; solid?: boolean }
> = {
  neon: { bg: "var(--grad-dating)", color: "#fff", border: "transparent", solid: true },
  gold: { bg: "var(--grad-gold)", color: "var(--text-on-gold)", border: "transparent", solid: true },
  emerald: { bg: "var(--grad-emerald)", color: "#04231a", border: "transparent", solid: true },
  super: { bg: "rgba(56,189,248,0.16)", color: "var(--accent-super)", border: "rgba(56,189,248,0.4)" },
  neutral: { bg: "rgba(148,163,184,0.14)", color: "var(--text-body)", border: "var(--border-hairline)" },
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: IconName;
  style?: CSSProperties;
}

export function Badge({ children, tone = "neutral", icon, style }: BadgeProps) {
  const t = BADGE_TONES[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 10px",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.color,
        border: `1px solid ${t.border}`,
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-xs)",
        fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
        letterSpacing: "var(--ls-wide)",
        textTransform: "uppercase",
        lineHeight: 1,
        whiteSpace: "nowrap",
        boxShadow: t.solid ? "0 4px 14px rgba(0,0,0,0.25)" : "none",
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={12} strokeWidth={2.4} />}
      {children}
    </span>
  );
}

/* ------------------------------ Avatar ------------------------------- */

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarRing = "none" | "neon" | "gold" | "emerald";

const AVATAR_SIZES: Record<AvatarSize, number> = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 };
const AVATAR_RINGS: Record<AvatarRing, string> = {
  none: "transparent",
  neon: "var(--grad-dating)",
  gold: "var(--grad-gold)",
  emerald: "var(--grad-emerald)",
};

interface AvatarProps {
  src?: string;
  emoji?: string;
  initials?: string;
  size?: AvatarSize;
  ring?: AvatarRing;
  online?: boolean;
  style?: CSSProperties;
}

export function Avatar({
  src,
  emoji,
  initials,
  size = "md",
  ring = "none",
  online = false,
  style,
}: AvatarProps) {
  const dim = AVATAR_SIZES[size];
  const ringWidth = ring === "none" ? 0 : Math.max(2, Math.round(dim * 0.045));
  return (
    <div
      style={{
        position: "relative",
        width: dim,
        height: dim,
        borderRadius: "var(--radius-pill)",
        padding: ringWidth,
        background: AVATAR_RINGS[ring],
        display: "inline-flex",
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius-pill)",
          overflow: "hidden",
          background: "var(--surface-solid)",
          border: ring === "none" ? "1px solid var(--border-hairline)" : "2px solid var(--bg-panel)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: dim * 0.5,
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
          color: "var(--text-strong)",
          lineHeight: 1,
        }}
      >
        {src ? (
          <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : emoji ? (
          <span style={{ fontSize: dim * 0.52 }}>{emoji}</span>
        ) : (
          initials
        )}
      </div>
      {online && (
        <span
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: Math.max(8, dim * 0.22),
            height: Math.max(8, dim * 0.22),
            borderRadius: "50%",
            background: "var(--emerald-400)",
            border: "2px solid var(--bg-panel)",
            boxShadow: "0 0 10px var(--glow-emerald)",
          }}
        />
      )}
    </div>
  );
}

/* ---------------------------- IconButton ----------------------------- */

export type IconButtonTone = "nope" | "like" | "love" | "super" | "neutral";
type IconButtonSize = "sm" | "md" | "lg";

const IB_TONES: Record<IconButtonTone, { color: string; ring: string; glow: string; border: string }> = {
  nope: { color: "var(--slate-300)", ring: "rgba(148,163,184,0.4)", glow: "rgba(148,163,184,0.35)", border: "var(--border-strong)" },
  like: { color: "var(--neon-orange)", ring: "rgba(255,122,24,0.55)", glow: "var(--glow-orange)", border: "rgba(255,122,24,0.4)" },
  love: { color: "var(--neon-pink)", ring: "rgba(255,45,120,0.55)", glow: "var(--glow-pink)", border: "rgba(255,45,120,0.4)" },
  super: { color: "var(--accent-super)", ring: "rgba(56,189,248,0.6)", glow: "var(--glow-super)", border: "rgba(56,189,248,0.45)" },
  neutral: { color: "var(--text-body)", ring: "rgba(148,163,184,0.35)", glow: "rgba(148,163,184,0.28)", border: "var(--border-hairline)" },
};

const IB_SIZES: Record<IconButtonSize, number> = { sm: 40, md: 56, lg: 68 };

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  icon: IconName;
  tone?: IconButtonTone;
  size?: IconButtonSize;
  label?: string;
  style?: CSSProperties;
}

export function IconButton({
  icon,
  tone = "neutral",
  size = "md",
  label,
  style,
  disabled,
  ...rest
}: IconButtonProps) {
  const [hovered, setHovered] = useState(false);
  const t = IB_TONES[tone];
  const dim = IB_SIZES[size];
  const active = hovered && !disabled;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: dim,
        height: dim,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        background: active ? "var(--surface-raised)" : "var(--surface-glass-strong)",
        border: `1.5px solid ${active ? t.ring : t.border}`,
        color: t.color,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
        boxShadow: active
          ? `0 0 0 4px ${t.glow.replace(/[\d.]+\)$/, "0.18)")}, 0 10px 30px ${t.glow}`
          : "0 6px 18px rgba(0,0,0,0.4)",
        transform: active ? "translateY(-2px) scale(1.06)" : "scale(1)",
        transition:
          "transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(dim * 0.42)} strokeWidth={2.2} />
    </button>
  );
}

/* ------------------------------- Tabs -------------------------------- */

interface TabItem {
  id: string;
  label: string;
  icon?: IconName;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (id: string) => void;
  style?: CSSProperties;
}

export function Tabs({ items, value, onChange, style }: TabsProps) {
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        gap: 4,
        padding: 4,
        borderRadius: "var(--radius-pill)",
        background: "var(--surface-glass-strong)",
        border: "1px solid var(--border-hairline)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
        ...style,
      }}
    >
      {items.map((it) => {
        const on = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={on}
            disabled={it.disabled}
            onClick={() => !it.disabled && onChange?.(it.id)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 18px",
              borderRadius: "var(--radius-pill)",
              border: "none",
              cursor: it.disabled ? "not-allowed" : "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "var(--fs-sm)",
              fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
              letterSpacing: "var(--ls-snug)",
              whiteSpace: "nowrap",
              opacity: it.disabled ? 0.55 : 1,
              color: on ? "var(--text-on-accent)" : "var(--text-muted)",
              background: on ? "var(--grad-dating)" : "transparent",
              boxShadow: on ? "0 6px 18px rgba(255,45,120,0.35)" : "none",
              transition:
                "color var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)",
            }}
          >
            {it.icon && <Icon name={it.icon} size={16} strokeWidth={2.2} />}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------ Button ------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold" | "emerald";
type ButtonSize = "sm" | "md" | "lg";

const BTN_SIZES: Record<ButtonSize, { padding: string; fontSize: string; gap: number; icon: number; radius: string }> = {
  sm: { padding: "8px 14px", fontSize: "var(--fs-sm)", gap: 6, icon: 15, radius: "var(--radius-sm)" },
  md: { padding: "11px 20px", fontSize: "var(--fs-body)", gap: 8, icon: 18, radius: "var(--radius-md)" },
  lg: { padding: "15px 28px", fontSize: "var(--fs-h3)", gap: 10, icon: 20, radius: "var(--radius-lg)" },
};

function variantStyle(variant: ButtonVariant, hovered: boolean): CSSProperties {
  switch (variant) {
    case "primary":
      return {
        background: "var(--grad-dating)",
        color: "var(--text-on-accent)",
        border: "1px solid transparent",
        boxShadow: hovered
          ? "0 0 0 1px rgba(255,45,120,0.6), 0 12px 40px rgba(255,45,120,0.5)"
          : "0 6px 22px rgba(255,45,120,0.32)",
      };
    case "gold":
      return {
        background: "var(--grad-gold)",
        color: "var(--text-on-gold)",
        border: "1px solid transparent",
        boxShadow: hovered ? "var(--glow-ring-gold)" : "0 6px 20px rgba(245,181,36,0.28)",
      };
    case "emerald":
      return {
        background: "var(--grad-emerald)",
        color: "#04231a",
        border: "1px solid transparent",
        boxShadow: hovered ? "var(--glow-ring-emerald)" : "0 6px 20px rgba(52,211,153,0.26)",
      };
    case "secondary":
      return {
        background: hovered ? "var(--surface-raised)" : "var(--surface-card)",
        color: "var(--text-strong)",
        border: "1px solid var(--border-strong)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
      };
    case "ghost":
      return {
        background: hovered ? "rgba(148,163,184,0.1)" : "transparent",
        color: "var(--text-body)",
        border: "1px solid transparent",
      };
  }
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: IconName;
  iconRight?: IconName;
  block?: boolean;
  style?: CSSProperties;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  style,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const s = BTN_SIZES[size];
  const v = variantStyle(variant, hovered && !disabled);
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        padding: s.padding,
        fontFamily: "var(--font-body)",
        fontSize: s.fontSize,
        fontWeight: "var(--fw-bold)" as CSSProperties["fontWeight"],
        letterSpacing: "var(--ls-snug)",
        lineHeight: 1,
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transform: hovered && !disabled ? "translateY(-1px)" : "translateY(0)",
        transition:
          "transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)",
        whiteSpace: "nowrap",
        ...v,
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
