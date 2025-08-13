"use client";
import React, { useState } from "react";
import Countdown from "react-countdown";

const Presale = () => {
  const [progress, setProgress] = useState(25); // % sold

  // Countdown target date (20 days from now)
  const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  // Renderer for Countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="w-full flex justify-center items-center text-gray-400 gap-4 sm:gap-7 text-2xl sm:text-4xl">
  <div className="flex flex-col items-center border px-3 py-3 w-20 sm:w-auto">
    <span>{days}</span>
    <h1 className="text-xs sm:text-sm">Days</h1>
  </div>
  <div className="flex flex-col items-center border px-3 py-3 w-20 sm:w-auto">
    <span>{hours}</span>
    <h1 className="text-xs sm:text-sm">Hours</h1>
  </div>
  <div className="flex flex-col items-center border px-3 py-3 w-20 sm:w-auto">
    <span>{minutes}</span>
    <h1 className="text-xs sm:text-sm">Mins</h1>
  </div>
  <div className="flex flex-col items-center border px-3 py-3 w-20 sm:w-auto">
    <span>{seconds}</span>
    <h1 className="text-xs sm:text-sm">Sec</h1>
  </div>
</div>

    );
  };

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Heading */}
      <h1 className="text-3xl sm:text-6xl mb-6 text-center">Pre Sale Ends In</h1>

      {/* Countdown Timer */}
      <Countdown date={targetDate} renderer={renderer} />

      {/* Progress Bar */}
      <div className="w-full max-w-lg mt-8 px-2">
        <p className="text-yellow-500 font-semibold">Stage 1</p>
        <p className="mb-2 text-sm sm:text-base">Current Price - $0.018 USDT</p>
        <div className="w-full bg-gray-700 rounded overflow-hidden relative">
          <div
            className="bg-yellow-500 h-4 sm:h-5 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="absolute right-2 top-0 text-xs sm:text-sm">{progress}% Sold</span>
        </div>
        <p className="text-yellow-500 mt-1 text-sm sm:text-base">
          Total Supply: $10,000,000
        </p>
      </div>

      {/* Token Purchase Form */}
<div className="flex mx-auto flex-col sm:flex-row gap-3 mt-6 p-4 rounded-lg items-center w-full max-w-lg">
  {/* Crypto Select */}
  <select className="bg-gray-700 px-4 py-2 w-full sm:w-38 text-white border border-gray-600 focus:outline-none focus:border-yellow-500">
    <option>ETH</option>
    <option>BTC</option>
  </select>

  {/* Payment Select */}
  <select className="bg-gray-700 px-4 py-2 w-full sm:w-38 text-white border border-gray-600 focus:outline-none focus:border-yellow-500">
    <option>USDT</option>
    <option>BNB</option>
  </select>

  {/* Amount + Total */}
  <div className="flex w-full flex-col items-center sm:w-auto">
    <input
      type="number"
      min="1"
      className="bg-gray-700 px-4 py-2 w-full sm:w-38 text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
      defaultValue={1}
    />
   
  </div>
</div>




      {/* Token Info */}
      <p className="text-xs sm:text-sm mt-2">ⓘ You will get 88 GSM Coins</p>

      {/* Buy Button */}
      <button className="bg-white text-black px-6 py-2 rounded mt-4 font-bold hover:bg-gray-300 w-full sm:w-auto">
        Buy Now
      </button>
    </div>
  );
};

export default Presale;
