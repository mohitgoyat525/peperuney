import React from 'react'
import Image from 'next/image'
import { PARTNERS_LIST } from '@/utils/helper';
const PizzaNomics = () => {
  return (
    <>
      <div className="relative overflow-hidden h-[1805px] max-lg:h-full max-w-[1536px] mx-auto">
        <Image
          src="/assets/images/webp/updated-cheese.webp"
          alt="updated-cheese"
          width={1920}
          height={367}
          className="absolute top-0 w-full z-10"
        />
        <Image
          src="/assets/images/png/pizzanomic-text.png"
          alt="pizzanomic-text"
          width={846}
          height={99}
          className="absolute z-20 w-full max-w-[846px] top-[54px] left-[80px] max-lg:top-10 max-md:top-7 max-sm:top-4 max-sm:left-8 max-sm:max-w-[300px]"
        />
        <div className="bg-[#DA291C] flex lg:flex-row flex-col-reverse justify-between gap-5 pt-[390px] max-lg:pt-36">
          <div className="relative z-10 lg:-mt-10 xl:-mt-20 lg:ml-[60px] xl:ml-[67px]">
            <Image
              className="max-w-[301px] sm:max-w-[420px] xl:max-w-[485px] w-full mx-auto lg:mx-0 max-md:pb-4"
              width={485}
              height={485}
              src="/assets/images/webp/pepe-runny-image.webp"
              alt="peperunry-image"
            />
          </div>
          <div className="xl:max-w-[812px] lg:w-full -mx-5 lg:mx-0">
            <div className="bg-black relative -rotate-3 w-full h-[341px] pb-10 sm:pb-11 flex justify-center items-end xl:-mt-[240px] -mt-[237px] sm:-mt-[225px] lg:-mt-[260px]">
              <p className="font-luckiest font-normal text-[70px] sm:text-[80px] md:text-[85px] xl:text-[135px] leading-[100%] text-white uppercase mb-0.5">
                42 BILLION
              </p>
            </div>
            <p className="font-luckiest text-[40px] sm:text-[80px] sm:leading-custom-8xl font-normal text-white relative my-5 -rotate-3 text-center">
              token supply
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between relative lg:-mt-4  bg-[#DA291C]">
          <div className="bg-black -rotate-[4deg] -mx-7 xl:h-[111px] lg:w-[630px] px-7 my-auto relative z-10">
            <p className="text-white font-luckiest font-normal text-[52px] sm:text-[75px] xl:text-[92px] text-center lg:text-left lg:ml-11 leading-[100%] text-nowrap mb-12 lg:mb-2.5 my-2.5">
              LP BURNED
            </p>
          </div>
          <div className="lg:max-w-[942px] lg:w-full relative z-10 -mt-12 lg:mt-0 -mx-10 lg:mx-0">
            <img
              src="/assets/images/webp/tax-layer.webp"
              alt="taxLayer"
              className="sm:w-full object-cover w-[610px] max-w-[610px] sm:max-w-full"
            />
            <Image
              src="/assets/images/png/zero-tax-text.png"
              width={503}
              height={80}
              alt="heading"
              className="w-full max-w-[503px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <span className="lg:flex bg-crimson-red w-full absolute left-0 hidden -mt-[1px] -top-1 xl:top-10 z-[1] h-24"></span>
        </div>
        <div className="pt-0">
          <Image
            src="/assets/images/webp/lp-burned-img.webp"
            alt="img"
            width={1920}
            height={1112}
            className="w-full absolute bottom-[-120px] max-lg:bottom-0"
                  />
                  <div className=' flex items-center justify-center '>
                  <div className='flex items-center gap-[60px] justify-center flex-wrap absolute bottom-[-20px] z-30 max-md:hidden'>
                      {PARTNERS_LIST.map((obj, i) => (
                          <Image key={i} src={obj} alt='patners' width={360} height={140} className='w-full max-w-[360px]'/>
                      ))}
                      </div>
                      <Image src='/assets/images/webp/sm-patners.webp' alt='patners' width={360} height={140} className='w-full md:hidden absolute bottom-0'/>
                      </div>
        </div>
      </div>
    </>
  );
}

export default PizzaNomics