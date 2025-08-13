"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white bg-black">
      <div className="max-w-[1500px] mx-auto px-4 py-7 flex justify-between items-center ">
        
        {/* Logo */}
        <img 
          src="/Images/logo.svg" 
          alt="logo" 
          className="w-20 h-auto sm:w-28" 
        />

        {/* Menu (Large screens only) */}
        <ul className="hidden lg:flex gap-9 text-sm lg:text-base">
          <li className="cursor-pointer hover:text-gray-400">Introduction</li>
          <li className="cursor-pointer hover:text-gray-400">Tokenomics</li>
          <li className="cursor-pointer hover:text-gray-400">Future Roadmap</li>
          <li className="cursor-pointer hover:text-gray-400">White Paper</li>
        </ul>

        {/* Connect Wallet (md and larger) */}
        <button className=" md:block text-black bg-white px-4 py-2 rounded-md hover:bg-gray-200 text-sm sm:text-base">
          Connect Wallet
        </button>

        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-4 text-sm sm:text-base">
          <li className="list-none cursor-pointer hover:text-gray-400">Introduction</li>
          <li className="list-none cursor-pointer hover:text-gray-400">Tokenomics</li>
          <li className="list-none cursor-pointer hover:text-gray-400">Future Roadmap</li>
          <li className="list-none cursor-pointer hover:text-gray-400">White Paper</li>
          <button className="block w-full text-black bg-white px-4 py-2 rounded-2xl hover:bg-gray-200">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
