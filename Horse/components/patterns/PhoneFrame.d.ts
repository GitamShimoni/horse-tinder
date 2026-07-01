import * as React from 'react';

/** Premium glass smartphone bezel; renders children as the screen. */
export interface PhoneFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Device width in px. Default 320. Screen aspect is fixed 9:19.5. */
  width?: number;
  /** Extra styles for the inner screen surface. */
  screenStyle?: React.CSSProperties;
}

export function PhoneFrame(props: PhoneFrameProps): JSX.Element;
