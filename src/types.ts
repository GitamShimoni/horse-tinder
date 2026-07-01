export interface Horse {
  id: number;
  name: string;
  age: number;
  bio: string;
  imageUrl: string;
}

export type View = "hero" | "swipe" | "chat";

export interface ChatMessage {
  id: number;
  from: "me" | "horse";
  text: string;
}
