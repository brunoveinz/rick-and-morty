import Image from 'next/image';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div>
        <Image
         src="https://rickandmortyapi.com/api/character/avatar/20.jpeg"
         alt='not-found'
         width={300}
         height={300}
         className='rounded-full mb-3'
        />
      </div>
      <h1 className='font-rick text-5xl mb-4'>Pagina no encontrada</h1>
      <h2 className='font-rick text-xl'>Estas perdido en el universo muchacho!</h2>
    </div>
  );
};

export default NotFound;

