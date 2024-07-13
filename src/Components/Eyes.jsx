import { transform } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate ,setRotate] =useState(0);
    useEffect(()=>
    {
        window.addEventListener("mousemove", (e)=>
        {
            console.log(e.clientY,e.clientX,);
            // gives the mouse ki screen me location in x axis (e.clientX)

            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX =mouseX - window.innerWidth/2;
            // window.innerWidth/2 is the screen ka centre (1000px ka half 500px)

            let deltaY =mouseY - window.innerHeight/2;

            var angle =Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        });
    });
  return (
    <div>

      <div className='eyes w-full h-screen overflow-hidden'>

      <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
       className='  w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>

      <div className=' flex justify-center py-60 gap-4'>

      <div className='rounded-full bg-white w-40 h-40 flex justify-center items-center' >
        <div className='rounded-full bg-black w-24 h-24 flex justify-center items-center' >
            {/* <div className='text-white'>PLAY</div> */}

            <div style={{transform:`rotate(${rotate}deg)`}} className=' line w-full h-6'>
            <div className='rounded-full bg-white w-6 h-6'></div>
            </div>
       
        </div>
      </div>

      <div className='rounded-full bg-white w-40 h-40 flex justify-center items-center' >
      <div className='rounded-full bg-black w-24 h-24 flex justify-center items-center' >
      {/* <div className='text-white'>PLAY</div> */}

      <div  style={{transform:`rotate(${rotate}deg)`}} className='line w-full h-6'>
            <div className='rounded-full bg-white w-6 h-6'></div>
       </div>
    
      </div>
      </div>


      </div>

    </div>

    </div>

    </div>
  )
}

export default Eyes;
