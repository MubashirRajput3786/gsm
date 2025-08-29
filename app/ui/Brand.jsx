import React from "react";
import { FaCheck } from "react-icons/fa";

const Brand = () => {
  return (
    <div className="container my-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[1500px] mx-auto p-4">
      {/* Left Side Content */}
      <div className="space-y-6">
        <p className="text-base sm:text-lg p-3 border border-gray-400 w-fit">Brands</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Turn Loyalty, Resale,
          and Authenticity into
          <br />
          <span>Brand Growth</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          With GSM, transform customer loyalty into measurable engagement,
          capture resale value, protect your brand from counterfeits, and drive
          targeted actions through reward-based campaigns.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Turn Brand Hype Into Measurable Loyalty
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Capture and Monetize the Resale Economy Result
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Authenticate Products and Protect Brand Value
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck />{" "}
            <p className="text-gray-600">
              Launch Targeted, Reward-Based Campaigns
            </p>
          </div>
        </div>

        <button className="text-black cursor-pointer bg-white px-10 sm:px-9 py-3 rounded-lg font-medium block mx-auto md:mx-0">
  Get Started
</button>

      </div>

      {/* Right Side Image with Vignette Filter */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
        <img
          src="/Images/gro.png"
          alt="Brand Growth"
          className="w-full h-full object-containe"
        />
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, transparent 60%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Brand;
