**MatchToast** — the "It's a Match!" celebration card that fires after a like; two overlapping ringed avatars, gradient headline, pulsing neon glow. Pass action buttons as children.

```jsx
<MatchToast
  message="You and Storm both said neigh. Book the barn."
  leftEmoji="🐴" rightEmoji="🦄"
>
  <Button variant="primary" iconLeft="messageCircle" block>Send a Neigh</Button>
  <Button variant="ghost" block>Keep Trotting</Button>
</MatchToast>
```
