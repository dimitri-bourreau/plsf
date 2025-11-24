import { ReactNode } from "react";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { BackgroundLines } from "@/components/background-lines.component";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RELIX",
  description: "Le Dico Elix, en plus rapide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#4CDAE0] font-verdana flex flex-col gap-6 items-center justify-between h-screen p-10">
        <NuqsAdapter>
          <BackgroundLines />
          <header className="flex flex-col gap-4 items-center">
            <Link
              href="/"
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <h1 className="text-7xl font-julius">RELIX 🐇</h1>
              <h2 className="text-xl font-julius">
                Le Dico Elix en plus rapide
              </h2>
            </Link>
            <Link
              href="/voc"
              className="bg-indigo-100/50 hover:bg-indigo-100 cursor-pointer px-4 py-2 rounded"
            >
              Vocabulaire vu en cours
            </Link>
          </header>

          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
