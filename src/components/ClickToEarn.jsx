import React from 'react'
import CustomHeading from './common/CustomHeading'
import Image from 'next/image';
import { TelegramIcon } from '@/utils/icons';
const ClickToEarn = () => {
  return (
    <>
      <div className='bg-cover bg-center bg-no-repeat bg-[url("/assets/images/webp/click-earn-arcade-bg-img.webp")] h-[900px] max-md:h-full'>
        <div className="max-w-[1440px] mx-auto px-4 relative">
          <div className="">
            <div className="relative max-w-[555px] translate-x-[-45px] max-md:translate-x-0 ml-auto z-10 max-md:!mx-auto">
              <CustomHeading
                text={"Click-To-Earn and arcade "}
                className="text-center pt-[100px] max-w-[555px] ml-auto max-md:!mx-auto max-md:pt-10 max-md-text-[52px] max-md:leading-[100%]"
              />
              <Image
                src="/assets/images/png/casino-heading.png"
                alt="heading"
                width={250}
                height={105}
                className="w-full max-w-[250px] absolute bottom-[-32%] left-1/2 -translate-x-1/2 pointer-events-none max-md:max-w-[205px] max-md:bottom-[-45%]"
              />
            </div>
            <div className="relative max-w-[682px] ml-auto">
              <Image
                src="/assets/images/png/click-to-earn-text-bg.png"
                width={682}
                height={358}
                className="w-full max-w-[682px] h-[401px] max-md:h-[545px] absolute mt-[45px]"
              />
              <p className="relative z-10 font-normal text-2xl text-[#0E0E0E] leading-[180%] max-w-[622px] px-[30px] max-md:text-xl pt-[80px] max-md:pt-[96px]">
                HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m
                impressed! Means you’re serious about pizza, vibes, and big-time
                wins. Catch me at the slots or the poker table, always *ALL-IN*
                for that next big score. It’s the thrill, baby—the gamble, the
                grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE!
                Wanna roll with the best? Smash that button, start stackin’ up,
                and show me what you got. FEELS GREAT MAN!
              </p>
              <div className="flex items-center justify-center gap-10 mt-10 max-md:flex-col">
                <button className=" mt-5 cursor-pointer max-md:min-w-[343px] bg-[url(/assets/images/webp/btn-bg.webp)] bg-[length:100%_100%] lg:min-w-[214px] h-[74px] flex justify-center items-center transition-all ease-linear duration-300  hover:scale-y-110 md:max-w-48 sm:max-w-40 max-w-[132px] w-full">
                  <TelegramIcon />
                  <h3 className="font-luckiest font-normal lg:text-[36px] !text-2xl text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5">
                    Play now
                  </h3>
                </button>
                <button className=" mt-5 max-md:min-w-[343px] max-md:mt-0 cursor-pointer bg-[url(/assets/images/png/green-btn-bg-img.png)] bg-[length:100%_100%] lg:min-w-[214px] h-[74px] flex justify-center items-center transition-all ease-linear duration-300  hover:scale-y-110 md:max-w-48 sm:max-w-40 max-w-[132px] w-full">
                  <TelegramIcon />
                  <h3 className="font-luckiest font-normal lg:text-[36px] !text-2xl text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5">
                    mini app
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClickToEarn