import * as React from 'react';

/** Glassy attribute chip (profile traits). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading emoji. */
  emoji?: string;
}

export function Tag(props: TagProps): JSX.Element;
