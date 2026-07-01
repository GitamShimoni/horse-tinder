export interface HorseTag {
  emoji: string;
  label: string;
}

export interface Horse {
  id: number;
  name: string;
  /** Human-facing age shown next to the name. */
  age: number;
  /** Playful "in horse years" figure. */
  horseAge: number;
  bio: string;
  imageUrl: string;
  /** Emoji fallback shown when no photo is available / an image 404s. */
  emoji: string;
  distance: string;
  location: string;
  verified: boolean;
  tags: HorseTag[];
}

export type View = "hero" | "swipe" | "chat";

export interface ChatMessage {
  id: number;
  from: "me" | "horse";
  text: string;
}
