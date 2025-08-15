import React from 'react';

const Revo = () => {
  return (
    <>
      <div className="container max-w-[1500px] mx-auto p-3 my-5 mb-10 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Join the GSM Revolution
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 my-5 max-w-2xl mx-auto text-sm sm:text-base">
          Get early access, exclusive updates, and a front-row seat to the next era of fashion + crypto.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center my-5">
          <button className="bg-white py-2 px-4 text-black rounded-md hover:shadow-md transition">
            Join Presale
          </button>
          <button className="bg-transparent border-2 border-gray-500 px-4 py-2 rounded-md hover:border-white transition">
            Connect your Wallet
          </button>
          <button className="bg-white py-2 px-4 text-black rounded-md hover:shadow-md transition">
            Download White paper
          </button>
        </div>

        {/* Store Links */}
        <div className="flex flex-wrap gap-4 justify-center items-center mt-5">
          <img
            src="/Images/googleplay.svg"
            alt="Google Play"
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
          <img
            src="/Images/apple.png"
            alt="Apple Store"
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} GSM — All rights reserved.
      </div>
    </>
  );
};

export default Revo;
