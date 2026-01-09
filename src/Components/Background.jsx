import React from 'react'
import { motion } from 'framer-motion'

const Background = () => {
    const circleVariants = {
        animate: {
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#0E1A4A]">
            {/* Circle 1 */}
            <motion.div 
                variants={circleVariants}
                animate="animate"
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2BC1EA] opacity-20 blur-[100px]"
            />
            
            {/* Circle 2 */}
            <motion.div 
                 animate={{
                    scale: [1, 1.5, 1],
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#3b82f6] opacity-20 blur-[100px]"
            />

            {/* Circle 3 */}
            <motion.div 
                 animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#06b6d4] opacity-20 blur-[120px]"
            />
        </div>
    )
}

export default Background
