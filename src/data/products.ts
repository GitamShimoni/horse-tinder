import type { BadgeTone } from "../components/ui";

export interface Product {
  emoji: string;
  name: string;
  price: string;
  blurb: string;
  tone: Extract<BadgeTone, "gold" | "emerald" | "neon">;
  badge: string;
}

// Neigh-Premium merch. Display-only in this build — no purchase flow.
export const products: Product[] = [
  {
    emoji: "🐴",
    name: "The Smart Horseshoe Pro",
    price: "$399",
    tone: "gold",
    badge: "PREMIUM",
    blurb: "Bluetooth step tracking + heart-rate monitor for when they spot an attractive mare.",
  },
  {
    emoji: "💇",
    name: "HorseGlow Premium AI",
    price: "$29/mo",
    tone: "emerald",
    badge: "AI",
    blurb: "Automatically brushes their mane digitally in other horses' feeds. Always photo-ready.",
  },
  {
    emoji: "🍾",
    name: "First-Date Hay-Champagne",
    price: "$88",
    tone: "gold",
    badge: "LUXE",
    blurb: "Organic bubbling hay extract for romantic stable dinners. Pairs with moonlight.",
  },
  {
    emoji: "💬",
    name: "AI Ice-Breaker Generator",
    price: "$19",
    tone: "neon",
    badge: "HOT",
    blurb: '"Are you from this stable? Because you just kicked my heart into a gallop."',
  },
];

export const priceColor: Record<Product["tone"], string> = {
  gold: "var(--gold-400)",
  emerald: "var(--emerald-300)",
  neon: "var(--neon-rose)",
};
