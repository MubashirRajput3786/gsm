"use client";

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {
  const faqData = [
    {
      question: "What is GSM?",
      answer: "GSM rewards you with tokens for wearing and promoting fashion brands."
    },
    {
      question: "How does GSM work for consumers?",
      answer: ""
    },
    {
      question: "How does GSM help brands??",
      answer: ""
    },
    {
      question: "How do early supporters benefit?",
      answer: ""
    },
    {
      question: "What is Proof of Wear?",
      answer: ""
    },
    {
      question: "How can I earn GSM tokens?",
      answer: ""
    },
    {
      question: "How can brands join GSM?",
      answer: ""
    },
    {
      question: "Can I join the presale?",
      answer: ""
    },
    {
      question: "How many GSM tokens are there?",
      answer: ""
    },
    {
      question: "Where can I download the app?",
      answer: ""
    }
  ];

  return (
    <div className="container max-w-[1500px] p-3 mx-auto mt-10">
      <p className='text-center border-2 border-gray-500 w-fit mx-auto px-4'>
        FAQ
      </p>
      <h1 className="text-3xl md:text-5xl text-center my-4 font-bold">
        Frequently Asked <br /> Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div>
          <img className="w-full h-full max-w-xl mx-auto" src="/Images/phone.png" alt="FAQ" />
        </div>

        {/* Right Side Accordion */}
        <div>
          <Accordion allowZeroExpanded>
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                className="border border-gray-300 rounded-lg overflow-hidden mb-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="bg-[#0d0d0d] px-5 py-3 text-lg font-semibold flex justify-between items-center hover:bg-gray-700 transition-colors duration-200">
                    {item.question}
                    <span className="text-gray-500 text-xl">+</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-5 py-3 bg-white text-gray-700">
                  <p>{item.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
