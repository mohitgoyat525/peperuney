"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";

const PeperunyTonnes = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const youtubeHandler = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className="border-y-[4px] border-solid border-[#000000] w-full h-[39px] bg-[#8B8581]"></div>
      <div className='bg-center bg-cover bg-no-repeat h-[900px] relative bg-[url("/assets/images/webp/peperuney-tonnes-bg.webp")] max-w-[1920px] mx-auto'>
        <div className="max-w-[634px] ml-auto h-[158px]">
          <CustomHeading
            text={"$PEPERUNEY"}
            className="text-center pt-[100px] max-md:pt-[50px] max-sm:pt-10"
          />
          <Image
            src="/assets/images/png/toons-heading.png"
            width={250}
            height={105}
            alt="heading"
            className="w-full max-w-[250px] mx-auto translate-y-[-23%] pointer-events-none"
          />
        </div>

        <Image
          src="/assets/images/webp/peperuney-watch-tv.webp"
          alt="watching-tv"
          width={668}
          height={524}
          className="w-full max-w-[668px] absolute bottom-0 right-0 z-10"
        />

        <div
          onClick={youtubeHandler}
          className="bg-cover bg-center bg-no-repeat 2xl:w-[700px] xl:w-[500px] w-[400px] xl:h-[380px] h-[300px] max-xl:w-[500px] max-xl:h-[370px] max-xl:left-[44.5%] 2xl:h-[495px] absolute 2xl:top-[60.9%] xl:top-[58%] max-xl:top-[58%] max-sm:h-[322px] max-sm:left-[50%] max-sm:w-[360px] left-[45.8%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
        >
          {!isVideoPlaying ? (
            <Image
              src="/assets/images/webp/video-bg-img.webp"
              alt="Video Thumbnail"
              width={700}
              height={495}
              className="w-full h-full rounded-3xl object-cover"
            />
          ) : (
            <iframe
              src="https://www.youtube.com/embed/dLKYFu_sMTM?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-3xl"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PeperunyTonnes;
