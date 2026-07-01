import { useEffect, useRef, useState } from "react";
import type { ChatMessage, Horse } from "../types";
import HorseImage from "../components/HorseImage";

interface Props {
  horse: Horse;
  onBack: () => void;
}

const HORSE_REPLIES = [
  "Neigh! 🐴",
  "Do you have a sugar cube? 🧊",
  "I'm not looking for a one-night trot.",
  "Let's gallop away together. 🏇",
  "You had me at hay. 🌾",
  "Careful, I might just be your stable relationship. 😏",
  "Sorry, I was grazing. What did you say?",
  "Hold your horses, I'm blushing. 😳",
];

let msgId = 0;
const nextId = () => ++msgId;

export default function ChatView({ horse, onBack }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: nextId(), from: "horse", text: `Hey, it's ${horse.name}. You swiped right? 😏` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  // Auto-scroll to the newest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  // Clean up a pending reply timer if we leave the chat.
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const send = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: nextId(), from: "me", text }]);
    setInput("");

    // Hackathon magic: auto-responder replies after ~1s.
    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      const reply = HORSE_REPLIES[Math.floor(Math.random() * HORSE_REPLIES.length)];
      setMessages((prev) => [...prev, { id: nextId(), from: "horse", text: reply }]);
      setTyping(false);
    }, 1000);
  };

  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-rose-50 to-pink-100">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-black/5 bg-white px-4 py-3 shadow-sm">
        <button
          onClick={onBack}
          aria-label="Back"
          className="text-2xl text-rose-500 transition-transform active:scale-90"
        >
          ‹
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-rose-200">
          <HorseImage horse={horse} className="rounded-full" />
        </div>
        <div>
          <p className="font-bold leading-tight text-gray-800">{horse.name}</p>
          <p className="text-xs text-green-500">Online now</p>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto px-4 py-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-[15px] shadow-sm ${
                m.from === "me"
                  ? "rounded-br-md bg-rose-500 text-white"
                  : "rounded-bl-md bg-white text-gray-800"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
              <span className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${horse.name}…`}
          className="flex-1 rounded-full bg-gray-100 px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-rose-300"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-xl text-white shadow-md transition-transform active:scale-90 disabled:opacity-40"
        >
          ➤
        </button>
      </form>
    </div>
  );
}
