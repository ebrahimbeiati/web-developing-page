import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-30 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full bg-black   bg-grid-white/[0.04]  absolute flex items-center justify-center top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h1 className=" mt-30 text-5xl font-bold text-center text-white">
              Web Developing Page
            </h1>

            <TextGenerateEffect
              className="text-center text-[40px]  md:text-5xl lg:text-6xl"
              words="Transforming Your ideas to incredible Websites"
            />
            <p className="text-center  md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Let&apos;s build something great
            </p>
            <a href="#about">
              <MagicButton
                title="Watch Our works"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
