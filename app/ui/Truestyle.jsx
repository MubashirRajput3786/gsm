import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { BsCoin } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { FaHandHoldingDollar } from "react-icons/fa6";


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
            <BsCoin className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Get paid of what You Already Do</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Earn GSM coins for participating in brand campaigns</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck size={25} /> <p className='text-gray-400'>Get rewarded for wearing, sharing, reselling, and promoting your favorite clothes</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> <p className='text-gray-400'>Turn your personal style into a source of real value</p>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <ImProfile className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Exculsive Access to campaigns And Drops</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck /> <p className='text-gray-400'>Early access to new drops</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>VIP invites to events</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Limited-edition rewards and wearables</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Access to private resale markets or loyalty bonuses</p>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <FaHandHoldingDollar className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Prove YourAuthenticity and Ownership </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Instant proof of ownership</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Protection from counterfeits</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Smart Contract Audited by Certik</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck size={25}  /> <p className='text-gray-400'>Ability to resell securely, with bonuses for verified owners</p>
              </li>
             
            </ul>
          </div>

          {/* card 4*/}
          <div className="bg-black p-6  shadow-md text-white border border-gray-700">
            <BsCoin className="text-4xl mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-4">Earn on Resale - Not just Brands</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Increased resale value for authentic owners</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Seamless ownership transfers</p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck  /> <p className='text-gray-400'>Earn additional rewards even after you sell your items</p>
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
