import { Poppins } from '@next/font/google'
import { motion } from "framer-motion"
import Image from 'next/image'
import HeroImage from "../public/portrait.png"

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500'] 
})


const HeroSection = () => {

  return (
    <>
      <div className="section" id="hero">
        <div className='hero-container'>
          <div className='hero-left'>
            <text>Hi, my name is </text>
            <h1 className={poppins.className}>Adriaan Boshoff</h1>
            
            <h3
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
            </h3>
          </div>
          <div className='hero-right'>
            <div className='hero-image' style={{imageRendering: "pixelated"}}>
              <Image alt="blue man" src={HeroImage} height={300} width={300} quality={100}></Image>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-right {
          position: relative;
          width: 40%;
          left: -50px;
        }
        .hero-container {
          display: flex;
          flex-direction: row;
        }
        
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          z-index: 2;
        }

        .hero-left h1 {
          width: 100%;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .hero-left span {
          font-weight: 500;
        }

        .heroText {
          display: flex;
        }

        .hero-image{
          position: absolute;
          max-width: 100vw;
        }

        /* Mobile */
        @media (max-width: 700px) {
          .hero-right {
            display: flex;
            justify-content: center;
            position: relative;
            width: 100%;
            height: 150px;
            left: 0;
            top: -100px;
            z-index: 0;
        }
        }

        /* Tablet and Smaller Desktop */
        @media (min-width: 701px) and (max-width: 1120px) {
          .hero-right {

          }
        }

      `}</style>
    </>
  );
}

export default HeroSection;