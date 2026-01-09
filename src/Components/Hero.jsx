import { ReactTyped } from "react-typed";
import React from 'react'
import profile from '../assets/profile.png'
import { motion } from "motion/react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
    <section className=''>
      <div className='h-[80vh] text-start flex items-center'>
        <div className='col-span-2 text-center mx-auto'>
          <motion.img 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            src={profile} 
            alt="Profile" 
            style={{
              backgroundSize: '110%',
              backgroundPosition: 'center 30%',
              objectFit: 'cover'
            }}
            className="w-[280px] sm:w-[350px] mx-auto md:w-[300px] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-cycle mb-8" 
          />
          <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-abril text-white leading-tight'>Hi There, I'm Salim</p>
          <br />

          <ReactTyped  
            className="text-[#2BC1EA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-abril" 
            strings={["Full-Stack developer"]} 
            typeSpeed={120} 
          />

          <div className="flex justify-center gap-8 mt-8">
            <a 
              href="https://linkedin.com/in/salim-shaban-7523b5188" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#2BC1EA] transition-colors duration-300"
            >
              <FaLinkedin size={40} className="text-[#0077B5]" />
              <span className="text-xl sm:text-2xl font-poppins">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Salim104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#2BC1EA] transition-colors duration-300"
            >
              <FaGithub size={40} />
              <span className="text-xl sm:text-2xl font-poppins">GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero