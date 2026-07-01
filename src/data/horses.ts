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
    bio: "Looking for a stable relationship, but honestly? I have a lot of baggage and a Netflix deal. No horsing around. Must love long, heavy sighs on the beach.",
    tags: [
      { emoji: "🌾", label: "Gluten-Free Hay Only" },
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
    bio: "Wild at heart, fully vaccinated, heavily allergic to drama and low-grade oats. If you don't bring premium sugar cubes, don't even breathe my way.",
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
    bio: "Fast on the track, faster to ghost you. Swipe right if you can handle 1,200 pounds of raw, unbridled anxiety. Looking for my forever-jockey.",
    tags: [
      { emoji: "💪", label: "Retired & Bitter" },
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
    bio: "Meadow enthusiast and certified unicorn-adjacent. My love language is physical touch (brushing) and acts of service (cleaning my stall). No mares, please.",
    tags: [
      { emoji: "🍀", label: "Lucky (Nepo Baby)" },
      { emoji: "🎠", label: "Ex-Carousel Trauma" },
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
    bio: "Silver mane, silver-fox energy. I’m basically the George Clooney of the pasture. I bring the pedigree, you bring the salt lick. Looking for a sugar mama.",
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
    bio: "Tiny pony, absolute goblin energy. Warning: I will steal your carrots, your ankles, and your soul. Ponies are people too, just angrier.",
    tags: [
      { emoji: "🥷", label: "Carrot Kleptomaniac" },
      { emoji: "🧸", label: "Ankle-Biter" },
      { emoji: "⚡", label: "Pure Chaos" },
    ],
    imageUrl: img(66),
  },
];
