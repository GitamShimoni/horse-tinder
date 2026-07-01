import type { Horse } from "../types";

// Trotr sample deck. LoremFlickr serves real horse photos based on keywords.
// The `lock` query param stops the images from changing on every single re-render,
// because seeing a majestic stallion mutate into a Shetland pony mid-swipe is bad UX.
// If the API dies, it falls back to a neon emoji hero. No broken profiles on our watch.
const img = (lock: number) =>
  `https://loremflickr.com/800/1000/horse,pony,stallion/all?lock=${lock}`;

export const horses: Horse[] = [
  {
    id: 1,
    name: "BoJack",
    age: 9,
    horseAge: 63,
    emoji: "🐴",
    distance: "2 miles away",
    location: "The Next Barn Over",
    verified: true,
    bio: "I live by the Code: horse before hoes, hay before heartbreak. Sure, I've got baggage and a Netflix deal, but I have NEVER once cheated on a mare with a garden tool. Must love long, heavy sighs on the beach.",
    tags: [
      { emoji: "🤝", label: "Loyal (to a Fault)" },
      { emoji: "🏎️", label: "1 HP (Physically & Emotionally)" },
      { emoji: "🥃", label: "Existential Dread" },
    ],
    imageUrl: img(11),
  },
  {
    id: 2,
    name: "Spirit",
    age: 5,
    horseAge: 35,
    emoji: "🐎",
    distance: "1 mile away",
    location: "Sunny Meadow (Behind the Electric Fence)",
    verified: true,
    bio: "Wild at heart, fully vaccinated, heavily allergic to drama and low-grade oats. My motto is horse before hoes — and yes, I once dumped a stallion for making eyes at a rake. Bring premium sugar cubes or don't breathe my way.",
    tags: [
      { emoji: "✨", label: "Untamable Screen Time" },
      { emoji: "🥕", label: "Carrot Cake Addict" },
      { emoji: "🚫", label: "Will Kick if Startled" },
    ],
    imageUrl: img(22),
  },
  {
    id: 3,
    name: "Seabiscuit",
    age: 7,
    horseAge: 49,
    emoji: "🏇",
    distance: "3 miles away",
    location: "Thunder Ridge Ranch",
    verified: false,
    bio: "Fast on the track, faster to ghost a hoe. I said it in my Hall of Fame speech and I'll say it again: horse before hoes, always. Swipe right if you can handle 1,200 pounds of raw, unbridled loyalty (and mild gambling debt).",
    tags: [
      { emoji: "🏇", label: "Chose the Barn Over the Rake" },
      { emoji: "💵", label: "Gambling Problem" },
      { emoji: "🧼", label: "Freshly Hoof-Manicured" },
    ],
    imageUrl: img(33),
  },
  {
    id: 4,
    name: "Clover",
    age: 4,
    horseAge: 28,
    emoji: "🦄",
    distance: "4 miles away",
    location: "Emerald Paddock (VIP Section)",
    verified: true,
    bio: "Meadow enthusiast and certified unicorn-adjacent. I need a stallion who honors the Code: I come before your hoes, your rakes, your trowels, and especially that shiny new tractor. Love language is brushing and stall-cleaning.",
    tags: [
      { emoji: "🍀", label: "Lucky (Nepo Baby)" },
      { emoji: "🚜", label: "Jealous of Farm Equipment" },
      { emoji: "💅", label: "High Maintenance" },
    ],
    imageUrl: img(44),
  },
  {
    id: 5,
    name: "Duke",
    age: 11,
    horseAge: 77,
    emoji: "🐴",
    distance: "5 miles away",
    location: "Silvermane Estate (The Big House)",
    verified: false,
    bio: "Silver mane, silver-fox energy — basically the George Clooney of the pasture. Three ex-mares, zero regrets, and one unbreakable rule I taught every colt I've sired: horse before hoes. I bring the pedigree, you bring the salt lick.",
    tags: [
      { emoji: "🎩", label: "Distinguished Stallion" },
      { emoji: "💸", label: "Alimony Payments" },
      { emoji: "🥂", label: "Champagne Taste, Hay Budget" },
    ],
    imageUrl: img(55),
  },
  {
    id: 6,
    name: "Pip",
    age: 3,
    horseAge: 21,
    emoji: "🐴",
    distance: "800 ft away",
    location: "The Little Stable (I escaped)",
    verified: true,
    bio: "Tiny pony, absolute goblin energy, HUGE moral code. I will steal your carrots, your ankles, and your soul — but I will never, EVER put a hoe before my horse. That's just who I am. Ponies are people too, just angrier and more principled.",
    tags: [
      { emoji: "🥷", label: "Carrot Kleptomaniac" },
      { emoji: "📜", label: "Sworn to the Code" },
      { emoji: "⚡", label: "Pure Chaos" },
    ],
    imageUrl: img(66),
  },
];
