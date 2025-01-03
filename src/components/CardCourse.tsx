import Image from 'next/image';
import React from 'react';

// Définir une interface pour les props
interface CardCourseProps {
    image: string;
    category: string;
    description: string;
}

const CardCourse: React.FC<CardCourseProps> = ({image, category, description}) => {
    return (
        <article
            className="max-w-sm mx-auto overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-xl hover:cursor-pointer">
            <div className="relative">
                <Image
                    className="w-full h-64 object-cover rounded-t-xl"
                    src={image}
                    alt={category}
                    width={300}
                    height={300}
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0"/>
            </div>

            <div className="bg-neutral-900/95 p-6 rounded-b-xl">
                <div className="flex justify-start mb-4">
                    <span
                        className="inline-block border border-[#D4AF37] text-[#D4AF37] rounded-full px-6 py-1 text-sm font-medium transition-colors hover:bg-[#D4AF37] hover:text-neutral-900">
                        {category}
                    </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                <div className="flex items-center space-x-2 text-gray-200">
                    <span className="font-bold">Par</span>
                    <span className="font-medium">Sandro Lu</span>
                </div>
            </div>
        </article>
    );
};

export default CardCourse;
