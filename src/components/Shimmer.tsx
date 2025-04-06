import React from "react";

type ShimmerProps = {
  className: string;
};

const Shimmer: React.FC<ShimmerProps> = ({ className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-zinc-800/0 via-zinc-700/50 to-zinc-800/0"
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    </div>
    <div className="w-full h-full bg-zinc-800/50" />
  </div>
);

// Shimmer pour la section héro
const HeroShimmer = () => (
  <div className="flex flex-col items-center justify-center space-y-4 mb-16 w-full">
    <div className="w-full flex justify-center">
      <Shimmer className="w-3/4 h-12 rounded" /> {/* Titre */}
    </div>
    <div className="w-full flex justify-center">
      <Shimmer className="w-1/2 h-8 rounded" /> {/* Description */}
    </div>
  </div>
);

// Shimmer pour les stats
const StatShimmer = () => (
  <div className="bg-zinc-800/50 rounded-lg p-6 transform">
    <div className="flex items-center justify-center gap-6">
      {/* Icône */}
      <div className="w-12 h-12">
        <Shimmer className="w-full h-full rounded" />
      </div>

      {/* Séparateur */}
      <div className="h-16 w-0.5 bg-zinc-600" />

      {/* Texte */}
      <div className="text-start">
        <Shimmer className="w-20 h-8 rounded mb-2" /> {/* Nombre */}
        <Shimmer className="w-16 h-6 rounded" /> {/* Label */}
      </div>
    </div>
  </div>
);

// Shimmer pour le profil
const ProfileShimmer = () => (
  <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-800/50 rounded-lg p-8">
    {/* Image de profil */}
    <div className="relative w-64 h-64">
      <Shimmer className="w-full h-full rounded-full" />
    </div>

    {/* Contenu */}
    <div className="flex-1 space-y-6">
      {/* Nom */}
      <Shimmer className="w-48 h-8 rounded" />

      {/* Paragraphes */}
      <div className="space-y-4">
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-3/4 h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-2/3 h-4 rounded" />
      </div>
    </div>
  </div>
);

/////Add by elvestino
// shimmer pour le login
const LoginShimmer = () => (
  <div className="flex m-4 md:flex-row gap-8 bg-zinc-800/50 rounded-lg p-8">
    {/* Image de profil */}
    <div className="relative w-64 h-64">
      <Shimmer className="w-full h-10 rounded" />
      <Shimmer className="w-full h-full rounded-full" />
    </div>

    {/* Contenu */}
    <div className="flex-1 ">
      {/* Nom */}
      <Shimmer className="w-48 h-8 rounded" />

      {/* Paragraphes */}
      <div className="space-y-4">
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
        <Shimmer className="w-full h-4 rounded" />
      </div>
    </div>
  </div>
);

export { Shimmer, HeroShimmer, StatShimmer, ProfileShimmer, LoginShimmer };
