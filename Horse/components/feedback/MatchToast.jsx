import React from 'react';
import { Avatar } from '../core/Avatar.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * MatchToast — the celebratory "It's a Match!" card. Neon gradient
 * border-glow, two overlapping avatars, headline + subtext + actions.
 */
export function MatchToast({
  title = "It's a Match!",
  message,
  leftEmoji = '🐴',
  rightEmoji = '🦄',
  leftSrc,
  rightSrc,
  children,
  style,
  ...rest
}) {
  return (
    <div
      role="status"
      style={{
        position: 'relative',
        width: 340,
        maxWidth: '90vw',
        padding: 2,
        borderRadius: 'var(--radius-xl)',
        background: 'var(--grad-dating)',
        boxShadow: '0 24px 70px rgba(255,45,120,0.4), 0 0 0 1px rgba(255,45,120,0.3)',
        animation: 'trotr-pulse-glow 2.6s var(--ease-out) infinite',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          borderRadius: 'calc(var(--radius-xl) - 2px)',
          background: 'var(--surface-glass-strong)',
          backdropFilter: 'blur(var(--glass-blur-strong))',
          WebkitBackdropFilter: 'blur(var(--glass-blur-strong))',
          padding: 'var(--space-6) var(--space-5) var(--space-5)',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
          <div style={{ marginRight: -14, transform: 'rotate(-8deg)' }}>
            <Avatar emoji={leftEmoji} src={leftSrc} size="xl" ring="neon" />
          </div>
          <div style={{ marginLeft: -14, transform: 'rotate(8deg)' }}>
            <Avatar emoji={rightEmoji} src={rightSrc} size="xl" ring="neon" />
          </div>
        </div>
        <div
          className="trotr-gradient-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-h1)',
            fontWeight: 'var(--fw-bold)',
            letterSpacing: 'var(--ls-tight)',
            lineHeight: 1.05,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Icon name="sparkles" size={26} style={{ color: 'var(--neon-orange)' }} />
          {title}
        </div>
        {message && (
          <p
            style={{
              margin: '10px 0 0',
              fontSize: 'var(--fs-body)',
              color: 'var(--text-body)',
              lineHeight: 'var(--lh-normal)',
            }}
          >
            {message}
          </p>
        )}
        {children && <div style={{ marginTop: 'var(--space-5)', display: 'grid', gap: 10 }}>{children}</div>}
      </div>
    </div>
  );
}
