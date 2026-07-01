import React from 'react';
import { GlassCard } from '../surfaces/GlassCard.jsx';
import { Badge } from '../feedback/Badge.jsx';
import { Icon } from '../core/Icon.jsx';

const TONE = {
  gold: { glow: 'gold', price: 'var(--gold-400)', badge: 'gold', icon: 'crown', chip: 'PREMIUM' },
  emerald: { glow: 'emerald', price: 'var(--emerald-300)', badge: 'emerald', icon: 'gem', chip: 'NEW' },
  neon: { glow: 'pink', price: 'var(--neon-rose)', badge: 'neon', icon: 'flame', chip: 'HOT' },
};

/**
 * ProductCard — a tile in the Neigh-Premium merchandise shop. Emoji/glyph
 * hero, tone-tinted price, buy action. Absurd luxury horse goods.
 */
export function ProductCard({
  emoji = '🛍️',
  name,
  blurb,
  price,
  tone = 'gold',
  badge,
  onBuy,
  style,
}) {
  const t = TONE[tone] || TONE.gold;
  return (
    <GlassCard interactive glow={t.glow} padding="var(--space-4)" radius="var(--radius-lg)" style={style}>
      <div
        style={{
          position: 'relative',
          height: 92,
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 44,
          marginBottom: 'var(--space-3)',
          background:
            tone === 'gold'
              ? 'radial-gradient(120% 120% at 50% 0%, rgba(245,181,36,0.22), rgba(15,23,42,0.2))'
              : tone === 'emerald'
              ? 'radial-gradient(120% 120% at 50% 0%, rgba(52,211,153,0.2), rgba(15,23,42,0.2))'
              : 'radial-gradient(120% 120% at 50% 0%, rgba(255,45,120,0.2), rgba(15,23,42,0.2))',
          border: '1px solid var(--border-hairline)',
        }}
      >
        <span>{emoji}</span>
        <span style={{ position: 'absolute', top: 8, right: 8 }}>
          <Badge tone={t.badge} icon={t.icon}>{badge || t.chip}</Badge>
        </span>
      </div>
      <h4
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--fs-title)',
          fontWeight: 'var(--fw-bold)',
          color: 'var(--text-strong)',
          letterSpacing: 'var(--ls-snug)',
          lineHeight: 1.2,
        }}
      >
        {name}
      </h4>
      {blurb && (
        <p
          style={{
            margin: '6px 0 0',
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-muted)',
            lineHeight: 'var(--lh-normal)',
          }}
        >
          {blurb}
        </p>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 'var(--space-4)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-h3)',
            fontWeight: 'var(--fw-bold)',
            color: t.price,
          }}
        >
          {price}
        </span>
        <button
          type="button"
          onClick={onBuy}
          aria-label={`Buy ${name}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 14px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-strong)',
            background: 'var(--surface-raised)',
            color: 'var(--text-strong)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            fontWeight: 'var(--fw-bold)',
            cursor: 'pointer',
          }}
        >
          <Icon name="shoppingBag" size={15} />
          Buy
        </button>
      </div>
    </GlassCard>
  );
}
