import React from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";
const MeetPeperuny = () => {
  return (
    <>
          <div className="bg-gradient-to-b from-[#A6E3F5] to-white relative">
              <Image src='/assets/images/png/cloud-img.png' alt="cloud-img" width={356} height={173} className="w-full pointer-events-none max-w-[356px] absolute top-[176px] left-9" />
              <Image src='/assets/images/png/top-cloud-img.png' alt="cloud-img-two" width={356} height={173} className="w-full pointer-events-none max-w-[356px] absolute top-[170px] right-9"/>
              <Image src='/assets/images/png/small-cloud-img.png' alt="cloud-img=three" width={356} height={173} className="w-full pointer-events-none max-w-[356px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Image
          src="/assets/images/webp/melting-cheese-top-img.webp"
          alt="cheese"
          width={1920}
          height={268}
          className="w-full max-w-[1920px] mx-auto absolute top-0"
        />
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="flex pt-[285px] max-lg:pt-[180px] max-md:pt-[100px] max-sm:pt-[65px] max-lg:flex-col-reverse">
            <div className="lg:w-[46%] w-full">
              <Image
                src="/assets/images/webp/delivery-frog-cloud-img.webp"
                alt="frog"
                width={580}
                height={530}
                className="w-full pointer-events-none max-w-[580px] max-md:max-w-[336px]"
              />
            </div>
            <div className="lg:w-[56%] w-full">
                          <Image src='/assets/images/png/meet-peperuney-heading-text.png' alt="heading" className="w-full max-w-[613px] mb-6" width={613} height={80}/>
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
                  <div className="border border-solid w-full max-w-[624px] max-md:max-w-[310px] mx-auto border-[#0E0E0E] my-5"></div>
                  <div className="flex justify-between mb-4 items-center gap-[49px] max-md:gap-6 max-sm:gap-[61px]">
                    <p className="font-school text-[32px] max-md:text-2xl text-[#0E0E0E] leading-[44.56px] max-sm:max-w-[173px] max-md:leading-[33.42px] whitespace-nowrap">
                      FEELS GREAT MAN!
                    </p>
                    <button className="w-full max-w-[262px] max-md:min-w-[127px] max-md:max-w-[127px] transition-all ease-linear duration-300 hover:scale-110 cursor-pointer">
                      <Image
                        src="/assets/images/png/manifesto-btn.png"
                        alt="btn"
                        width={262}
                        height={74}
                        className="w-full max-w-[262px] max-md:man-w-[127px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetPeperuny;
