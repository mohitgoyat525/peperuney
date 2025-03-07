import React from "react";
import Image from "next/image";
const MeetPeperuny = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#A6E3F5] to-white relative h-[2239px] overflow-hidden max-lg:h-full">
        <Image
          src="/assets/images/png/cloud-img.png"
          alt="cloud-img"
          width={356}
          height={173}
          className="w-full pointer-events-none max-w-[356px] absolute top-[240px] left-9"
        />
        <Image
          src="/assets/images/png/top-cloud-img.png"
          alt="cloud-img-two"
          width={356}
          height={173}
          className="w-full pointer-events-none max-w-[356px] absolute top-[170px] right-9"
        />
        <Image
          src="/assets/images/png/small-cloud-img.png"
          alt="cloud-img=three"
          width={356}
          height={173}
          className="w-full pointer-events-none max-w-[356px] absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/webp/melting-cheese-top-img.webp"
            alt="cheese"
            width={1920}
            height={268}
            className="w-full max-w-[1920px] mx-auto absolute top-0 translate-y-[-45px] max-lg:translate-y-0"
          />
        </div>
        <div className="max-w-[1300px] mx-auto sticky top-0 px-4 max-md:pr-4 max-md:pl-0 z-10">
          <div className="flex pt-[260px] max-lg:pt-[180px] max-md:pt-[100px] max-sm:pt-[65px] max-lg:flex-col-reverse">
            <div className="lg:w-[46%] w-full max-sm:pt-10">
              <Image
                src="/assets/images/webp/delivery-frog-cloud-img.webp"
                alt="frog"
                width={580}
                height={530}
                className="w-full pointer-events-none max-w-[580px] max-lg:max-w-[336px] max-lg:mx-auto max-lg:-translate-y-16"
              />
            </div>
            <div className="lg:w-[56%] w-full">
              <Image
                src="/assets/images/png/meet-peperuney-heading-text.png"
                alt="heading"
                className="w-full mx-auto max-w-[613px] mb-6 max-md:translate-x-[10px]"
                width={613}
                height={80}
              />
              <div className='sm:bg-[url("/assets/images/webp/meet-text-bg-img.webp")] max-sm:bg-[url("/assets/images/webp/meet-small-bg.webp")] max-sm:min-w-[355px] w-full xl:min-w-[717px] flex items-center justify-center flex-col  bg-[length:100%_100%] bg-no-repeat bg-center sm:px-7 sm:py-10 px-3'>
                <div className="flex items-center sm:-mt-16 xl:-mt-20 max-sm:hidden">
                  <Image
                    src="/assets/images/webp/pizza-guy-heading.webp"
                    alt="heading"
                    width={337}
                    height={102}
                    className="w-full max-w-[337px] mx-auto"
                  />
                </div>
                <div className="flex items-center justify-center ps-9 flex-col mt-[22px] max-md:ps-3 max-md:mt-20">
                  <p className="text-[#0E0E0E] font-normal text-2xl max-md:text-xl leading-[43.2px] max-md:leading-[28px] font-school max-w-[642px] mx-auto max-md:max-w-[310px]">
                    The pizza-slingin’, joint-tokin’, all-in degen fresh from
                    the Matt Furie multiverse, here to leave his greasy mark on
                    the memeverse one slice at a time. PepeRuney's the king of
                    high-stakes and low-stress vibin’. Spot the red hat and
                    polo? You know it’s pizza time, baby! Whether he’s hustlin’
                    for the next big score or chillin’ with the Boys Club,
                    PepeRuney guarantees one thing: the vibes and the dough are
                    always rollin’
                  </p>
                  <div className="border border-solid w-full max-w-[624px] max-md:max-w-[310px] mx-auto border-[#0E0E0E] my-5 max-sm:my-2"></div>
                  <div className="flex justify-between mb-4 items-center gap-[49px] max-[1280px]:!gap-6 max-sm:!gap-2 max-md:pb-3">
                    <p className="font-school text-[32px] max-md:text-2xl text-[#0E0E0E] leading-[44.56px] max-sm:max-w-[173px] max-md:leading-[33.42px] whitespace-nowrap">
                      FEELS GREAT MAN!
                    </p>
                    <button className="cursor-pointer bg-[url(/assets/images/webp/btn-bg.webp)] bg-[length:100%_100%] lg:min-w-[262px] max-[1280px]:!min-w-[220px] max-lg:!min-w-[180px] max-md:!min-w-[126px] flex justify-center transition-all ease-linear duration-300  hover:scale-y-110 md:max-w-48 sm:max-w-40 max-w-[132px] w-full">
                      <h3 className="font-luckiest font-normal lg:text-[28px] md:text-xl text-sm text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5">
                        Manifesto
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[346px] pb-[196px]">
          <Image
            src="/assets/images/png/midum-cloud-img.png"
            width={356}
            height={173}
            alt="cloud"
            className="w-full pointer-events-none max-w-[356px] absolute  left-[10%] z-10 max-lg:hidden"
          />
          <Image
            src="/assets/images/png/midum-cloud-img.png"
            width={356}
            height={173}
            alt="cloud"
            className="w-full pointer-events-none max-w-[356px] max-lg:hidden absolute translate-y-[60px] right-[10%] z-10"
          />
        </div>
        <div className="flex items-center justify-center w-full max-lg:mt-[990px">
          <Image
            src="/assets/images/webp/meet-pizza-img.webp"
            alt="pizza-town"
            width={1920}
            height={1080}
            className="mx-auto pointer-events-none w-full max-w-[1920px] absolute bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default MeetPeperuny;
