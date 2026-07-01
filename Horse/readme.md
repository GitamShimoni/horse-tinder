# Trotr — Design System

**Trotr** is a (gloriously fictional) premium dating app for horses. *"Where stable relationships begin."* Swipe through eligible stallions and mares in nearby barns, match, and outfit your steed from the **Neigh-Premium** luxury merchandise shop. The product is a humor-forward, ultra-modern consumer app rendered in dark glassmorphism — think a 2026 award-winning SaaS/dating product, but every straight-faced feature is about horses.

This design system captures Trotr's brand, foundations, components, and a full interactive product recreation so any agent can generate on-brand Trotr screens, mocks, and marketing.

---

## Sources

- **GitHub:** [`GitamShimoni/horse-tinder`](https://github.com/GitamShimoni/horse-tinder) — the attached repository is currently an empty stub (a placeholder `README.md` only, "Horse Tinder / First commit"). It contained no code, tokens, or assets to mine. Explore it for future updates; if it grows real product code, revisit this system and lift exact values from source.
- **Brief:** A detailed art-direction brief specified the concept, feature set, color language (dark slate + neon pink/orange dating gradients + gold/emerald marketplace accents), glassmorphic mobile-in-desktop layout, Tailwind + Lucide styling, and all product copy. The system below is built to that brief.

Because there was no source logo, wordmark, or brand name, **the brand identity here (name "Trotr", horseshoe mark, wordmark, palette, type pairing) was authored fresh for this system.** See *Caveats* at the bottom.

---

## Content Fundamentals

Trotr's voice is **deadpan luxury + relentless horse puns** — absurd premium features described with a completely straight face.

- **Tone:** Confident, witty, a little bougie. Every equine pun is delivered earnestly, never winking. The comedy comes from treating horse dating exactly like a high-end human dating app.
- **Person:** Addresses the user directly ("*Good evening, Ed*", "*See who trotted your way*") and writes bios in first person ("*Looking for a stable relationship. No horsing around.*").
- **Casing:** Sentence case for UI and body. Feature/product names use **Title Case** and lean on the "Neigh-" / "Hay-" / "-Neigh" prefix-suffix bit ("Neigh-Premium", "Hay-Champagne", "Super Neigh"). Eyebrows and tiny labels are `UPPERCASE` with wide tracking.
- **Puns are structural, not decorative:** distances are "*2 miles away · Next Barn Over*", ages show "*(42 in horse years)*", horsepower is "*1 HP (Literally)*", the super-like shouts "*\*NEIGHHH!\**".
- **Emoji:** Used freely and intentionally as part of the playful brand — horses (🐴🦄🐎), hay 🌾, carrots 🥕, champagne 🍾, moon 🌙. They appear in trait tags, product heroes, and micro-copy. This is one of the few brands where emoji are *on-brand*; still, keep them purposeful (one per idea), never a wall.
- **Numbers & stats:** Only playful, meaningful ones (matches count, "neighs left", horse-years). No filler dashboards of fake metrics.

**Examples**
- ✅ "Looking for a stable relationship. No horsing around. Must love long trots on the beach."
- ✅ "Bluetooth step tracking + heart-rate monitor for when they spot an attractive mare."
- ✅ "You and Storm both said neigh. A horse-wedding simulation is now booking your barn…"
- ❌ "Find your perfect equine companion today!" (generic, salesy, no wit)

---

## Visual Foundations

**Overall vibe:** Cutting-edge dark-mode consumer tech meets high-end equestrian lifestyle. Deep slate canvas, frosted-glass panels, neon dating energy, and quiet gold/emerald wealth in the marketplace.

- **Color:** Base canvas is near-black slate (`--slate-950 #060a15` → `--slate-900`). The signature energy is the **dating gradient** — hot pink `#ff2d78` → orange `#ff7a18` (`--grad-dating`), used on primary CTAs, the wordmark, the active tab, and match moments. The marketplace speaks in **gold** (`--grad-gold`, premium) and **emerald** (`--grad-emerald`, verified/new). Super-like uses sky blue `#38bdf8`. Only two accent families run at once in any view (dating + one marketplace hue).
- **Type:** **Space Grotesk** (700/500) for display — headlines, names, prices-as-headlines, the wordmark — set tight (`-0.03em`). **Plus Jakarta Sans** (300–800 + italic) for all body/UI copy at 1.5–1.65 line-height; bios are italic. **Space Mono** for prices, specs, and playful metadata.
- **Backgrounds:** No photos as full-bleed backdrops. Instead, layered **radial neon glows** bleed in from the corners over the slate canvas (`--grad-app-glow`): pink top-left, orange bottom-right, a touch of gold top-right. Profile card heroes use a radial pink→orange→dark wash behind a large emoji (placeholder for real horse photography).
- **Glass / transparency:** Core motif. Surfaces are translucent slate fills (`rgba(30,41,59,.55)`) with `18px` backdrop-blur, hairline borders (`rgba(148,163,184,.12–.28)`), over the glow. A **strong** variant (darker fill, `28px` blur) sits over busy imagery like the profile hero so text stays legible.
- **Corner radii:** Generous and consumer-friendly — cards `22px` (`--radius-lg`), phone/hero `30px` (`--radius-xl`), controls `12–16px`, and full **pills** (`999px`) for tabs, badges, tags, and the round swipe buttons.
- **Cards:** Frosted glass + hairline border + deep shadow (`--shadow-md/lg`), optional colored **bloom** (`box-shadow: 0 0 60px -18px <hue>`). Interactive cards lift `-3px` and brighten their border on hover.
- **Borders:** Almost always hairline and low-contrast (`rgba(148,163,184,.12–.28)`); dividers use `--border-subtle`. Neon borders appear only on active/hovered accent elements.
- **Shadows:** Two systems. **Elevation** — deep, soft, near-black (`0 20px 50px rgba(0,0,0,.55)`) tuned for dark mode. **Neon glow rings** — colored, blurred rings (`--glow-ring-pink/gold/emerald/super`) that bloom on hover/active and pulse on the match toast.
- **Protection gradients:** The profile hero uses a bottom-up `linear-gradient(to top, rgba(6,10,21,.96), transparent)` so the name/distance stay readable over imagery.
- **Motion:** Purposeful and springy. `--ease-out` for fades/color, `--ease-spring` (overshoot) for buttons, toasts, and the swipe throw. Buttons **lift + scale** on hover and bloom their glow; cards lift; the match toast pulses its glow (`trotr-pulse-glow`). Cards throw off-screen with rotation on swipe. Reduced-motion should be respected in production.
- **Hover states:** Lighter/raised surface + brighter border + colored glow ring + `translateY(-1 to -3px)`, often a slight `scale(1.06)` on round icon buttons.
- **Press/active states:** The active tab/nav gets the solid gradient (tab) or a soft gradient wash + left gradient bar (nav item). Buttons settle back to `translateY(0)`.
- **Imagery color vibe:** Warm and neon — pink/orange dominant, high-saturation, glowing. Cool blue only for the super-like. Never grayscale or muted.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — clean 24×24 stroke icons, `2px` stroke, round caps/joins. This matches the brief's "Tailwind + Lucide React" direction.
- **In this system:** A curated subset of Lucide glyphs is bundled directly into the `Icon` React component (`components/core/Icon.jsx`) — paths lifted verbatim from lucide.dev (ISC licensed). Use `<Icon name="heart" />`. Available names: heart, x, zap, star, sparkles, crown, flame, mapPin, check, settings, shoppingBag, store, messageCircle, bell, activity, wine, gem, shieldCheck, chevronRight, plus, bluetooth, apple, carrot, home, users, rotateCcw. Icons inherit `currentColor`.
- **In plain HTML** (cards / non-React contexts): use the same `Icon` component via the compiled bundle, or pull Lucide from CDN (`https://unpkg.com/lucide@latest`) if you need a glyph outside the curated set — keep stroke width at 2 to match.
- **Emoji as iconography:** Emoji are a deliberate second icon layer for personality — horse avatars, trait tags (🌾🏎️🚫🧼), product heroes (🐴🍾💬), and celebratory moments. Use the stroke `Icon` for functional UI (nav, actions, controls) and emoji for expressive/content moments.
- **Brand mark:** `assets/trotr-mark.svg` (horseshoe, neon gradient) and `assets/trotr-wordmark.svg` (mark + "Trotr"). These were authored for this system.
- **No hand-drawn one-off SVG icons.** Extend the `Icon` set from Lucide rather than inventing glyphs.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (import list only). Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radii/shadows/motion), `fonts.css` (Google Fonts), `base.css` (helpers: `.trotr-glass`, `.trotr-gradient-text`, `.trotr-eyebrow`, keyframes).
- `assets/` — `trotr-mark.svg`, `trotr-wordmark.svg`.
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**Components** (`window.Horse_7cfa43.*`)
- `components/core/` — **Icon**, **Button**, **IconButton**, **Avatar**
- `components/surfaces/` — **GlassCard**
- `components/feedback/` — **Badge**, **Tag**, **MatchToast**
- `components/navigation/` — **Tabs**, **NavItem**
- `components/patterns/` — **ProfileCard**, **ProductCard**, **PhoneFrame**

