import * as React from 'react';
import type { IconName } from './Icon';

/**
 * Trotr's primary action button.
 *
 * @startingPoint section="Core" subtitle="Neon gradient + glass action buttons" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. Default 'primary' (neon dating gradient). */
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'emerald' | 'danger';
  /** Size preset. Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon name. */
  iconLeft?: IconName;
  /** Trailing icon name. */
  iconRight?: IconName;
  /** Full-width. */
  block?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
