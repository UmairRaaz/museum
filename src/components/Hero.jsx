"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const animateInittial = isMobile ? -100 : -600;
  const animateWhileInView = isMobile ? 0 : 0;
  return (
    <motion.div id="home" className="h-screen flex flex-col md:flex-row w-full">
      <div className="flex md:w-1/2 w-full flex-col mt-10  md:mt-36 md:ml-32 ml-2">
        <motion.h1
          initial={{ x: animateInittial }}
          whileInView={{ x: animateWhileInView }}
          transition={{ duration: 0.7, delay:0.4 }}
          className="uppercase text-center md:text-left text-2xl text-gray-400 mb-4  "
        >
          Virtual Museum
        </motion.h1>
        <div className="uppercase">
          <div className="md:text-6xl text-4xl text-center  font-extrabold tracking-wider w-full space-y-14">
            <motion.h1
            initial={{ x: animateInittial }}
            whileInView={{ x: animateWhileInView }}
            transition={{ duration: 0.7, delay:0.4 }}
            className="mb-4">Mankind</motion.h1>
            <motion.div
            initial={{ x: animateInittial }}
            whileInView={{ x: animateWhileInView }}
            transition={{ duration: 0.7, delay:0.4 }}
            className="flex items-center relative">
              <div className="h-3 bg-white md:w-52 w-24 absolute left-2 md:-left-32"></div>
              <h1 className="md:mb-4 absolute left-32">history </h1>
            </motion.div>
            <motion.h1
            initial={{ x: animateInittial }}
            whileInView={{ x: animateWhileInView }}
            transition={{ duration: 0.7, delay:0.4 }}
            className="mb-4">explained</motion.h1>
          </div>
        </div>
        <motion.button
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 0.7, delay:0.4 }}
        className="border border-gray-500 mt-10 md:mt-14 p-4 w-72 rounded-md flex justify-evenly">
          <span className="text-2xl md:text-xl">Start Free Trial</span>
          <IoIosArrowForward
            size={30}
            className="bg-white text-black rounded-full p-2"
          />
        </motion.button>
      </div>
      <motion.div
      initial={{ x: isMobile ? 100 : 430 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.7, delay:0.4 }}
      className="md:w-1/2 w-full flex items-center justify-center">
        <Image src={"/heroPic.png"} width={450} height={450} alt="image" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
