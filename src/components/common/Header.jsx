import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LIST } from '@/utils/helper'

const Header = () => {
  return (
    <nav className="flex items-center justify-between pt-[30px]">
      <Link href="/">
        <Image
          src="/assets/images/webp/logo.webp"
          alt="logo"
          width={262}
          height={72}
          className="w-full max-w-[262px] max-sm:max-w-[120px]"
        />
      </Link>
      <div className="flex items-center">
        <div className=""></div>
        <ul className="flex items-center gap-2">
          {SOCIAL_LIST.map((obj, i) => (
            <li key={i}>
              <Link href={obj.link} target='_blank'><Image src={obj.img} alt="social" width={77} height={67} className='w-full max-w-[77px] max-sm:max-w-[34px] transition-all ease-linear duration-300 hover:scale-125'/></Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header