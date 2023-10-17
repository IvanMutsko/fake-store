import React from "react";

import {
  BsTelegram,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full py-5 px-10  border-t border-t-gray-500 border-solid bg-gray-900 sticky bottom-0">
      <div className="mb-6 flex gap-8">
        <a
          href="#"
          className="inline-block text-orange-500 hover:scale-110 text-5xl"
        >
          <BsTelegram />
        </a>
        <a
          href="#"
          className="inline-block text-orange-500 hover:scale-110 text-5xl"
        >
          <BsFacebook />
        </a>
        <a
          href="#"
          className="inline-block text-orange-500 hover:scale-110 text-5xl"
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          className="inline-block text-orange-500 hover:scale-110 text-5xl"
        >
          <BsInstagram />
        </a>
        <a
          href="#"
          className="inline-block text-orange-500 hover:scale-110 text-5xl"
        >
          <BsTiktok />
        </a>
      </div>
      <p className="text-gray-500 text-xl">Created by Ivan Mutsko. © 2023.</p>
    </footer>
  );
};

export default Footer;
