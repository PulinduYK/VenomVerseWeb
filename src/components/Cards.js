import React, { useState } from "react";
// Import data
import { product } from "../data";
// Import arrow image
import ArrowImg from "../assets/img/product/cards/arrow.svg";

const Cards = () => {
  // Index state
  const [index, setIndex] = useState(1);
  // Destructure product data
  const { cards } = product;

  return (
    <section className="py-12">
      <div
        className="flex flex-col items-center gap-y-[30px] 
        lg:flex-row lg:gap-x-[30px]"
      >
        {cards.map((card, cardIndex) => {
          const { title, subtitle, delay, icon } = card;
          return (
            <div
              key={cardIndex}
              data-aos="zoom-out"
              data-aos-offset="300"
              data-aos-delay={delay}
              className="cursor-pointer"
              onClick={() => setIndex(cardIndex)}
            >
              <div
                className={`w-[350px] h-[350px] flex flex-col justify-center items-center 
                mx-auto p-[65px] text-center rounded-[12px] transition-all relative z-10 
                ${
                  index === cardIndex
                    ? "bg-white shadow-lg border border-gray-300"
                    : "bg-gray-100"
                }`}
                aria-label={`Select ${title}`}
              >
                {/* Card Icon */}
                <div className="mb-6">
                  {icon ? <img src={icon} alt={title} /> : <span>No Image</span>}
                </div>

                {/* Card Title */}
                <div className="mb-3 text-[30px] font-medium">{title}</div>

                {/* Card Subtitle */}
                <p className="mb-6 text-light">{subtitle}</p>

                {/* Arrow Image (Only visible for active card) */}
                {index === cardIndex && <img src={ArrowImg} alt="Active Indicator" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
