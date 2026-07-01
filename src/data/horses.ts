import type { Horse } from "../types";

// Hackathon mock data. Images are Unsplash horse photos.
// SwipeCard has an onError fallback (emoji + gradient), so the UI never
// breaks even if a particular image URL fails to load.
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=1000&q=80`;

export const horses: Horse[] = [
  {
    id: 1,
    name: "BoJack",
    age: 9,
    bio: "Looking for someone to ride into the sunset with. No riders allowed. 🌅",
    imageUrl: img("photo-1553284965-83fd3e82fa5a"),
  },
  {
    id: 2,
    name: "Spirit",
    age: 5,
    bio: "Free spirit, love running wild. Sugar cubes are the way to my heart. 🐎",
    imageUrl: img("photo-1534773728080-33d31da27ae5"),
  },
  {
    id: 3,
    name: "Seabiscuit",
    age: 7,
    bio: "Fast on the track, slow to fall in love. Swipe right if you can keep up. 🏇",
    imageUrl: img("photo-1598974357801-cbca100e65d3"),
  },
  {
    id: 4,
    name: "Clover",
    age: 4,
    bio: "Meadow enthusiast. My love language is fresh hay and long gallops. 🍀",
    imageUrl: img("photo-1511994714008-b6d68a8b32a2"),
  },
  {
    id: 5,
    name: "Duke",
    age: 11,
    bio: "Distinguished stallion. I bring the mane, you bring the vibes. 🎩",
    imageUrl: img("photo-1566251037378-5e04e3bec343"),
  },
  {
    id: 6,
    name: "Pip",
    age: 3,
    bio: "Tiny pony, big heart. Warning: I will steal your carrots AND your soul. 🥕",
    imageUrl: img("photo-1526095179574-86e545346ae6"),
  },
];
