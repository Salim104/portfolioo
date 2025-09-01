import React from 'react'
import profile from '../assets/profile.png'
import { useState } from 'react';
import { motion } from "motion/react"



const Aboutme = () => {
 let text ="I am a problem solver, who contributes to open source projects, as well as answering questions in forums and helping people with code, create and maintain websites by writing code, troubleshooting and revising code.I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."


  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <section className='max-w-[1200px] mx-auto  mt-20 flex flex-col justify-center items-center'>
       <h1 className='text-4xl font-abril'>ABOUT <span className='text-[#FF6B5C]'>ME</span></h1>
       <div className='w-full grid lg:grid-cols-2 mt-1 items-center '>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }} className='p-6 flex flex-col justify-center'>
            <p className='text-2xl font-medium mt-8 text-center md:text-left'>
            I am Junior Web developer who loves exploring and 
            learning new technologies.
            </p>

            <p className='text-center md:text-left text-[19px] mt-8'>
          {isExpanded ? text : text.slice(0, 200) + '...'}
          <button onClick={() => setIsExpanded(!isExpanded)} className='text-[#FF6B5C] font-medium'>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
            </p>

            <button className='bg-[#FF6B5C] text-white w-[150px] mx-auto md:mx-0 px-4 py-[3px] rounded-md font-bold text-sm hover:bg-[#ff4a3a] transition  mt-4'>Download CV</button>

        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }} className='flex justify-center items-center mb-8 md:mb-0'>
            <img  style={{
      
          backgroundSize: '110%',
          backgroundPosition: 'center 30%',
          objectFit: 'cover'
        }} className="w-[350px] mx-auto md:w-[300px] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-cycle" src={profile} alt="profile" />
        </motion.div>
       </div>
       
    </section>
  )
}

export default Aboutme