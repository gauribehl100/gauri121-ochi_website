import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 mt-1">
      <div className="landing">
        <div className="mt-5">
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'>
            WE CREATE
          </h1>
        </div>

        <div className='mt-3 flex flex-col sm:flex-row items-center'>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "20vh" }} 
            transition={{ ease: [0.70, 0, 0.20, 0.5] }} 
            className='w-full sm:w-[20vh] h-[11vh] '
          >
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
              className="w-full h-full bg-cover rounded-xl "
              alt="Presentation"
            />
          </motion.div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mt-1 sm:mt-0 sm:ml-8'>
            EYE-OPENING
          </h1>
        </div>

        <div className='mt-2'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'>
            PRESENTATIONS
          </h1>
        </div>
      </div>

      <div className='border-t-[1px] border-gray-400 mt-32'></div>

      <div className='flex flex-col sm:flex-row justify-between items-center pt-5 pb-8'>
        <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-10'>
          For public and private companies
        </div>
        <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-10'>
          From the first pitch to IPO
        </div>

        <div className='flex flex-col sm:flex-row gap-2 items-center mt-4 sm:mt-0'>
          <div className='px-4 py-2 flex items-center border-[1px] border-zinc-800 rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
            Start The Project
          </div>
          <div className='border-[1px] w-10 h-10 flex items-center justify-center border-zinc-800 rounded-full'>
            <GoArrowUpRight className='w-6 h-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;

