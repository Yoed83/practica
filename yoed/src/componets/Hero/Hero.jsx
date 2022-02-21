import React from "react";
import { Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        SOME-TEXT
      </h1>
      <Link
        className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300
      transition duration-300 ease-in-out flex items-center animate-bounce"
        to="/"
      >
        Oder Now <MdRestaurantMenu />
      </Link>
    </div>
  );
};

export default Hero;
