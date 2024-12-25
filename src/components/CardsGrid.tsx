import React from 'react';
import CardCourse from './CardCourse';
import cardsData from '../data/dataCourse.json';

const CardsGrid = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardsData.cards.map((card) => (
                    <CardCourse key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
};

export default CardsGrid;