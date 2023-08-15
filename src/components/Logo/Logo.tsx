import React from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <div className='fixed w-full h-screen flex items-center justify-center'>
      <Image
        className='m-auto scale-80 md:scale-100 translate-y-[-16vh] md:translate-y-[-18vh] lg:translate-y-[-16vh] xl:translate-y-[-15vh]'
        src='/images/logo.svg'
        width={450}
        height={450}
        alt='Website Logo'
      />
    </div>
  );
};
