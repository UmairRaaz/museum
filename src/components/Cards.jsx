"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Cards = ({ icon, heading, desc, first }) => {
  if (first) {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="md:w-56 w-full rounded-md h-96 border px-6 py-1"
      >
        <p className="mt-10 text-[#da9d68a9] text-center">{desc}</p>
        <h1 className="mt-6 text-2xl font-bold flex gap-4 md:gap-0 items-center justify-center ">
          <span>{heading}</span>
          {icon}
        </h1>
        <div className="mt-6 flex items-center justify-center hover:scale-125 transition-all ease-in-out">
          <Image src={"/faceTwo.png"} width={130} height={130} alt="image" />
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="md:w-56 w-full rounded-md md:h-96 border px-6 md:py-6 py-14"
    >
      <h1
        className="bg-[#e79248] inline uppercase px-4 text-white p-2 rounded-full w-44 
      text-sm "
      >
        {icon}
      </h1>
      <h1 className="md:mt-14 mt-10 text-3xl font-bold">{heading}</h1>
      <p className="md:mt-10 mt-4 text-gray-500 font-bold">{desc}</p>
    </motion.div>
  );
};

export default Cards;
