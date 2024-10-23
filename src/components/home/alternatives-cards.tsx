"use client";

import React, { useState, useEffect } from 'react';
import SectionCard from '../shared/section-card';


const AlternatingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      title: 'Personajes',
      url: '/personajes',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
      title: 'Capitulos',
      url: '/capitulos',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Cambia cada 3 segundos.

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="col-span-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <SectionCard image={card.image} title={card.title} url={card.url} />
        </div>
      ))}
    </div>
  );
};

export default AlternatingCards;
