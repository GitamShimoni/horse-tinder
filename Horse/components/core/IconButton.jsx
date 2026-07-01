import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  nope: { color: 'var(--slate-300)', ring: 'rgba(148,163,184,0.4)', glow: 'rgba(148,163,184,0.35)', border: 'var(--border-strong)' },
  like: { color: 'var(--neon-orange)', ring: 'rgba(255,122,24,0.55)', glow: 'var(--glow-orange)', border: 'rgba(255,122,24,0.4)' },
  love: { color: 'var(--neon-pink)', ring: 'rgba(255,45,120,0.55)', glow: 'var(--glow-pink)', border: 'rgba(255,45,120,0.4)' },
  super: { color: 'var(--accent-super)', ring: 'rgba(56,189,248,0.6)', glow: 'var(--glow-super)', border: 'rgba(56,189,248,0.45)' },
  neutral: { color: 'var(--text-body)', ring: 'rgba(148,163,184,0.35)', glow: 'rgba(148,163,184,0.28)', border: 'var(--border-hairline)' },
};

const SIZES = { sm: 40, md: 56, lg: 68 };

/**
 * IconButton — the round glass action button used for the swipe deck
 * (nope / like / love / super) and general icon-only controls.
 */
export function IconButton({
  icon,
  tone = 'neutral',
  size = 'md',
  label,
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const t = TONES[tone] || TONES.neutral;
  const dim = SIZES[size] || SIZES.md;
  return (
    <button
      type="button"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: dim,
        height: dim,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        background: hovered ? 'var(--surface-raised)' : 'var(--surface-glass-strong)',
        border: `1.5px solid ${hovered ? t.ring : t.border}`,
        color: t.color,
        cursor: 'pointer',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        boxShadow: hovered
          ? `0 0 0 4px ${t.glow.replace(/[\d.]+\)$/, '0.18)')}, 0 10px 30px ${t.glow}`
          : '0 6px 18px rgba(0,0,0,0.4)',
        transform: hovered ? 'translateY(-2px) scale(1.06)' : 'scale(1)',
        transition: 'transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(dim * 0.42)} strokeWidth={2.2} />
    </button>
  );
}
