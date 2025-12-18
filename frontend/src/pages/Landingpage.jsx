import React from "react";

const Landingpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Decorative floating images */}
      <img
        src="./src/assets/Landing.webp"
        alt="decor"
        className="absolute top-20 left-16 w-36 opacity-30 rotate-12 z-0"
      />

      <img
        src="./src/assets/Landing1.webp"
        alt="decor"
        className="absolute top-32 right-24 w-36 opacity-25 -rotate-6 z-0"
      />

      <img
        src="./src/assets/Landing2.webp"
        alt="decor"
        className="absolute bottom-28 left-24 w-36 opacity-20 rotate-6 z-0"
      />

      <img
        src="./src/assets/Landing3.webp"
        alt="decor"
        className="absolute bottom-20 right-20 w-36 opacity-30 -rotate-12 z-0"
      />

      {/* Glow background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      {/* Content */}
      <div className="relative flex items-center gap-4 z-10">

        {/* Text Section */}
        <div className="text-center animate-fade-in-up">
          <h1 className="font-bold leading-none pb-8">
            <span className="block text-8xl bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Welcome to
            </span>
            <span className="block text-8xl ml-44 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Bookly
            </span>
          </h1>

          {/* CTA Button */}
          <div className="mt-8 ml-32">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-400 to-pink-700 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Main Image */}
        <img
          src="./src/assets/Home2.webp"
          alt="home icon"
          className="w-64 h-64 object-contain animate-fade-in"
        />
      </div>
    </div>
  );
};

export default Landingpage;
