import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '8px 14px', fontSize: 'var(--fs-sm)', gap: 6, icon: 15, radius: 'var(--radius-sm)' },
  md: { padding: '11px 20px', fontSize: 'var(--fs-body)', gap: 8, icon: 18, radius: 'var(--radius-md)' },
  lg: { padding: '15px 28px', fontSize: 'var(--fs-h3)', gap: 10, icon: 20, radius: 'var(--radius-lg)' },
};

function variantStyle(variant, hovered) {
  switch (variant) {
    case 'primary':
      return {
        background: 'var(--grad-dating)',
        color: 'var(--text-on-accent)',
        border: '1px solid transparent',
        boxShadow: hovered
          ? '0 0 0 1px rgba(255,45,120,0.6), 0 12px 40px rgba(255,45,120,0.5)'
          : '0 6px 22px rgba(255,45,120,0.32)',
      };
    case 'gold':
      return {
        background: 'var(--grad-gold)',
        color: 'var(--text-on-gold)',
        border: '1px solid transparent',
        boxShadow: hovered ? 'var(--glow-ring-gold)' : '0 6px 20px rgba(245,181,36,0.28)',
      };
    case 'emerald':
      return {
        background: 'var(--grad-emerald)',
        color: '#04231a',
        border: '1px solid transparent',
        boxShadow: hovered ? 'var(--glow-ring-emerald)' : '0 6px 20px rgba(52,211,153,0.26)',
      };
    case 'secondary':
      return {
        background: hovered ? 'var(--surface-raised)' : 'var(--surface-card)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-strong)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
      };
    case 'ghost':
      return {
        background: hovered ? 'rgba(148,163,184,0.1)' : 'transparent',
        color: 'var(--text-body)',
        border: '1px solid transparent',
      };
    case 'danger':
      return {
        background: hovered ? 'rgba(239,68,68,0.16)' : 'rgba(239,68,68,0.1)',
        color: '#fca5a5',
        border: '1px solid rgba(239,68,68,0.4)',
      };
    default:
      return {};
  }
}

/**
 * Button — primary action element. Neon gradient by default, plus glass,
 * ghost, and the marketplace gold/emerald treatments.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hovered && !disabled);
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontSize: s.fontSize,
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-snug)',
        lineHeight: 1,
        borderRadius: s.radius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: hovered && !disabled ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        whiteSpace: 'nowrap',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
