import * as React from 'react';

/**
 * Merchandise tile for the Neigh-Premium shop.
 *
 * @startingPoint section="Patterns" subtitle="Luxury merch shop tile" viewport="360x300"
 */
export interface ProductCardProps {
  /** Hero emoji/glyph. */
  emoji?: string;
  name: string;
  blurb?: string;
  /** Formatted price string (rendered in mono). */
  price: string;
  /** Accent tone. Default 'gold'. */
  tone?: 'gold' | 'emerald' | 'neon';
  /** Override the corner badge label. */
  badge?: string;
  onBuy?: () => void;
  style?: React.CSSProperties;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
