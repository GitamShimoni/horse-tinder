import * as React from 'react';

export type IconName =
  | 'heart' | 'x' | 'zap' | 'star' | 'sparkles' | 'crown' | 'flame'
  | 'mapPin' | 'check' | 'settings' | 'shoppingBag' | 'store'
  | 'messageCircle' | 'bell' | 'activity' | 'wine' | 'gem' | 'shieldCheck'
  | 'chevronRight' | 'plus' | 'bluetooth' | 'apple' | 'carrot' | 'home'
  | 'users' | 'rotateCcw';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Glyph name from the curated Trotr/Lucide set. */
  name: IconName;
  /** Pixel size (width = height). Default 20. */
  size?: number;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
}

/** Stroke icon that inherits `currentColor`. */
export function Icon(props: IconProps): JSX.Element;

/** All available glyph names. */
export const ICON_NAMES: IconName[];
