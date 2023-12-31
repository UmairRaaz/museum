import React from 'react'
import Cards from './Cards'
import { IoMdPlay } from "react-icons/io";
const CardsSection = () => {
  return (
    <div id='about' className='w-full pb-24'>
        <div className='flex flex-col md:flex-row mt-14 pl-0 md:pr-36 gap-10 md:gap-24'>
            <div className='md:w-1/5 md:text-left text-4xl font-bold'>
                <h1 className='text-center md:text-left'>Visit Our</h1>
                <h1 className='text-center md:text-left'>Exploration</h1>
            </div>
            <div className='md:w-[80%] w-full flex flex-col md:flex-row gap-10'>
                <Cards icon={<IoMdPlay className='bg-white text-black rounded-full p-2'/>} heading={"Ancient Greece"} desc={"FROM ANTIQUITY TO MODERN"} first={true}/>
                <Cards icon={"Anytime"} heading={"Available 24/7"} desc={"The permanent exhibition includes two main sections"} first={false}/>
                <Cards icon={"New"} heading={"Songs of the sky"} desc={"The permanent collection contains over 4,200 artifacts"} first={false}/>
            </div>
        </div>
    </div>
  )
}

export default CardsSection