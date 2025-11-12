import type {Metadata} from "next";
import "./globals.css";
import {BackgroundLines} from "@/components/background-lines.component";

export const metadata: Metadata = {
    title: "PLSF",
    description: "Partager des listes de signes de la LSF facilement",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className="font-julius flex flex-col items-center justify-between min-h-screen p-10">
        <BackgroundLines/>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-7xl">PLSF</h1>
            <h2 className="text-xl">Partager facilement des signes de la LSF</h2>
        </div>
        {children}
        </body>
        </html>
    );
}
