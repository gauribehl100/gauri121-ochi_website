import { color, motion } from "framer-motion";
import React from "react";
function Ochi() {
    return (
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".8"
        // har 1px ke liye 0.8ps kam lega
        className="w-full py-20 rounded-tl-2xl rounded-tr-3xl bg-[#004D43]"
      >
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-11 overflow-hidden whitespace-nowrap">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[20vw] text-white leading-none tracking-tighter  uppercase -mt-[3.5vw] -mb-[1vw] font-semibold pr-[1r]"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className="text-[20vw] leading-none tracking-tighter text-white uppercase -mt-[3.5vw] -mb-[1vw] font-semibold pr-[1r]"
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    );
  }
  
  export default Ochi;