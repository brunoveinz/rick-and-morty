'use client'
import React, { useState, useEffect } from 'react';
import SectionCard from '../shared/section-card';

const AlternatingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
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
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setIsTransitioning(false);
      }, 500); // La mitad de la duración de la transición
    }, 3000);
    
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="col-span-6">
      <div className={`transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <SectionCard 
          image={cards[activeIndex].image} 
          title={cards[activeIndex].title} 
          url={cards[activeIndex].url} 
        />
      </div>
    </div>
  );
};

export default AlternatingCards;
