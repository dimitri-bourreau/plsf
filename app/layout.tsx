import type { Metadata } from "next";
import "./globals.css";
import { BackgroundLines } from "@/components/background-lines.component";
import { ReactNode } from "react";

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
      <body className="font-verdana flex flex-col gap-6 items-center justify-between h-screen p-10">
        <BackgroundLines />
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-7xl font-julius">RELIX 🐇</h1>
          <h2 className="text-xl font-julius">
            Le Dico Elix, en plus rapide... quand leurs vidéos fonctionnent 🤷
          </h2>
        </div>
        {children}
      </body>
    </html>
  );
}
