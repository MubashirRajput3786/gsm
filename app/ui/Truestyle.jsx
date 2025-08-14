import React from 'react';
import { FaBullseye, FaCheck } from 'react-icons/fa';
import { TbSettingsDollar } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";

const Coinlaunch = () => {
  return (
    <>
      <div className="container max-w-[1500px] p-3 my-9 mx-auto">
        {/* Top Headings */}
        <h5 className="mx-auto text-center text-gray-400 p-3 font-bold border border-gray-500 w-fit rounded-md">
          Consumers
        </h5>
        <h1 className="text-6xl mx-auto max-w-[600px] text-white text-center my-4">
          Unlock the True Value of Your Style
        </h1>
        <p className="text-gray-500 text-center mx-auto text-xl">
          Earn rewards, access exculsives, prove ownership, and profitfrom resales - all Powered by GSM.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-4 gap- mt-10">
          {/* Card 1 */}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <FaBullseye className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Key Goals:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Coin Presale & TGE</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> <p className='text-gray-400'>Smart Contract Development</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> <p className='text-gray-400'>Tokenomics, Whitepaper, Pitch Deck</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Community Building</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Strategic Partnerships</p>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <TbSettingsDollar className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Coin Utilities:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck /> <p className='text-gray-400'>Reward Redemption</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Platform Access</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Staking & Loyalty</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Brand Partnerships</p>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <GiBullseye className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Presale Strategy:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Whitelisting + KYC Enabled</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Anti-Whale & Anti-Bot Protections</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Smart Contract Audited by Certik</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Exchange Listings (DEX + CEX)</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Live Coin Price Widget</p>
              </li>
            </ul>
          </div>

          {/* card 4*/}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <GiBullseye className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Presale Strategy:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Whitelisting + KYC Enabled</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Anti-Whale & Anti-Bot Protections</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Smart Contract Audited by Certik</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Exchange Listings (DEX + CEX)</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Live Coin Price Widget</p>
              </li>
            </ul>
          </div>
          
        </div>
        <button className='mt-10 px-15 py-4 font-bold text-black mx-auto flex  bg-white rounded-xl' >Get Started</button>

      </div>
    </>
  );
};

export default Coinlaunch;
