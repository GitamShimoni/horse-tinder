import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Tabs — glass segmented control. The active segment gets the neon
 * gradient pill. Controlled via `value`/`onChange` or self-managed.
 */
export function Tabs({ items = [], value, onChange, style, ...rest }) {
  const [internal, setInternal] = useState(items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = (id) => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-glass-strong)',
        border: '1px solid var(--border-hairline)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={on}
            onClick={() => select(it.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '9px 18px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-sm)',
              fontWeight: 'var(--fw-bold)',
              letterSpacing: 'var(--ls-snug)',
              whiteSpace: 'nowrap',
              color: on ? 'var(--text-on-accent)' : 'var(--text-muted)',
              background: on ? 'var(--grad-dating)' : 'transparent',
              boxShadow: on ? '0 6px 18px rgba(255,45,120,0.35)' : 'none',
              transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)',
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
