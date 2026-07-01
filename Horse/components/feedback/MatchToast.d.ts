import * as React from 'react';

/**
 * Celebratory match-notification card.
 *
 * @startingPoint section="Feedback" subtitle="It's-a-Match celebration toast" viewport="700x520"
 */
export interface MatchToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Headline. Default "It's a Match!". */
  title?: string;
  /** Supporting line. */
  message?: string;
  /** Emoji fallbacks for the two avatars. */
  leftEmoji?: string;
  rightEmoji?: string;
  /** Image URLs (override emoji). */
  leftSrc?: string;
  rightSrc?: string;
  /** Action buttons rendered below the message. */
  children?: React.ReactNode;
}

export function MatchToast(props: MatchToastProps): JSX.Element;
