**ProfileCard** — the swipeable horse dating card; full-bleed hero with a protection gradient, name + age, distance, trait tags, and an italic bio.

```jsx
<ProfileCard
  emoji="🐴" name="Storm" age={6} horseAge={42}
  distance="2 miles away" location="Next Barn Over" verified
  tags={[{emoji:'🌾',label:'Organic Hay Only'}, {emoji:'🏎️',label:'1 HP (Literally)'}]}
  bio="Looking for a stable relationship. No horsing around."
/>
```

Pair with three `IconButton`s (nope / love / super) beneath it.
