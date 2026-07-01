**Tabs** — glass segmented control; the active segment lights up with the neon gradient. Used to swap the phone between "Dating Feed" and "Shop".

```jsx
<Tabs
  items={[
    { id: 'feed', label: 'Dating Feed', icon: 'flame' },
    { id: 'shop', label: 'Shop', icon: 'store' },
  ]}
  value={tab}
  onChange={setTab}
/>
```

Controlled via `value`/`onChange`, or leave `value` off for self-managed state.
