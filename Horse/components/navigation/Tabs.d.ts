import * as React from 'react';
import type { IconName } from '../core/Icon';

export interface TabItem {
  id: string;
  label: string;
  icon?: IconName;
}

/** Glass segmented control; active segment gets the neon gradient pill. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Controlled active id. Omit for self-managed state. */
  value?: string;
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