Each directory has a `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, and one `@dsCard` demo HTML.

**UI Kit**
- `ui_kits/trotr-app/` — the full interactive **Dating Dashboard**: left barn sidebar, centered glass phone (swipeable Dating Feed ↔ in-app Shop, super-like "\*NEIGHHH!\*", match celebration), right Neigh-Premium merch rail. Entry: `index.html`. Screens: `Sidebar.jsx`, `ShopPanel.jsx`, `MobileApp.jsx`, `App.jsx`; content in `data.js`.

**Foundation cards** — `guidelines/*.card.html` populate the Design System tab (Colors, Type, Spacing, Brand).

---

## Caveats

- **No source code existed.** The attached `GitamShimoni/horse-tinder` repo was an empty stub, so brand name, logo, palette, and type pairing were **authored fresh** to the brief. If you have a real brand name, logo, or fonts, share them and I'll swap them in.
- **Fonts are Google-hosted** (Space Grotesk, Plus Jakarta Sans, Space Mono) via `@import`, not bundled binaries — so the compiler reports 0 local webfonts. If you want self-hosted fonts or a different pairing, let me know.
- **Horse imagery is placeholder emoji.** Profile/product heroes use large emoji over gradient washes. Drop in real horse photography and the `ProfileCard`/`ProductCard` will use it (`src` prop).
