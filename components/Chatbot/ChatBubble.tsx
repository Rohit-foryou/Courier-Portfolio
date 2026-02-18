"use client";

type ChatBubbleProps = {
  onClick: () => void;
};

export default function ChatBubble({ onClick }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open chat"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-orange-500 text-white
        shadow-xl
        hover:scale-110 active:scale-95
        transition-transform duration-200
      "
    >
      💬
    </button>
  );
}
