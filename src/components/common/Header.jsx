import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LIST } from '@/utils/helper'

const Header = () => {
  return (
    <nav className="flex items-center justify-between pt-[30px]">
      <Link
        href="/"
        className="bg-[url(/assets/images/webp/btn-bg.webp)] bg-[length:100%_100%] lg:max-w-[262px] flex justify-center transition-all ease-linear duration-300  hover:scale-y-110 md:max-w-48 sm:max-w-40 max-w-[132px] w-full"
      >
        <h3 className="font-luckiest font-normal lg:text-[28px] md:text-xl text-sm text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5">
          BUY $PEPERUNEY
        </h3>
      </Link>
      <div className="flex items-center gap-[32px]">
        <div className="">
          <Image
            src="/assets/images/png/english.png"
            alt="english"
            width={69}
            height={31}
            className="w-full max-w-[69px] max-md:max-w-[50px] pointer-events-none cursor-pointer"
          />
        </div>
        <ul className="flex items-center gap-2">
          {SOCIAL_LIST.map((obj, i) => (
            <li key={i}>
              <Link href={obj.link} target="_blank">
                <Image
                  src={obj.img}
                  alt="social"
                  width={77}
                  height={67}
                  className="w-full max-w-[77px] max-sm:max-w-[34px] transition-all ease-linear duration-300 hover:scale-110"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header