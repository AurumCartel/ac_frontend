import React from "react";
import Link from "next/link";
import cardsData from "../data/dataCourse.json";
import Image from "next/image";

const CardsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.cards.map((card) => (
          <Link
            key={card.id}
            href={`/pages/analyse?category=${card.category
              .toLowerCase()
              .replace(/ /g, "-")}`}
          >
            <Image
              src={card.image}
              className="text-2xl font-bold rounded-t-xl"
              width={500}
              height={500}
              alt="AurumCartel"
            />
            <div className=" bg-[#171717] text-white p-6 rounded-b-xl shadow-lg hover:bg-[#242424]">
              <h3 className="w-52  text-xl text-white font-bold px-4 py-1 border-2 border-[#D4AF37] mb-2 rounded-xl">
                {card.category}
              </h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
