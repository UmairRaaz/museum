import Link from "next/link";
import React from "react";
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaBehance, FaDribbble } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full md:mt-32 mb-44 gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-3">
      <div className="text-4xl font-semibold  uppercase">
        <h1>...</h1>
        <h1>Enjoy the arts</h1>
        <h1>and the greece history</h1>
      </div>
      <div className="md:pl-24 flex flex-col gap-4 md:gap-10 text-md md:text-sm text-gray-400 uppercase">
        <div className="flex md:flex-col gap-4">
          <p className="hover:text-gray-100"><Link href={"/#home"}>HOME</Link></p>
          <p className="hover:text-gray-100"><Link href={"/#about"}>ABOUT</Link></p>
          <p className="hover:text-gray-100"><Link href={"/#history"}>HISTORY</Link></p>
          <p className="hover:text-gray-100"><Link href={"/#guide"}>GUIDE</Link></p>
        </div>
        <div className="flex gap-4">
          <CiFacebook size={25} className="hover:text-gray-100" />
          <CiLinkedin size={25} className="hover:text-gray-100" />
          <CiInstagram size={25} className="hover:text-gray-100" />
          <FaBehance size={25} className="hover:text-gray-100" />
          <FaDribbble size={25} className="hover:text-gray-100" />
        </div>
      </div>
      <div>
        <p className="text-xl md:text-xl text-gray-400">BE THE FIRST TO HEAR VIRTUAL SMART-MUSEUM NEWS</p>
        <input type="text" placeholder="E-mail" className="border-b border-gray-500 pb-4 bg-transparent mt-10"/>
        <button className="border border-gray-500 mt-10 md:mt-14 p-4 w-72 rounded-md flex justify-evenly">
            <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
