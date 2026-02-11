import React from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Decorative floating images */}
      <img
        src="./src/assets/LandingAssets/Landing.webp"
        alt="decor"
        className="absolute top-20 left-16 w-32 opacity-70 rotate-12 z-0"
      />

      <img
        src="./src/assets/LandingAssets/Home.webp"
        alt="decor"
        className="absolute top-6 left-1/2 -translate-x-1/2 w-24 opacity-80 rotate-6 z-0"
      />

      <img
        src="./src/assets/LandingAssets/Landing1.webp"
        alt="decor"
        className="absolute top-32 right-24 w-36 opacity-100 -rotate-6 z-0"
      />

      <img
        src="./src/assets/LandingAssets/Landing2.webp"
        alt="decor"
        className="absolute bottom-28 left-24 w-36 opacity-90 rotate-6 z-0"
      />

      <img
        src="./src/assets/LandingAssets/Landing3.webp"
        alt="decor"
        className="absolute bottom-20 right-20 w-40 opacity-90 -rotate-12 z-0"
      />

      <img
        src="./src/assets/LandingAssets/Landing4.webp"
        alt="decor"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-14 opacity-90 -rotate-6 z-0"
      />

      {/* Content */}
      <div className="relative flex items-center gap-12 z-10">

        {/* Text Section */}
        <div className="text-center animate-fade-in-up pl-20 md:pl-30">

          <h1 className="font-extrabold leading-tight pb-6">
            <span className="block text-8xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Welcome to
            </span>
            <span className="block text-8xl ml-32 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Bookly
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-800 max-w-md mx-auto">
            A simple, modern way to manage books with ease and clarity.
          </p>

          {/* CTA Button */}
          <div className="mt-10 ml-24">
            <button
              onClick={() => navigate("/login")}
              className="px-10 py-4 rounded-2xl
              bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
              text-white font-semibold text-lg
              shadow-lg hover:shadow-xl hover:scale-105
              transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Main Image */}
        <img
          src="./src/assets/LandingAssets/Home2.webp"
          alt="home icon"
          className="w-64 h-64 object-contain animate-fade-in opacity-70"
        />
      </div>
    </div>
  );
};

export default Landingpage;
