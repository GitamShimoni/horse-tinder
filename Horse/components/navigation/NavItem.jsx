import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * NavItem — a row in the barn sidebar. Active state paints a soft neon
 * wash + left gradient bar; supports a trailing count badge.
 */
export function NavItem({ icon, label, active = false, count, style, ...rest }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body)',
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: active ? 'var(--text-strong)' : hovered ? 'var(--text-body)' : 'var(--text-muted)',
        background: active
          ? 'var(--grad-dating-soft)'
          : hovered
          ? 'rgba(148,163,184,0.08)'
          : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {active && (
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 3,
            height: 20,
            borderRadius: 3,
            background: 'var(--grad-dating)',
            boxShadow: '0 0 12px var(--glow-pink)',
          }}
        />
      )}
      <Icon
        name={icon}
        size={19}
        strokeWidth={active ? 2.4 : 2}
        style={{ color: active ? 'var(--neon-pink)' : 'inherit' }}
      />
      <span style={{ flex: 1 }}>{label}</span>
      {count != null && (
        <span
          style={{
            minWidth: 20,
            height: 20,
            padding: '0 6px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-pill)',
            background: active ? 'var(--grad-dating)' : 'rgba(148,163,184,0.16)',
            color: active ? '#fff' : 'var(--text-body)',
            fontSize: 'var(--fs-xs)',
            fontWeight: 'var(--fw-bold)',
            lineHeight: 1,
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}
