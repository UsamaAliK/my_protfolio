import { NextResponse } from "next/server";
import { buildSystemPrompt, type ChatMessage } from "@/lib/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_MODEL = "gemini-3.1-flash-lite";
const API_VERSION = "v1beta";
const MAX_MESSAGES = 24;
const MAX_MESSAGE_CHARS = 2000;
const MAX_OUTPUT_TOKENS = 1024;
const HISTORY_WINDOW = 10;

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;
const buckets = new Map<string, number[]>();

function getApiKey(): string | undefined {
  return process.env.GEMINI_API_KEY || process.env.GEMENI_API_KEY;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (buckets.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (hits.length >= MAX_REQUESTS_PER_WINDOW) {
    buckets.set(ip, hits);
    return true;
  }
  hits.push(now);
  buckets.set(ip, hits);
  return false;
}

function sanitizeHistory(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter(
      (item): item is Record<string, unknown> =>
        typeof item === "object" && item !== null
    )
    .map((item) => ({
      role: item.role === "model" ? ("model" as const) : ("user" as const),
      text: String(item.text ?? "")
        .slice(0, MAX_MESSAGE_CHARS)
        .trim(),
    }))
    .filter((item) => item.text.length > 0)
    .slice(-HISTORY_WINDOW);
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return errorResponse("Chat is not configured yet.", 503);
  }

  if (isRateLimited(getClientIp(request))) {
    return errorResponse("Too many messages. Give it a few seconds.", 429);
  }

  let payload: { messages?: unknown };
  try {
    payload = await request.json();
  } catch {
    return errorResponse("Invalid request body.", 400);
  }

  const history = sanitizeHistory(payload?.messages);
  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return errorResponse("A message is required.", 400);
  }

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const url = `https://generativelanguage.googleapis.com/${API_VERSION}/models/${model}:generateContent`;

  const body = {
    systemInstruction: {
      parts: [{ text: buildSystemPrompt() }],
    },
    contents: history.map((message) => ({
      role: message.role,
      parts: [{ text: message.text }],
    })),
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.4,
      topP: 0.9,
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30_000),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(`[chat] gemini ${response.status}: ${detail.slice(0, 500)}`);
      if (response.status === 429) {
        return errorResponse("The assistant is busy right now. Try again shortly.", 429);
      }
      if (response.status === 400 || response.status === 404) {
        return errorResponse("The assistant is misconfigured. Please contact Usama directly.", 502);
      }
      return errorResponse("Something went wrong. Please try again.", 502);
    }

    const data = await response.json();
    const candidate = data?.candidates?.[0];
    const text = candidate?.content?.parts
      ?.map((part: { text?: string }) => part?.text ?? "")
      .join("")
      .trim();

    if (!text) {
      const blocked = candidate?.finishReason === "SAFETY";
      return errorResponse(
        blocked
          ? "I can't help with that one. Try asking about Usama's background or projects."
          : "The assistant returned an empty response. Please try rephrasing.",
        blocked ? 200 : 502
      );
    }

    return NextResponse.json({ reply: text, model });
  } catch (error) {
    console.error("[chat] request failed:", error);
    return errorResponse("The assistant is unreachable right now. Please try again.", 502);
  }
}

export async function GET() {
  return NextResponse.json({
    ready: Boolean(getApiKey()),
    model: process.env.GEMINI_MODEL || DEFAULT_MODEL,
    maxMessages: MAX_MESSAGES,
  });
}
