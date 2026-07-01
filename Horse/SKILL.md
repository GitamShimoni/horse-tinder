---
name: trotr-design
description: Use this skill to generate well-branded interfaces and assets for Trotr — the premium horse-dating app — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`tokens/`, `components/`, `ui_kits/`, `guidelines/`, `assets/`).

Trotr is a humor-forward, dark-glassmorphic dating app for horses ("Where stable relationships begin"): neon pink→orange dating gradients, gold/emerald marketplace accents, Space Grotesk + Plus Jakarta Sans type, Lucide icons, and deadpan-luxury horse-pun copy.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Load the compiled component library via `_ds_bundle.js` and read components off `window.Horse_7cfa43` (e.g. `const { Button, ProfileCard } = window.Horse_7cfa43`), and link `styles.css` for tokens. If working on production code, copy the assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
