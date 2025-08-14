import React from 'react';

const Partner = () => {
  const partners = [
    '/Images/creasoft.svg',
    '/Images/wert.png',
    '/Images/metamask.png',
    '/Images/wallet.png',
    '/Images/pic.png',
    '/Images/dynamic.png',
    '/Images/coinebase.png',
    '/Images/trust.png',
  ];

  return (
    <div className="container max-w-[1500px] mx-auto py-12 px-4">
      <h1 className="text-4xl text-center text-white mb-8">Our Partners</h1>
      <div className=" max-w-[900px] mx-auto flex flex-wrap  justify-center ">
        {partners.map((src, index) => (
          <div
            key={index}
            className="flex items-center px-5 justify-center border border-gray-700 bg-black w-40 h-20"
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className=" object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
