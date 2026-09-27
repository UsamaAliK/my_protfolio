"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Bot,
  RotateCcw,
  Send,
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
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 h-12 pl-4 pr-5 rounded-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold tracking-wide shadow-lg shadow-[#0D9488]/25 transition-all hover:shadow-xl hover:shadow-[#0D9488]/30 active:scale-95 cursor-pointer group"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            {!open && (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[#0D9488] animate-halo group-hover:opacity-0 transition-opacity"
              />
            )}
            <span
              aria-hidden="true"
              className="text-[17px] leading-none animate-wave group-hover:animate-wave-slow origin-[70%_85%] select-none"
              style={{ display: "inline-block" }}
            >
              👋
            </span>
          </>
        )}
        <span className="hidden sm:inline">{open ? "Close" : "Ask about me"}</span>
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#CCFBF1] text-[#0F766E] text-[10px] font-bold flex items-center justify-center border-2 border-[#0D9488]">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Portfolio chat assistant"
          className="fixed z-50 bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:w-[23rem] h-[min(30rem,72vh)] flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#E8E8E4] dark:border-[#1F2937] bg-[#FBFBF9] dark:bg-[#0B0F1A] shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-black border border-[#111827] dark:border-[#374151] shrink-0">
                <img
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#111827] dark:text-[#F9FAFB] truncate flex items-center gap-1.5">
                  <span>Usama&apos;s Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse shrink-0" />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={reset}
                aria-label="Reset conversation"
                className="p-1.5 rounded-md text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat assistant"
                className="p-1.5 rounded-md text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] transition-colors cursor-pointer"
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
                    <div className="w-6 h-6 rounded-md bg-[#CCFBF1] dark:bg-[#0D9488]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? "bg-[#0D9488] text-white rounded-br-sm"
                        : "bg-[#F4F4F0] dark:bg-[#1F2937] text-[#374151] dark:text-[#D1D5DB] rounded-bl-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                  {isUser && (
                    <div className="w-6 h-6 rounded-md bg-[#111827] dark:bg-[#F9FAFB] flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-white dark:text-[#111827]" />
                    </div>
                  )}
                </div>
              );
            })}

            {pending && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-md bg-[#CCFBF1] dark:bg-[#0D9488]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#5EEAD4]" />
                </div>
                <div className="px-3 py-2.5 rounded-xl rounded-bl-sm bg-[#F4F4F0] dark:bg-[#1F2937] flex items-center gap-1">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full bg-[#0D9488] dark:bg-[#5EEAD4] animate-bounce"
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
                    className="w-full text-left px-3 py-2 rounded-lg bg-white dark:bg-[#0B0F1A] border border-[#E8E8E4] dark:border-[#1F2937] text-[11px] text-[#4B5563] dark:text-[#9CA3AF] hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 hover:text-[#0D9488] dark:hover:text-[#5EEAD4] transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#E8E8E4] dark:border-[#1F2937] p-3 shrink-0">
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
                className="flex-1 resize-none max-h-24 px-3 py-2 rounded-lg bg-[#F4F4F0] dark:bg-[#0B0F1A] border border-[#E8E8E4] dark:border-[#1F2937] text-xs text-[#111827] dark:text-[#F9FAFB] placeholder-[#9CA3AF] focus:border-[#0D9488]/50 dark:focus:border-[#5EEAD4]/50 focus:outline-none transition-colors"
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
                className="w-9 h-9 shrink-0 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] disabled:bg-[#D1D1CB] dark:disabled:bg-[#374151] disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {pending ? (
                  <Send className="w-4 h-4 opacity-50" />
                ) : (
                  <ArrowUp className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="mt-2 text-[10px] font-mono text-[#9CA3AF] text-center">
              Answers grounded in his resume
            </p>
          </div>
        </div>
      )}
    </>
  );
}
