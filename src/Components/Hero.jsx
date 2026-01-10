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
      <div className='min-h-[80vh] pt-20 sm:pt-0 text-start flex items-center'>
        <div className='col-span-2 text-center mx-auto px-4'>
          <motion.img 
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            src={profile} 
            alt="Profile" 
            style={{
              backgroundSize: '110%',
              backgroundPosition: 'center 30%',
              objectFit: 'cover'
            }}
            className="w-[200px] sm:w-[300px] mx-auto md:w-[280px] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-cycle mb-8" 
          />
          <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight'>Hi There, I'm Salim</h1>
          <br />

          <ReactTyped  
            className="text-[#2BC1EA] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-heading font-semibold" 
            strings={["Full-Stack developer"]} 
            typeSpeed={120} 
          />

          <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed"
          >
            From 'Hello World' to production-ready apps. Always learning, always building, always improving.
          </motion.p>

          <div className="flex justify-center gap-8 mt-10">
            <a 
              href="https://linkedin.com/in/salim-shaban-7523b5188" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#2BC1EA] transition-colors duration-300"
            >
              <FaLinkedin size={32} className="text-[#0077B5]" />
              <span className="text-lg sm:text-xl font-body">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Salim104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#2BC1EA] transition-colors duration-300"
            >
              <FaGithub size={32} />
              <span className="text-lg sm:text-xl font-body">GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero