import React from 'react';
import { BackgroundWave } from '../BackgroundWave/BackgroundWave';

export const Background: React.FC = () => {
  return (
    <div className='w-full h-full'>
      <BackgroundWave
        imageSrc='/images/wave_1.svg'
        className='fixed bottom-0 translate-y-[5vh] md:translate-y-[20vh] lg:translate-y-[30vh] xl:translate-y-[60vh] z-40'
      />
      <BackgroundWave
        imageSrc='/images/wave_2.svg'
        className='fixed bottom-0 translate-y-[-1vh] md:translate-y-[14vh] lg:translate-y-[24vh] xl:translate-y-[54vh] z-30'
      />
      <BackgroundWave
        imageSrc='/images/wave_3.svg'
        className='fixed bottom-0 translate-y-[-7vh] md:translate-y-[7vh] lg:translate-y-[18vh] xl:translate-y-[48vh] z-20'
      />
      <BackgroundWave
        imageSrc='/images/wave_4.svg'
        className='fixed bottom-0 translate-y-[-13vh] md:translate-y-[0vh] lg:translate-y-[12vh] xl:translate-y-[42vh] z-10'
      />
    </div>
  );
};
