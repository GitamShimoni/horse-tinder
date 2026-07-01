import * as React from 'react';
import type { IconName } from '../core/Icon';

/** Small uppercase status pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. Default 'neutral'. */
  tone?: 'neon' | 'gold' | 'emerald' | 'super' | 'neutral';
  /** Optional leading icon. */
  icon?: IconName;
}

export function Badge(props: BadgeProps): JSX.Element;
