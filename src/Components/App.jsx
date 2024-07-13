import React from "react";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Ochi from "./Components/Ochi";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Features from "./Components/Features";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
   <div className="w-full h-screen bg-gray-100">
    <Navbar/>
    <Landing/>
    <Ochi/>
    <About/>
    <Eyes/>
    <Features/>
    <Cards/>
    <Footer/>
   </div>
  )
}