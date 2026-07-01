import { useState } from "react";
import type { CSSProperties } from "react";
import { Button, Badge } from "../components/ui";
import Icon from "../components/Icon";

interface Props {
  onComplete: () => void;
  onBack: () => void;
}

const bold = "var(--fw-bold)" as CSSProperties["fontWeight"];

const inputBaseStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body)",
  color: "var(--text-strong)",
  background: "var(--surface-solid)",
  border: "1px solid var(--border-hairline)",
  borderRadius: "var(--radius-md)",
  outline: "none",
  transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
};

function Field({
  label,
  ...inputProps
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span
        style={{
          fontSize: "var(--fs-sm)",
          fontWeight: "var(--fw-semibold)" as CSSProperties["fontWeight"],
          color: "var(--text-body)",
        }}
      >
        {label}
      </span>
      <input
        {...inputProps}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBaseStyle,
          borderColor: focused ? "var(--border-strong)" : "var(--border-hairline)",
          boxShadow: focused ? "var(--glow-ring-pink)" : "none",
        }}
      />
    </label>
  );
}

/**
 * RegisterView — mock sign-up gate shown between the landing page and the
 * swipe app. Purely front-end; no request is ever sent.
 */
export default function RegisterView({ onComplete, onBack }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const canSubmit = name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && agreed;

  const submit = () => {
    if (canSubmit) onComplete();
  };

  return (
    <div
      className="trotr-canvas"
      style={{
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "88px 20px 48px",
        position: "relative",
        background:
          "radial-gradient(60% 45% at 10% -5%, rgba(255,45,120,0.16), rgba(6,10,21,0) 55%)," +
          "radial-gradient(55% 45% at 95% 15%, rgba(245,181,36,0.10), rgba(6,10,21,0) 55%)," +
          "var(--bg-app)",
      }}
    >
      {/* Brand mark (click = back to landing) */}
      <button
        onClick={onBack}
        aria-label="Back to home"
        style={{
          position: "absolute",
          top: 22,
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img src="/brand/trotr-mark.svg" alt="" width={22} height={22} />
        <span
          className="trotr-gradient-text"
          style={{ fontFamily: "var(--font-display)", fontWeight: bold, fontSize: 16, letterSpacing: "var(--ls-tight)" }}
        >
          Horse Before Hoes
        </span>
      </button>

      <div
        className="trotr-glass"
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          padding: "var(--space-8)",
        }}
      >
        <Badge tone="neon" icon="sparkles">
          Join the stable
        </Badge>
        <h1
          style={{
            margin: "16px 0 6px",
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-h2)",
            fontWeight: bold,
            letterSpacing: "var(--ls-tight)",
            color: "var(--text-strong)",
          }}
        >
          Saddle up, stranger.
        </h1>
        <p style={{ margin: "0 0 26px", fontSize: "var(--fs-sm)", lineHeight: "var(--lh-relaxed)", color: "var(--text-muted)" }}>
          Create your stall before you start swiping. It only takes a hoof-full of seconds.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <Field
            label="Stable name"
            type="text"
            placeholder="Seabiscuit"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          <Field
            label="Email"
            type="email"
            placeholder="you@trotr.app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Field
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />

          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              marginTop: 4,
              cursor: "pointer",
              fontSize: "var(--fs-sm)",
              color: "var(--text-body)",
              lineHeight: "var(--lh-relaxed)",
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{
                marginTop: 2,
                width: 16,
                height: 16,
                accentColor: "var(--neon-pink)",
                cursor: "pointer",
              }}
            />
            I put the horse before the hoes — always.
          </label>

          <Button
            type="submit"
            size="lg"
            block
            iconRight="chevronRight"
            disabled={!canSubmit}
            style={{ marginTop: 8 }}
          >
            Enter the Barn
          </Button>
        </form>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 20,
            fontSize: "var(--fs-xs)",
            color: "var(--text-faint)",
          }}
        >
          <Icon name="shieldCheck" size={14} style={{ color: "var(--emerald-400)" }} />
          Mock sign-up — nothing is stored, we just trust you.
        </div>
      </div>
    </div>
  );
}
