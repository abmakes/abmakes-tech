import { Poppins } from '@next/font/google'
import { motion } from "framer-motion"
import Image from 'next/image'
import HeroImage from "../public/portrait2.png"
import Navbar from '../components/Navbar'

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
            <div className='hero-image' 
              style={{imageRendering: "crisp-edges"}}
            >
              <Image 
                alt="blue man" 
                src={HeroImage}
                style={{
                  width: '50vw',
                  maxWidth: '300px',
                  aspectRatio: 1 / 1,
                  height: 'auto',
                }}  
                quality={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        
        .hero-right {
          display: flex;
          height: 50vh;
          justify-content: center;
          align-items: center;
        }

        .hero-left {
          height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
        }

        .hero-left h1 {
          width: 100%;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .hero-left span {
          font-weight: 500;
        }

        /* Mobile */
        @media (max-width: 700px) {
          .hero-right {
            display: flex;
            align-items: flex-start;
            width: 100%;
            height: 50vh;
          }

          .hero-left {
            justify-content: flex-end;
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