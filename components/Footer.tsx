import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
      const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading  lg:max-w-[45vw]">
          Let&apos;s build something great for{" "}
          <span className="text-purple">You</span>
        </h1>
        <p className="text-center text-sm mt-4 mb-4 lg:max-w-[45vw]">
          We are always open to discuss your project, idea or anything to get
          you started.
        </p>
        <a href="mailto:webdesignanddev2@gmail.com">
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="text-center mt-16 md:flex-row flex-col items-center flex justify-between  text-sm lg:max-w-[45vw]">
        <p className="md:text-base text-sm md:font-normal  ">
          &copy; {currentYear} Web-Design&Developing. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center mt-4 md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer