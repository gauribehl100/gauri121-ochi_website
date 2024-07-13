import React from "react";
import { motion } from "framer-motion";
function Cards() {


  return (
    <div 
    data-scroll
    data-scroll-section
    data-scroll-speed="-.3"
    className="w-full h-screen pt-1  bg-gray-100">

        <motion.div className='border-t-[1px] border-gray-400 py-[30px]'></motion.div>

    <motion.div className="container w-full flex flex-row gap-5 py-20">
         
      <div className="card relative flex items-center justify-center ml-8 lg:w-1/2 md:w-full h-96 bg-[#004D43] rounded-xl">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt="ochi"
          className="w-[25%]"
        />
        <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-lg text-[#CDE168] border-[#CDE168]">
          © 2019–2022
        </button>
      </div>
      <div className="cardcontainer flex gap-5 lg:w-1/2 md:w-full">
        <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="ochi"
            className="w-[50%]"
          />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-lg  text-white border-white">
            © 2019–2022
          </button>
        </div>

        <div className="card relative flex items-center mr-8 justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="ochi"
            className="w-[50%] mix-blend-lighten"
          />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-lg  text-white border-white">
            © 2019–2022
          </button>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default Cards;