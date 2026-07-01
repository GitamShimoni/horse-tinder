**PhoneFrame** — a premium glass phone bezel with a dynamic-island notch; put a scrollable screen inside.

```jsx
<PhoneFrame width={330}>
  <div style={{ height: '100%', overflowY: 'auto', paddingTop: 44 }}>
    {/* screen content */}
  </div>
</PhoneFrame>
```

Screen aspect ratio is fixed at 9:19.5. Reserve ~44px top padding for the notch.
