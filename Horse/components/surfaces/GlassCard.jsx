import React, { useState } from 'react';

const GLOWS = {
  none: 'none',
  pink: '0 0 60px -18px rgba(255,45,120,0.55)',
  orange: '0 0 60px -18px rgba(255,122,24,0.5)',
  gold: '0 0 60px -18px rgba(245,181,36,0.5)',
  emerald: '0 0 60px -18px rgba(52,211,153,0.45)',
};

/**
 * GlassCard — the signature frosted surface. Blurred translucent fill,
 * hairline border, optional colored bloom + hover lift.
 */
export function GlassCard({
  children,
  glow = 'none',
  strong = false,
  interactive = false,
  padding = 'var(--space-5)',
  radius = 'var(--radius-lg)',
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const lift = interactive && hovered;
  return (
    <div
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
      style={{
        position: 'relative',
        background: strong ? 'var(--surface-glass-strong)' : 'var(--surface-card)',
        border: `1px solid ${lift ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
        borderRadius: radius,
        padding,
        backdropFilter: `blur(${strong ? 'var(--glass-blur-strong)' : 'var(--glass-blur)'})`,
        WebkitBackdropFilter: `blur(${strong ? 'var(--glass-blur-strong)' : 'var(--glass-blur)'})`,
        boxShadow: lift
          ? `var(--shadow-lg), ${GLOWS[glow]}`
          : `var(--shadow-md), ${GLOWS[glow]}`,
        transform: lift ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
