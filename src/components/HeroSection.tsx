import React from "react";

interface HeroSectionProps {
    title: string;
    highlight: string;
    description: string;
}

export default function HeroSection({
                                        title,
                                        highlight,
                                        description,
                                    }: HeroSectionProps) {
    return (
        <section className="text-center mb-12 md:mb-16">
            <h1 className="mb-6">
            <span className="text-white text-2xl md:text-3xl lg:text-4xl block mb-2">
                {title}
            </span>
            <span className="text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl font-bold block tracking-tight">
                {highlight}
            </span>
            </h1>
            <p className="text-sm md:text-base max-w-2xl mx-auto text-zinc-300">
                {description}
            </p>
        </section>
    );
}
