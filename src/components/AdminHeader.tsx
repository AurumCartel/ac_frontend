"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Menu, X} from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Simulation de l'état de l'utilisateur connecté
    const isUserLoggedIn = true; // Remplacer par true pour simuler un utilisateur connecté

    const navigation = [
        {name: "Accueil", href: "/pages/home"},
        {name: "Cours", href: "/pages/cours"},
        {name: "Messagerie", href: "/pages/messagerie"},
        {name: "Utilisateurs", href: "/pages/utilisateurs"},
        {name: "Gestion des cours", href: "/pages/gestion-cours"},
    ];

    // Fonction de redirection pour empêcher l'accès si l'utilisateur n'est pas connecté
    const handleNavigation = (href: string) => {
        if (!isUserLoggedIn && href !== "/pages/home") {
            alert("Vous devez être connecté pour accéder à cette page.");
            return false; // Bloque la navigation
        }
        return true; // Permet la navigation
    };

    return (
        <header className="bg-zinc-900 text-white w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/assets/images/Ac2.jpg"
                            width={48}
                            height={48}
                            alt="AurumCartel"
                            className="h-12 w-12 object-cover"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (!handleNavigation(item.href)) {
                                        e.preventDefault(); // Empêche la navigation si non connecté
                                    }
                                }}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? "underline underline-offset-8 decoration-[#D4AF37] text-[#D4AF37]"
                                        : "text-zinc-300 hover:[#D4AF37] hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile or Login/Signup */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isUserLoggedIn ? (
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                                <span className="font-medium text-sm">Sandro Lu</span>
                                <Image
                                    className="rounded-full border border-zinc-700"
                                    src="/assets/images/Ac2.jpg"
                                    width={32}
                                    height={32}
                                    alt="AurumCartel"
                                />
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <Link
                                    href="/login"
                                    className="text-sm text-[#D4AF37] hover:underline"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href="/signup"
                                    className="text-sm text-[#D4AF37] hover:underline"
                                >
                                    Inscription
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6"/>
                            ) : (
                                <Menu className="h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (!handleNavigation(item.href)) {
                                        e.preventDefault(); // Empêche la navigation si non connecté
                                    }
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    pathname === item.href
                                        ? "bg-[#D4AF37] text-white"
                                        : "text-zinc-300 hover:bg-[#D4AF37] hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-zinc-800">
                        <div className="flex items-center px-5">
                            <Image
                                className="rounded-full border border-zinc-700"
                                src="/assets/images/Ac2.jpg"
                                width={32}
                                height={32}
                                alt="AurumCartel"
                            />
                            <div className="ml-3">
                                <div className="text-base font-medium">
                                    {isUserLoggedIn ? "Sandro Lu" : "Utilisateur non connecté"}
                                </div>
                                {isUserLoggedIn ? (
                                    <div className="flex items-center">
                                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                        <span className="ml-2 text-sm text-zinc-400">En ligne</span>
                                    </div>
                                ) : (
                                    <div className="text-sm text-zinc-400">Veuillez vous connecter</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
