import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  neon: { bg: 'var(--grad-dating)', color: '#fff', border: 'transparent', solid: true },
  gold: { bg: 'var(--grad-gold)', color: 'var(--text-on-gold)', border: 'transparent', solid: true },
  emerald: { bg: 'var(--grad-emerald)', color: '#04231a', border: 'transparent', solid: true },
  super: { bg: 'rgba(56,189,248,0.16)', color: 'var(--accent-super)', border: 'rgba(56,189,248,0.4)' },
  neutral: { bg: 'rgba(148,163,184,0.14)', color: 'var(--text-body)', border: 'var(--border-hairline)' },
};

/**
 * Badge — small status pill. Solid gradient tones read as premium
 * (gold), verified (emerald) or hot (neon); soft tones for metadata.
 */
export function Badge({ children, tone = 'neutral', icon, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.color,
        border: `1px solid ${t.border}`,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        boxShadow: t.solid ? '0 4px 14px rgba(0,0,0,0.25)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={12} strokeWidth={2.4} />}
      {children}
    </span>
  );
}
