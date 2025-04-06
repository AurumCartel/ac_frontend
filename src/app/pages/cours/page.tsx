"use client";

import useTitle from "@/hooks/useTitle";
import HeroSection from "@/components/HeroSection";
import CardsGrid from "@/components/CardsGrid";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function Page() {
  useTitle("Cours");
  useScrollToTop();

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <HeroSection
          title="Maîtrisez le trading avec"
          highlight="Aurum Cartel"
          description="Découvrez les analyses fondamentales, les stratégies en trois touches et les techniques de cassure pour devenir un expert du trading."
        />

        {/* Grid Section */}
        <CardsGrid />
      </main>
    </>
  );
}
