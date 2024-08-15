import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[42vw] mb-20   flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:px-20 px-5 bg-cover bg-center rounded-2xl bg-no-repeat "
         style={{ backgroundImage: "url('/src/assets/img/hero_img.png')" }}>
      <div className="w-full lg:w-2/3 space-y-5 text-center lg:text-left fade-in">
        <h1 className="text-white font-semibold text-4xl lg:text-6xl leading-snug">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-white lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="text-white px-6 py-2 border-2 border-white hover:bg-white hover:text-brightColor transition-all rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
