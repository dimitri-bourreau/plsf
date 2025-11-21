import type { Metadata } from "next";
import "./globals.css";
import { BackgroundLines } from "@/components/background-lines.component";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PLSF",
  description: "Partager des listes de signes de la LSF facilement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-verdana flex flex-col items-center justify-between min-h-screen p-10">
        <BackgroundLines />
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-7xl font-julius">PLSF</h1>
          <h2 className="text-xl font-julius">
            Partagez facilement des signes de la LSF
          </h2>
          <h3 className="font-julius">
            Cherchez des signes, faites une liste, partagez le lien
          </h3>
        </div>
        {children}
      </body>
    </html>
  );
}
