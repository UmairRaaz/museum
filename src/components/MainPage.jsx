'use client'
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import CardsSection from "./CardsSection";
import About from "./About";
import AudioGuide from "./AudioGuide";
import Footer from "./Footer";
import NavBar from "./Navbar";
import LoadingScroller from "./LoadingScroller";

const MainPage = () => {
  const [loaded, setloaded] = useState(false)
  useEffect(()=>{
    console.log("loaded")
    setloaded(true)
  },[])
  return (
    <div className="max-w-[80%] mx-auto overflow-hidden">
      {!loaded ? (
        <LoadingScroller/>
      ) : 
      (<>
        <NavBar />
        <Hero />
        <CardsSection />
        <About />
        <AudioGuide />
        <Footer />
      </>)}
    </div>
  );
};

export default MainPage;
