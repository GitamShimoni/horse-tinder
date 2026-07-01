import * as React from 'react';

/** Circular identity token with optional gradient ring + online dot. */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. */
  src?: string;
  /** Emoji fallback (used when no src). */
  emoji?: string;
  /** Initials fallback (used when no src/emoji). */
  initials?: string;
  /** Size preset. Default 'md'. */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Gradient ring treatment. Default 'none'. */
  ring?: 'none' | 'neon' | 'gold' | 'emerald';
  /** Show the online dot. */
  online?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
