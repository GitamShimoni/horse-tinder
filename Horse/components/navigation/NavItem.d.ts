import * as React from 'react';
import type { IconName } from '../core/Icon';

/** Sidebar navigation row with active wash + optional count badge. */
export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  label: string;
  active?: boolean;
  /** Trailing count badge (e.g. unread matches). */
  count?: number;
}

export function NavItem(props: NavItemProps): JSX.Element;
