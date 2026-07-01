import * as React from 'react';

export interface ProfileTag {
  emoji?: string;
  label: string;
}

/**
 * The swipeable horse dating card.
 *
 * @startingPoint section="Patterns" subtitle="Swipeable horse dating card" viewport="380x620"
 */
export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hero emoji fallback. */
  emoji?: string;
  /** Hero image URL (overrides emoji). */
  src?: string;
  name: string;
  /** Real age (years). */
  age?: number;
  /** "in horse years" figure. */
  horseAge?: number | string;
  distance?: string;
  location?: string;
  verified?: boolean;
  tags?: ProfileTag[];
  bio?: string;
}

export function ProfileCard(props: ProfileCardProps): JSX.Element;
