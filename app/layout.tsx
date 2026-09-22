import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/UsamaAliK"),
  title: "Usama Ali — AI Engineer",
  description:
    "Usama Ali is an AI engineer focused on Python, machine learning, RAG systems, LLM applications, FastAPI, and backend development.",
  keywords: [
    "Usama Ali",
    "AI Engineer",
    "GenAI Engineer",
    "CypherShield",
    "Machine Learning",
    "RAG",
    "LLM Applications",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "pgvector",
  ],
  authors: [{ name: "Usama Ali", url: "https://github.com/UsamaAliK" }],
  creator: "Usama Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/UsamaAliK",
    title: "Usama Ali — AI Engineer",
    description:
      "Usama Ali is an AI engineer focused on Python, machine learning, RAG systems, LLM applications, FastAPI, and backend development.",
    siteName: "Usama Ali Portfolio",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Usama Ali Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Usama Ali — AI Engineer",
    description:
      "Usama Ali is an AI engineer focused on Python, machine learning, RAG systems, LLM applications, FastAPI, and backend development.",
    creator: "@UsamaAliK",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-[#111827] dark:text-[#F9FAFB] bg-[#FBFBF9] dark:bg-[#0B0F1A] selection:bg-[#CCFBF1] selection:text-[#0F766E] dark:selection:bg-[#0D9488]/30 dark:selection:text-[#5EEAD4]">
        {children}
      </body>
    </html>
  );
}
