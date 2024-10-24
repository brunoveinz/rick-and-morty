import React from 'react';

type TitleProps = {
    title: string
}

const Title: React.FC<TitleProps> = ({title}) => {
  return (
    <div className='flex items-center justify-center mt-10'>
        <h1 className='font-rick text-5xl'>{title}</h1>
    </div>
  );
};

export default Title;