import React from 'react';

/**
 * Tag — glassy attribute chip used on horse profiles
 * (e.g. "🌾 Organic Hay Only"). Leading `emoji` optional.
 */
export function Tag({ children, emoji, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        background: 'rgba(148,163,184,0.1)',
        border: '1px solid var(--border-hairline)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-semibold)',
        lineHeight: 1.1,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {emoji && <span style={{ fontSize: '1.05em', lineHeight: 1 }}>{emoji}</span>}
      {children}
    </span>
  );
}
