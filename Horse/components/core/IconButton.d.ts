import * as React from 'react';
import type { IconName } from './Icon';

/** Round glass icon button — the swipe-deck action control. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon glyph name. */
  icon: IconName;
  /** Semantic tone driving the glow color. Default 'neutral'. */
  tone?: 'nope' | 'like' | 'love' | 'super' | 'neutral';
  /** Diameter preset. Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (icon-only button). */
  label?: string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
