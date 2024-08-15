import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-stone-600 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Lorem</h1>
          <p className=" text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            saepe nihil, nesciunt hic voluptatem id mollitia quibusdam velit
            aperiam possimus!
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dishes
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Dishes
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              example@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              (+92) 3123456789
            </a>
            <div className="flex gap-4 mt-4 text-3xl">
      <a 
        className="transition-transform transform hover:-translate-y-1 hover:text-blue-600 cursor-pointer" 
        href="https://www.facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </a>
      <a 
        className="transition-transform transform hover:-translate-y-1 hover:text-black cursor-pointer" 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <RiTwitterXFill />
      </a>
      <a 
        className="transition-transform transform hover:-translate-y-1 hover:text-purple-500 cursor-pointer" 
        href="https://www.instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Qwerty</span> | All rights
            reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
