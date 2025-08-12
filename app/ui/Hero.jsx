import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white py-12 px-4 sm:py-16">
      <div className="max-w-[1500px] mx-auto text-center space-y-6 px-2 sm:px-0">
        {/* Small top text */}
        <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-widest">Join Presale</p>

        {/* Main heading */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Get Paid to Style Up.
          <br />
          <span className="text-gray-500">Earn with Every Look.</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 text-xs sm:text-sm">
          GSM (Get Style Money) merges AI, fashion, and crypto—rewarding you for wearing your favorite brands in the real world.
        </p>
      </div>

      {/* Full width image container */}
      <div className="mt-12 w-full">
        <img
          src="/Images/hero.png"
          alt="Hero full width"
          className="w-full h-[150px] sm:h-[100px] md:h-[200px] lg:h-[300px] object-cover"
        />
      </div>

      <div className="flex max-w-[1500px] mx-auto justify-center gap-4 mt-8 px-2 sm:px-0">
  <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
    Join Presale
  </button>
  <button className="border border-gray-600 text-gray-400 px-6 py-2 rounded-md font-semibold hover:border-white hover:text-white transition">
    White Whitepaper
  </button>
</div>

    </section>
  );
};

export default Hero;
