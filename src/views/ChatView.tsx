import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { ChatMessage, Horse } from "../types";
import { Avatar } from "../components/ui";
import Icon from "../components/Icon";

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

    // Auto-responder replies after ~1s.
    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      const reply = HORSE_REPLIES[Math.floor(Math.random() * HORSE_REPLIES.length)];
      setMessages((prev) => [...prev, { id: nextId(), from: "horse", text: reply }]);
      setTyping(false);
    }, 1000);
  };

  const bold = "var(--fw-bold)" as CSSProperties["fontWeight"];

  return (
    <div
      className="trotr-canvas"
      style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 16px 14px",
          borderBottom: "1px solid var(--border-subtle)",
          background: "var(--surface-glass-strong)",
          backdropFilter: "blur(var(--glass-blur))",
          WebkitBackdropFilter: "blur(var(--glass-blur))",
        }}
      >
        <button
          onClick={onBack}
          aria-label="Back"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: "var(--radius-pill)",
            border: "1px solid var(--border-hairline)",
            background: "transparent",
            color: "var(--text-body)",
            cursor: "pointer",
          }}
        >
          <Icon name="chevronLeft" size={20} />
        </button>
        <Avatar src={horse.imageUrl} emoji={horse.emoji} size="sm" ring="neon" online />
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontWeight: bold, color: "var(--text-strong)", fontSize: "var(--fs-title)" }}>
            {horse.name}
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: "var(--fs-xs)",
              color: "var(--emerald-400)",
              marginTop: 2,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--emerald-400)",
                boxShadow: "0 0 8px var(--glow-emerald)",
              }}
            />
            Trotting now
          </div>
        </div>
      </header>

      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {messages.map((m) => {
          const mine = m.from === "me";
          return (
            <div key={m.id} style={{ display: "flex", justifyContent: mine ? "flex-end" : "flex-start" }}>
              <div
                style={{
                  maxWidth: "76%",
                  padding: "10px 14px",
                  fontSize: "var(--fs-body)",
                  lineHeight: "var(--lh-normal)",
                  borderRadius: mine ? "18px 18px 6px 18px" : "18px 18px 18px 6px",
                  color: mine ? "var(--text-on-accent)" : "var(--text-strong)",
                  background: mine ? "var(--grad-dating)" : "var(--surface-card)",
                  border: mine ? "1px solid transparent" : "1px solid var(--border-hairline)",
                  boxShadow: mine ? "0 6px 18px rgba(255,45,120,0.28)" : "var(--shadow-sm)",
                  backdropFilter: mine ? "none" : "blur(var(--glass-blur))",
                  WebkitBackdropFilter: mine ? "none" : "blur(var(--glass-blur))",
                }}
              >
                {m.text}
              </div>
            </div>
          );
        })}

        {typing && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                display: "flex",
                gap: 5,
                padding: "12px 14px",
                borderRadius: "18px 18px 18px 6px",
                background: "var(--surface-card)",
                border: "1px solid var(--border-hairline)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--slate-400)",
                    animation: `trotr-typing 1s ${i * 0.15}s var(--ease-out) infinite`,
                  }}
                />
              ))}
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
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 14px",
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--surface-glass-strong)",
          backdropFilter: "blur(var(--glass-blur))",
          WebkitBackdropFilter: "blur(var(--glass-blur))",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${horse.name}…`}
          style={{
            flex: 1,
            padding: "12px 16px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-body)",
            color: "var(--text-strong)",
            background: "var(--surface-card)",
            border: "1px solid var(--border-hairline)",
            borderRadius: "var(--radius-pill)",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            flexShrink: 0,
            borderRadius: "var(--radius-pill)",
            border: "1px solid transparent",
            background: "var(--grad-dating)",
            color: "var(--text-on-accent)",
            cursor: input.trim() ? "pointer" : "not-allowed",
            opacity: input.trim() ? 1 : 0.4,
            boxShadow: "0 6px 18px rgba(255,45,120,0.3)",
            transition: "opacity var(--dur-fast) var(--ease-out)",
          }}
        >
          <Icon name="send" size={19} />
        </button>
      </form>
    </div>
  );
}
