import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Landing() {
  
  return (
    <div>
    <div className="landing ">

     <div className=" mt-32 ml-5">
        <h1 className='text-8xl font-bold leading-[5.5vw] '>WE CREATE</h1>
    </div>

    <div className=' ml-5 py-0 mt-0 flex flex-row'>
      
      <motion.div initial={{width:0}} animate={{ width :"20vh"}} transition={{ease: [0.70, 0, 0.20, 0.5]}} className=' w-[20vh] h-[11vh]  '>
                        <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      className="w-full h-full bg-cover rounded-xl"
                      alt=""/>
       
      </motion.div>
      {/* framework supported component jispe hum animations kar sakte hai */}
        <h1 className='text-8xl font-bold leading-[5.5vw]'>EYE-OPENING</h1>
        
    </div>

    <div className=' ml-5 py-0 mt-0'>
        <h1 className='text-8xl font-bold leading-[5.5vw]'>PRESENTATIONS</h1>
    </div>

    </div>
   
     <div className='border-t-[1px] border-gray-400 mt-32'> </div>

     <div className=' flex place-content-between pt-5 '>

     <div className='pl-10'>For public and private companies</div>
     <div className='pl-10'>From the first pitch to IPO</div>

     <div className='flex pr-[50px] gap-2'> 
     <div className='  px-4 pl-10  py-2 flex items-center border-[1px] w-[175px] border-zinc-800 rounded-full'>Start The Project </div>
     <div className='border-[1px] justify-center w-10 h-10 flex items-center border-zinc-800 rounded-full'> <GoArrowUpRight /></div>
  
     </div>

     </div>
     </div>
  )
}

export default Landing;
