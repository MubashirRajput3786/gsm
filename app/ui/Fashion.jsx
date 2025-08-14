import React from "react";
import { FaCheck } from "react-icons/fa";

const Fashion = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[1500px] mx-auto p-4">
      
      {/* Right Side Image with Vignette Filter */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-black order-2 md:order-1">
        <img
          src="/Images/fashion.png"
          alt="Brand Growth"
          className="w-full h-full object-contain"
        />
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, transparent 60%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </div>

      {/* Left Side Content (but on mobile it comes first) */}
      <div className="space-y-6 order-1 md:order-2">
        <p className="text-base sm:text-lg p-3 border border-gray-500 w-fit">Early Supporters</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Own the Future of Fashion and Blockchain
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Be an early supporter of GSM — a real-world utility coin bridging a
          $1.7 trillion fashion industry with the blockchain economy, built for
          sustainable growth, real adoption, and massive global potential.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              First-Mover Advantage in a new Fashion Economy
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Strong Utility and Real-World Demand
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Tightly Controlled Supply, Sustainable Growth
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Massive Brand and Consumer Adoption Potential
            </p>
          </div>
        </div>

        <button className="text-black cursor-pointer bg-white px-6 sm:px-9 py-3 rounded-lg font-medium block mx-auto md:mx-0">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Fashion;
