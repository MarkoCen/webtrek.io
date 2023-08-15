import React from 'react';
import Image from 'next/image';

interface BackgroundWaveProps {
  imageSrc: string;
  className?: string;
}

export const BackgroundWave: React.FC<BackgroundWaveProps> = ({
  imageSrc,
  className,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Image
        src={imageSrc}
        className='w-full bg-wave'
        alt='Background Wave'
        width={0}
        height={0}
      />
    </div>
  );
};
