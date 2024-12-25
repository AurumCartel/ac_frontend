import React from "react";
import Image from "next/image";

interface ProfileSectionProps {
    name: string;
    imageSrc: string;
    imageAlt: string;
    description: string[];
}

export default function ProfileSection({
                                           name,
                                           imageSrc,
                                           imageAlt,
                                           description,
                                       }: ProfileSectionProps) {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="order-2 md:order-1">
                    <div className="relative">
                        <Image
                            className="rounded-2xl w-full max-w-md mx-auto shadow-xl"
                            src={imageSrc}
                            width={400}
                            height={400}
                            alt={imageAlt}
                            priority
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="order-1 md:order-2 space-y-4">
                    <h2 className="font-bold text-3xl md:text-4xl text-[#D4AF37]">{name}</h2>
                    <div className="space-y-4 text-sm md:text-base text-zinc-300">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
