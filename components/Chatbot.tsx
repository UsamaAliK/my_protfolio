"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Bot,
  RotateCcw,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { OPENING_MESSAGE, SUGGESTED_PROMPTS, type ChatMessage } from "@/lib/resume";

const STORAGE_KEY = "portfolio-chat";

interface StoredChat {
  messages: ChatMessage[];
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "model", text: OPENING_MESSAGE },
  ]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [unread, setUnread] = useState(0);
  const [failed, setFailed] = useState(false);
  const [retryText, setRetryText] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as StoredChat;
      if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
        setMessages(parsed.messages);
      }
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages }));
    } catch {
      return;
    }
  }, [messages]);

  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open, pending]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (open || !unread) return;
    const timer = setTimeout(() => setUnread(0), 4000);
    return () => clearTimeout(timer);
  }, [open, unread]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = useCallback(
    async (raw?: string) => {
      const text = (raw ?? draft).trim();
      if (!text || pending) return;

      const previous = messages;
      const next: ChatMessage[] = [...messages, { role: "user", text }];
      setMessages(next);
      setDraft("");
      setPending(true);
      setError("");
      setFailed(false);
      setRetryText(text);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next.slice(-10) }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          setMessages(previous);
          setError(data?.error || "Something went wrong. Please try again.");
          setFailed(true);
          return;
        }

        setMessages([...next, { role: "model", text: data.reply }]);
        if (!open) setUnread((count) => count + 1);
      } catch {
        setMessages(previous);
        setError("Can't reach the assistant. Check your connection and try again.");
        setFailed(true);
      } finally {
        setPending(false);
      }
    },
    [draft, messages, open, pending]
  );

  const reset = () => {
    setMessages([{ role: "model", text: OPENING_MESSAGE }]);
    setError("");
    setFailed(false);
    setRetryText("");
    setDraft("");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      return;
    }
  };

  const showSuggestions =
    !pending && messages.length === 1 && messages[0].role === "model";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 h-12 pl-4 pr-5 rounded-full bg-[#38685A] hover:bg-[#2D5549] text-white text-xs font-semibold tracking-wide shadow-lg shadow-[#38685A]/25 transition-all hover:shadow-xl hover:shadow-[#38685A]/30 active:scale-95 cursor-pointer"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <Sparkles className="w-4 h-4 text-[#E6F0E8]" />
        )}
        <span className="hidden sm:inline">{open ? "Close" : "Ask about me"}</span>
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E6F0E8] text-[#38685A] text-[10px] font-bold flex items-center justify-center border-2 border-[#38685A]">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Portfolio chat assistant"
          className="fixed z-50 bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:w-[23rem] h-[min(30rem,72vh)] flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#E4E4DC] dark:border-[#2B3830] bg-[#FAF9F6] dark:bg-[#121815] shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-black border border-[#222923] dark:border-[#39483D] shrink-0">
                <img
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#222923] dark:text-[#EEF2EC] truncate flex items-center gap-1.5">
                  <span>Usama&apos;s Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38685A] shrink-0" />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={reset}
                aria-label="Reset conversation"
                className="p-1.5 rounded-md text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat assistant"
                className="p-1.5 rounded-md text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5"
            aria-live="polite"
          >
            {messages.map((message, index) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={`${index}-${message.role}`}
                  className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="w-6 h-6 rounded-md bg-[#E6F0E8] dark:bg-[#38685A]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-[#38685A] dark:text-[#9AC7A7]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? "bg-[#38685A] text-white rounded-br-sm"
                        : "bg-[#F1F0EB] dark:bg-[#232E28] text-[#39483D] dark:text-[#D1D5DB] rounded-bl-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                  {isUser && (
                    <div className="w-6 h-6 rounded-md bg-[#222923] dark:bg-[#EEF2EC] flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-white dark:text-[#222923]" />
                    </div>
                  )}
                </div>
              );
            })}

            {pending && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-md bg-[#E6F0E8] dark:bg-[#38685A]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-[#38685A] dark:text-[#9AC7A7]" />
                </div>
                <div className="px-3 py-2.5 rounded-xl rounded-bl-sm bg-[#F1F0EB] dark:bg-[#232E28] flex items-center gap-1">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full bg-[#38685A] dark:bg-[#9AC7A7] animate-bounce"
                      style={{ animationDelay: `${dot * 140}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="px-3 py-2 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
                <p className="text-[11px] text-red-700 dark:text-red-300 leading-relaxed">
                  {error}
                </p>
                {failed && retryText && (
                  <button
                    type="button"
                    onClick={() => send(retryText)}
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 dark:text-red-300 hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Retry
                  </button>
                )}
              </div>
            )}

            {showSuggestions && (
              <div className="pt-1 space-y-1.5">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="w-full text-left px-3 py-2 rounded-lg bg-white dark:bg-[#121815] border border-[#E4E4DC] dark:border-[#2B3830] text-[11px] text-[#59645D] dark:text-[#B3BDB5] hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 hover:text-[#38685A] dark:hover:text-[#9AC7A7] transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#E4E4DC] dark:border-[#2B3830] p-3 shrink-0">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    send();
                  }
                }}
                rows={1}
                maxLength={2000}
                placeholder="Ask about his projects, stack, experience…"
                aria-label="Message"
                className="flex-1 resize-none max-h-24 px-3 py-2 rounded-lg bg-[#F1F0EB] dark:bg-[#121815] border border-[#E4E4DC] dark:border-[#2B3830] text-xs text-[#222923] dark:text-[#EEF2EC] placeholder-[#818980] focus:border-[#38685A]/50 dark:focus:border-[#9AC7A7]/50 focus:outline-none transition-colors"
                style={{ height: "auto" }}
                onInput={(event) => {
                  const target = event.currentTarget;
                  target.style.height = "auto";
                  target.style.height = `${Math.min(target.scrollHeight, 96)}px`;
                }}
              />
              <button
                type="button"
                onClick={() => send()}
                disabled={pending || draft.trim().length === 0}
                aria-label="Send message"
                className="w-9 h-9 shrink-0 rounded-lg bg-[#38685A] hover:bg-[#2D5549] disabled:bg-[#D3D5CC] dark:disabled:bg-[#39483D] disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {pending ? (
                  <Send className="w-4 h-4 opacity-50" />
                ) : (
                  <ArrowUp className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="mt-2 text-[10px] font-mono text-[#818980] text-center">
              Answers grounded in his resume
            </p>
          </div>
        </div>
      )}
    </>
  );
}
