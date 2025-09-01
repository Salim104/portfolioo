import { ReactTyped } from "react-typed";
import React from 'react'
import profile from '../assets/hero-pic.png'
import { motion } from "motion/react"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className='bg-hero-pattern bg-cover sm:bg-contain md:bg-cover bg-center bg-no-repeat'>
      <div className='h-[80vh] text-start flex items-center'>
        <div className='col-span-2 text-center mx-auto'>
        
          <p className='text-2xl md:text-7xl font-abril text-white'>Hi There, I'm Salim</p>
          <br />

          <ReactTyped  
            className="text-[#FF6B5C] text-1xl md:text-4xl font-abril" 
            strings={["Full-Stack developer"]} 
            typeSpeed={120} 
          />

        </div>
      </div>
    </section>
  )
}

export default Hero