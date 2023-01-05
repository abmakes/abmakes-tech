import { Poppins, Bitter } from '@next/font/google'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from "../public/contour.svg"
import Navbar from '../components/Navbar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500'] 
})

const bitter = Bitter({ 
  subsets: ['latin'],
  weight: ['400', '500'] 
})


const HeroSection = () => {

  return (
    <>
      <div className="section" id="hero">
        <Navbar />
        <div className='gradient-border'>
          <Link alt="view projects" href="#projects">
            <button className='call-to-action'>scroll</button>
          </Link>
        </div>
        <div className='bg-image'>
          <Image alt="contour background" src={HeroImage} 
          style={{
            position: "absolute",
            width: "100vw",
            height: "120vh",
            top: 0, 
            left: 0
          }}></Image>
        </div>
        <div className='hero-container'>
          <div className='hero-left'>
            <div className='hero-text-group'>
              <text>Hi, my name is </text>
              <h1 className={poppins.className}>Adriaan <span className='mobile-hide'>Boshoff</span></h1>
              
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
                  {/* <motion.span hidden> creating value</motion.span>
                  <motion.span hidden> pizza</motion.span> */}
                </span>
              </h3>
            </div>
          </div>
          <div className='hero-right'>
            <motion.div  
              className="gradient-shift"
            >
              <svg width="255" height="192" viewBox="0 0 255 192" fill="#309309" 
              xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="dough">
                    <path d="M239.791 65.4178C202.583 47.3356 189 57.5 198.547 18.5889C208.094 -20.3222 62.9916 12.8537 74.9599 48.8726C85.704 81.2075 54.0561 77.9392 12.8546 112.892C-57.9071 172.922 226.24 224.974 226.24 161.735C226.24 103.5 277 83.5 239.791 65.4178Z" stroke="#12100F" stroke-width="2"/>
                  </clipPath>
                </defs>
              </svg>

              {/* <Image 
                alt="blue man" 
                src={HeroImage}
                style={{
                  width: '50vw',
                  maxWidth: '300px',
                  aspectRatio: 1 / 1,
                  height: 'auto',
                }}  
                quality={100}
              ></Image> */}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`

        .gradient-border {
          position: absolute;
          bottom: -1rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-top: 2rem;
          padding-bottom: 1rem;
          width: 0.3rem;
          height: 7rem;
          z-index: 99;
          border-radius: 1.7rem;
          box-shadow: 1px 1px 5px #171717;
        }

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
          z-index: 3;
        }

        .hero-left {
          height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          z-index: 3;
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
            height: 40vh;
          }

          .mobile-hide {
            display: none;
          }

          .hero-left {
            padding-left: 3rem;
            width: 100%;
            height: 40vh;
            justify-content: flex-end;
          }
        }

        /* Tablet and Smaller Desktop */
        @media (min-width: 701px) and (max-width: 1120px) {
          .hero-right {

          }

          .mobile-hide {
            display: none;
          }
        }

      `}</style>
    </>
  );
}

export default HeroSection;