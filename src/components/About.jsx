"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const width = isMobile ? 300 : 450;
  const height = isMobile ? 300 : 450;
  return (
    <motion.div id="history" className="h-screen w-full md:border border-gray-500 rounded-md md:relative">
      <motion.div
        className="md:absolute md:left-80 md:-top-14"
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image src={"/mainPic.png"} alt="pic" width={width} height={height} />
      </motion.div>

      <div className="flex  justify-between flex-col md:flex-row w-full md:absolute md:px-20">
        <motion.div
        initial={{ x: isMobile ? -100 :-400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, delay:0.4 }}
        className="md:w-[40%] w-full h-full">
          <h1 className="md:text-7xl text-4xl -mt-10 md:mt-24 md:ml-10 font-extrabold">
            Media & history combined
          </h1>
        </motion.div>
        <div className="md:w-[40%] w-full h-full md:px-8">
          <motion.p
          initial={{ x: isMobile ? 100 : 330 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7, delay:0.4 }}
          className="md:text-left mt-4 md:mt-24 md:ml-20 w-full">
            A gallery in the permanent exhibition displays many statues of
            celebrities from the Classical period. These statues include
            Alexander the Great, other great figures in Ancient history.
          </motion.p>
          <motion.button
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{ duration: 0.7, delay:0.4 }}
          className="border border-gray-500 mt-10 md:ml-24 p-4 w-44 rounded-md flex justify-evenly">
            Read More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
