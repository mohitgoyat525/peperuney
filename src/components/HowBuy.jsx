import React from "react";
import Heading from "../components/common/CustomHeading";
import { CARDS_LIST,} from "../utils/helper";
import Image from "next/image";
import { CopyICon } from "@/utils/icons";
import CustomPeperuneyAnimation from "./common/CustomPeperuneyAnimation";
const HowBuy = () => {
  return (
    <>
      <div className="h-[130px]">
        <CustomPeperuneyAnimation
          customClass="bg-[#067A52]"
          parentClass="!relative !z-10"
          imgClass="!py-0"
        />
      </div>
      <div className="relative bg-white z-10">
        <div className="bg-[#06754E] mt-[72px] max-md:mt-6 relative z-10">
        <Image
          className="absolute sm:top-[-105px] -top-[60px] w-full h-[69px] sm:h-[164px] lg:h-[195px] bg-[#06754E]"
          src="/assets/images/webp/how-buy-layer.webp"
          width={1920}
          height={777}
          alt="how-layer"
          />
          </div>
        <div className="flex justify-center flex-col items-center pb-10 relative z-10 bg-white translate-y-[48px] max-sm:translate-y-3">
          <Heading
            className="text-center lg:pt-[115px] pt-11"
            text={"HOW TO BUY"}
          />
          <Image
            className="sm:max-w-[365px] max-w-[231px] sm:-mt-5 -mt-3 max-sm:h-[80px] pointer-events-none"
            width={365}
            height={105}
            src="/assets/images/webp/how-buy-peperuney.webp"
            alt="how-peperuney"
          />
        </div>
        <div className="bg-[url('/assets/images/webp/how-to-buy-img.webp')] bg-cover bg-no-repeat bg-center lg:pt-[140px] pt-[63px] sm:pt-16 max-w-[1435px] mx-auto">
          <div className="max-w-[1080px] w-full mx-auto px-5">
            <div className="flex md:flex-row lg:gap-9 gap-5 flex-col justify-center">
              {CARDS_LIST.map((card, index) => (
                <div
                  key={card}
                  className={`w-full md:w-[332px] flex flex-col ${
                    index === 1
                      ? "justify-center items-center md:pt-0 pt-8"
                      : "justify-end"
                  } ${index === 1 ? "" : "md:pt-[170px] pt-8"}`}
                >
                  <div
                    className={`p-4 bg-white border-4 border-black ${
                      index === 1
                        ? "xl:w-[322px] lg:w-[285px]"
                        : "xl:w-[322px] lg:w-[285px]"
                    }`}
                  >
                    <div className="flex justify-center -mt-[54px]">
                      <div className="bg-black rotate-[-5deg] px-4 py-3 flex justify-center items-center">
                        <p className="font-luckiest font-normal rotate-[-5deg] lg:text-[54px] lg:leading-[100%] text-[28px] leading-7 text-white">
                          {`0${card.id}`}
                        </p>
                      </div>
                    </div>
                    <h5 className="xl:text-[40px] lg:text-[28px] lg:leading-7 md:text-xl md:leading-5 text-[28px] leading-7 xl:leading-10 lg:max-w-[282px] font-luckiest font-normal text-center mx-auto max-sm:pt-[30px] sm:pt-[10px]">
                      {card.title}
                    </h5>
                    <p className="font-normal font-school md:text-base lg:text-lg text-lg text-center pt-[10px]">
                      {card.description}
                    </p>
                  </div>
                  {index === 1 && (
                    <div className="p-3 bg-white border-4 lg:flex hidden border-black mt-9 gap-3 items-center w-full min-w-[338px]">
                      <p className="font-school text-lg text-nowrap font-school leading-[27px]">
                        CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0
                      </p>
                      <div className="size-8 bg-black flex items-center justify-center min-w-[32px]">
                        <CopyICon />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Image
            className="sm:max-w-[1220px] sm:block hidden w-full mx-auto max-md:pt-7 md:-mt-7"
            src="/assets/images/webp/pizza-image.webp"
            alt="pizza-image"
            width={1920}
            height={700}
          />
          <Image
            className="sm:hidden block max-md:pt-7 w-full"
            src="/assets/images/webp/pizza-image-mobile.webp"
            alt="mobile-pizaa"
            width={1920}
            height={230}
          />
        </div>
      </div>
      <div className="bg-[url('/assets/images/webp/pizza-box-bg.webp')] bg-cover bg-no-repeat bg-center border-t-[2.50px] relative z-10 border-b-[2.50px] sm:border-t-4 sm:border-b-4 border-black  mx-auto">
        <div data-aos="fade-up" className="flex justify-center">
          <Image
            className="sm:max-w-[403px] max-w-[260px] sm:pt-6 sm:pb-4 pt-4 pb-3"
            src="/assets/images/webp/pepeureny-logo.webp"
            alt="pepeuruney-logo"
            width={403}
            height={95}
          />
        </div>
      </div>
    </>
  );
};

export default HowBuy;
