import React from 'react';

const SIZES = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 };
const RINGS = {
  none: 'transparent',
  neon: 'var(--grad-dating)',
  gold: 'var(--grad-gold)',
  emerald: 'var(--grad-emerald)',
};

/**
 * Avatar — circular identity token. Shows an image, or falls back to an
 * emoji / initials. Optional gradient ring + online dot.
 */
export function Avatar({
  src,
  emoji,
  initials,
  size = 'md',
  ring = 'none',
  online = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const ringWidth = ring === 'none' ? 0 : Math.max(2, Math.round(dim * 0.045));
  return (
    <div
      style={{
        position: 'relative',
        width: dim,
        height: dim,
        borderRadius: 'var(--radius-pill)',
        padding: ringWidth,
        background: RINGS[ring] || 'transparent',
        display: 'inline-flex',
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 'var(--radius-pill)',
          overflow: 'hidden',
          background: 'var(--surface-solid)',
          border: ring === 'none' ? '1px solid var(--border-hairline)' : '2px solid var(--bg-panel)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: dim * 0.5,
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-bold)',
          color: 'var(--text-strong)',
          lineHeight: 1,
        }}
      >
        {src ? (
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : emoji ? (
          <span style={{ fontSize: dim * 0.52 }}>{emoji}</span>
        ) : (
          initials
        )}
      </div>
      {online && (
        <span
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: Math.max(8, dim * 0.22),
            height: Math.max(8, dim * 0.22),
            borderRadius: '50%',
            background: 'var(--emerald-400)',
            border: '2px solid var(--bg-panel)',
            boxShadow: '0 0 10px var(--glow-emerald)',
          }}
        />
      )}
    </div>
  );
}
