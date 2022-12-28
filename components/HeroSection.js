import { useState } from 'react'
import { Poppins } from '@next/font/google'
import { motion } from "framer-motion"
import Navbar from './Navbar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500'] 
})


const HeroSection = () => {

  return (
    <>
      <div className="section" id="hero">
        <Navbar />
        <div className='hero-container'>
          <div className='hero-left'>
            <text>Hi, my name is </text>
            <h1 className={poppins.className}>Adriaan Boshoff</h1>
            
            <div
              // initial={{ x: -100 }}
              // animate={{
              //   x: [-100, 100, 0 ]
              // }}
              // transition={{
              //   type: "spring",
              //   duration: 0.6,
              //   times: [0.2, 0.2, 0.2],
              // }}
            >
              <span>I love </span>
              <span>
                <motion.div
                      className='love-1'
                      animate={{
                        rotateX: [0, 360]
                      }}
                      transition={{
                        duration: 2,
                        type: "spring",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                > web development</motion.div>
                <motion.span hidden> creating value</motion.span>
                <motion.span hidden> pizza</motion.span>
              </span>
            </div>
          </div>
          <div className='hero-right'>
            <div className='hero-image'></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          display: flex;
          flex-direction: row;
        }
        
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
        }

        .hero-left h1 {
          font-size: 4rem;
          line-height: 5rem;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .hero-left span {
          font-size: 2rem;
          font-weight: 500;
        }

        .heroText {
          display: flex;
        }

        .hero-image{
          background-color: var(--accent-secondary);
          width: 350px;
          height: 350px;
        }


      `}</style>
    </>
  );
}

export default HeroSection;