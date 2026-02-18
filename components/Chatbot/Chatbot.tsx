"use client";

import { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import { chatResponses } from "./ChatData";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [usedOptions, setUsedOptions] = useState<string[]>([]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  /* Auto scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const openChat = () => {
    setOpen(true);

    if (!initialized.current) {
      initialized.current = true;
      setTyping(true);

      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            sender: "bot",
            text: chatResponses.greeting.message,
          },
        ]);
        setTyping(false);
      }, 600);
    }
  };

  const closeChat = () => setOpen(false);

  const handleOptionClick = (option: keyof typeof chatResponses) => {
    if (usedOptions.includes(option)) return;

    setUsedOptions((prev) => [...prev, option]);

    // user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: option },
    ]);

    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "bot",
          text: chatResponses[option].message,
        },
      ]);
      setTyping(false);
    }, 800);
  };

  // 🔑 GLOBAL OPTIONS (stable UX)
  const options = chatResponses.greeting.options;

  return (
    <>
      <ChatBubble onClick={openChat} />

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[300px] bg-white rounded-xl shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
            Kamlesh Mailing Assistant
            <button
              onClick={closeChat}
              className="opacity-70 hover:opacity-100 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-[240px] overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] px-3 py-2 rounded-xl text-sm shadow-sm ${
                  m.sender === "bot"
                    ? "bg-white text-gray-700"
                    : "bg-orange-500 text-white ml-auto"
                }`}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="text-xs text-gray-400 bg-white px-3 py-2 rounded-xl shadow w-fit">
                Typing…
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-3 py-2 border-t bg-white">
            <p className="text-[11px] text-gray-400 mb-2">You can ask:</p>

            <div className="flex flex-wrap gap-2">
              {options.map((opt) => {
                const used = usedOptions.includes(opt);

                return (
                  <button
                    key={opt}
                    onClick={() =>
                      handleOptionClick(opt as keyof typeof chatResponses)
                    }
                    disabled={used}
                    className={`px-3 py-1 rounded-full text-xs border transition ${
                      used
                        ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                        : "bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:bg-orange-50"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-3 py-1 text-[11px] text-gray-400 border-t">
            India Post mailing assistance
          </div>
        </div>
      )}
    </>
  );
}
