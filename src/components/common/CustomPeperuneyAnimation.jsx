import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { TEXT_LIST } from "@/utils/helper";

const CustomPeperuneyAnimation = ({ customClass, imgClass, parentClass }) => {
  return (
    <div
      className={`${customClass} flex items-center border-y-[2.50px] max-sm:border-y-2 border-black w-full h-full`}
    >
      <Marquee direction="left" speed={50} pauseOnHover gradient={false}>
        <div className={`flex items-center gap-10 ${parentClass}`}>
          {TEXT_LIST.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="peperuney"
              width={233}
              height={40}
              className={`${imgClass} w-full max-w-[233px] max-sm:max-w-[134px] py-[30px]`}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CustomPeperuneyAnimation;
