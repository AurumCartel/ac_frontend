"use client";

import React, { useEffect, useState } from "react";
import useTitle from "@/hooks/useTitle";
import { FaUsers } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import { Shimmer, StatShimmer, ProfileShimmer } from "@/components/Shimmer";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function Page() {
  useTitle("Accueil");
  useScrollToTop();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
      {isLoading ? (
        <>
          <div className="space-y-4 mb-16">
            <Shimmer className="w-3/4 h-12 rounded" />
            <Shimmer className="w-1/2 h-8 rounded" />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <StatShimmer />
            <StatShimmer />
          </section>

          <ProfileShimmer />
        </>
      ) : (
        <>
          <HeroSection
            title="Bienvenu(e) sur le site officiel de la team"
            highlight="AURUM CARTEL"
            description="La team où on s'entraide pour atteindre le sommet ensemble, ensemble pour un objectif commun !"
          />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-zinc-800/50 rounded-lg p-6 transform">
              <div className="flex items-center justify-center gap-6">
                <FaUsers className="w-12 h-12 text-[#D4AF37]" />
                <div className="h-16 w-0.5 bg-zinc-600" />
                <div className="text-start">
                  <span className="text-3xl font-bold text-white">+300</span>
                  <p className="text-zinc-300 text-lg">Membres</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6 transform">
              <div className="flex items-center justify-center gap-6">
                <ImStatsDots className="w-12 h-12 text-[#D4AF37]" />
                <div className="h-16 w-0.5 bg-zinc-600" />
                <div className="text-start">
                  <span className="text-3xl font-bold text-white">03</span>
                  <p className="text-zinc-300 text-lg">Analyses</p>
                </div>
              </div>
            </div>
          </section>

          <ProfileSection
            name="Sandro Lu"
            imageSrc="/assets/images/sandro1.jpg"
            imageAlt="Sandro Lu - Fondateur d'Aurum Cartel"
            description={[
              "Un jeune entrepreneur malgache passionné par l'indépendance financière et la liberté géographique.",
              "Fondateur de la team AURUM Cartel, il est également formateur en trading, partageant son expertise avec ceux qui aspirent à réussir dans le domaine du trading professionnel. Ambitieux et visionnaire, Sandro incarne un modèle de réussite basé sur l'autonomie et l'innovation.",
              "Il accompagne ses élèves dans leur parcours vers la liberté financière, leur offrant les clés pour maîtriser le marché et transformer leur vie. Grâce à son approche pragmatique et inspirante, il aide ceux qui souhaitent s'affranchir des contraintes géographiques et financières, en leur ouvrant les portes d'une nouvelle réalité.",
            ]}
          />
        </>
      )}
    </main>
  );
}
