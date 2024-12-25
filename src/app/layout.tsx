import type {Metadata} from "next";
import type {Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "Aurum Cartel",
        template: "%s | Aurum Cartel",
    },
    description: "Rejoignez l'Aurum Cartel, une communauté d'entrepreneurs et de traders passionnés",
    keywords: ["trading", "formation", "entrepreneuriat", "finance", "communauté"],
    authors: [{name: "Aurum Cartel"}],
    creator: "Sandro Lu",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: "Aurum Cartel",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={inter.variable}
            suppressHydrationWarning
        >
        <body className="antialiased min-h-screen flex flex-col bg-zinc-950 font-sans">
        <Header/>
        <main className="flex-1 relative isolate">
            <div
                className="fixed inset-0 -z-10 bg-zinc-800"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"/>
            </div>
            <div className="relative w-full min-h-full">
                {children}
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    );
}