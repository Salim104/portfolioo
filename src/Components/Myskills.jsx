import React from 'react'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import js from '../assets/Javascript.png'
import react from '../assets/ReactJs.png'
import tailwind from '../assets/tailwindcss.png'
import php from '../assets/php.png'
import figma from '../assets/Figma.png'
import nodejs from '../assets/Nodejs.png'
import mongodb from '../assets/MongoDb.png'
import firebase from '../assets/Firebase.png'
import python from '../assets/python.png'
import adobe from '../assets/Adobe XD.png'
import photoshop from '../assets/Photoshop.png'
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Myskills = () => {
  return (
    <section id="skills" className='max-w-[1200px] mx-auto mt-20 px-8'>
         <h1 className='text-4xl md:text-5xl font-heading font-bold tracking-tight text-start'>Tech <span className='text-[#2BC1EA]'>Stack</span></h1>
       <div className='grid lg:grid-cols-3 gap-8 py-14'>
        <div>
         <h2 className='text-2xl md:text-3xl font-heading font-semibold text-center mb-8 tracking-tight'>Frontend</h2>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className='grid grid-cols-2 gap-4 md:border-r-2 border-[#2BC1EA] lg:pr-5'>
          <img className='w-[200px] rounded-md mx-auto' src={html} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={js} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={react} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={tailwind} alt="" />
        </motion.div>
        </div>
        <div>
         <h2 className='text-2xl md:text-3xl font-heading font-semibold text-center mb-8 tracking-tight'>Backend</h2>
        <motion.div 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className='grid grid-cols-2 gap-4 md:border-r-2 border-[#2BC1EA] lg:pr-5'>
          <img className='w-[200px] rounded-md mx-auto' src={nodejs} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={php} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={mongodb} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={firebase} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={python} alt="" />
        </motion.div>
        </div>
        <div>
         <h2 className='text-2xl md:text-3xl font-heading font-semibold text-center mb-8 tracking-tight'>Design Tools</h2>
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className='grid grid-cols-2 gap-4 border-r-2 border-[#2BC1EA00] lg:pr-5'>
          <img className='w-[200px] rounded-md mx-auto' src={adobe} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={figma} alt="" />
          <img className='w-[200px] rounded-md mx-auto' src={photoshop} alt="" />
        </motion.div>
       </div>
       </div>
    </section>
  )
}

export default Myskills