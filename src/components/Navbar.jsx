'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.div
    initial={{y: -200}}
    animate={{y: 0}}
    transition={{duration:0.2, staggerChildren: 0.1}}
    >
      <nav className="w-full backdrop-blur-xl mb-10 md:mb-0  border-b border-gray-300 shadow-md  z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-28">
          <div >
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold ">MUSEUM</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" className='bg-white' />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="border-none bg-white p-1 rounded-md"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-1 md:pt-6 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-base font-semibold  py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    HOME
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    ABOUT
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0">
                  <Link href="#history" onClick={() => setNavbar(!navbar)}>
                    HISTORY
                  </Link>
                </li>
                <li className="pb-6 text-base font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0 ">
                  <Link href="#guide" onClick={() => setNavbar(!navbar)}>
                    GUIDE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default NavBar;