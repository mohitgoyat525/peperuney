import React from 'react'
import Header from './common/Header'
import Image from 'next/image';
import CustomPeperuneyAnimation from './common/CustomPeperuneyAnimation';

const Hero = () => {
  return (
    <>
      <div className='bg-no-repeat bg-cover bg-[url("/assets/images/webp/hero-bg-img.webp")] h-[850px] relative max-md:h-[550px] max-w-[1920px] mx-auto'>
        <div className="max-w-[1300px] mx-auto px-4">
          <Header />
          <Image
            src="/assets/images/webp/hero-heading-img.webp"
            alt="heading"
            width={777}
            height={283}
            className="mt-[63px]  w-full max-w-[777px] max-sm:max-w-[373px] mx-auto pointer-events-none"
          />
        </div>
        <div>
          <Image
            src="/assets/images/webp/delivery-frog.webp"
            alt="frog"
            width={357}
            height={357}
            className="mx-auto w-full pointer-events-none max-w-[357px] absolute left-1/2 -translate-x-1/2 bottom-3  z-[3] max-sm:max-w-[252px] max-md:pt-[64px]"
          />
          <Image
            src="/assets/images/webp/hero-bottom-pizza.webp"
            alt="hero"
            width={1040}
            height={625}
            className="w-full absolute bottom-0 pointer-events-none"
          />
        </div>
      </div>
      <CustomPeperuneyAnimation customClass="bg-[#DA291C] h-[100px]" />
    </>
  );
}

export default Hero