import * as React from 'react';

/**
 * Frosted-glass surface container — Trotr's default card.
 *
 * @startingPoint section="Surfaces" subtitle="Frosted glass card with colored bloom" viewport="700x260"
 */
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colored bloom behind the card. Default 'none'. */
  glow?: 'none' | 'pink' | 'orange' | 'gold' | 'emerald';
  /** Heavier blur + darker fill (use over busy imagery). */
  strong?: boolean;
  /** Enable hover lift + border brighten (for clickable cards). */
  interactive?: boolean;
  /** CSS padding value. Default var(--space-5). */
  padding?: string;
  /** CSS border-radius value. Default var(--radius-lg). */
  radius?: string;
}

export function GlassCard(props: GlassCardProps): JSX.Element;
