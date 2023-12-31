"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdPlay } from "react-icons/io";

const AudioCards = ({ image, icon, heading, text, desc, year, date }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="border-y border-dashed border-gray-500 md:py-14 py-10 md:px-10 gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 relative">
        {!isHovered && (
          <div className="absolute top-0 left-0 right-0 bottom-0 transition-all ease-in-out  text-gray-400 gap-4 flex">
            {icon}
            <span className="uppercase ">{heading}</span>
          </div>
        )}
        {isHovered && (
          <div className="md:absolute md:block transition-all ease-in-out hidden top-0 left-0 right-0 bottom-0 text-white">
            <Image
              src={image}
              width={200}
              height={200}
              alt="building"
              className="-rotate-12 rounded-md"
            />
          </div>
        )}
      </div>
      <div className="text-3xl font-bold">
        <p className="md:w-40 w-full">{text}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          <div
            className={`${
              isHovered ? "text-white" : "text-gray-400"
            } text-justify`}
          >
            {desc}
          </div>
          <div className="flex gap-10 mt-10">
            <p>{year}</p>
            <p>{date}</p>
          </div>
        </div>

        <div
          className={`${
            !isHovered
              ? "rounded-full p-3 ml-10 border-gray-400 border text-gray-400 -mt-16 md:-mt-10"
              : "bg-white text-black rounded-full p-3 ml-10 -mt-16 md:-mt-10"
          }`}
        >
          <IoMdPlay size={20} />
        </div>
      </div>
    </div>
  );
};

export default AudioCards;
