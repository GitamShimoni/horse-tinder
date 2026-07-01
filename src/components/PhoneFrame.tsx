import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

/**
 * PhoneFrame — glass phone bezel. On desktop it renders a rounded device
 * shell with a neon-glow shadow; on mobile (<640px) it collapses to a
 * full-bleed screen. Responsive behaviour lives in index.css.
 */
export default function PhoneFrame({ children, style }: Props) {
  return (
    <div className="trotr-phone-frame" style={style}>
      <div className="trotr-phone-screen">{children}</div>
    </div>
  );
}
