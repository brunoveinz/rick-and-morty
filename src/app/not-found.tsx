'use client'

import Image from 'next/image';
import React, { useState } from 'react';

const NotFound: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='relative'>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
            <span className='font-rick ml-3'>Cargando...</span>
          </div>
        )}
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/20.jpeg"
          alt='not-found'
          width={300}
          height={300}
          className='rounded-full mb-3'
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />
      </div>
      <h1 className='font-rick text-5xl mb-4'>Pagina no encontrada</h1>
      <h2 className='font-rick text-xl'>Estas perdido en el universo muchacho!</h2>
    </div>
  );
};

export default NotFound;