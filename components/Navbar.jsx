import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import twitter from '../public/social/twitter.svg'
import github from '../public/social/github.svg'
import email from '../public/social/gmail.svg'


const Navbar = () => {
  // const list = { opacity: 0 }
  // const item = { x: -10, opacity: 1 }
  const [menuActive, setMenuActive] = useState(false)
  
  return (
    <>
      <div className='navbar'>
        <div>
          <Link href="#hero">
            <Image alt='alb-logo' src="/logo.svg" width="74" height="47" className='filter-white'></Image>
          </Link>
        </div>
            
        <span className={!menuActive?'show':'hidden'} onClick={() => setMenuActive(!menuActive)}>menu.</span>

        <nav className={menuActive?'mobile-menu':'hidden'} onClick={() => setMenuActive(!menuActive)}>

          <div className="mobile-nav-item" >
              <div className='mobile-list-item'>X</div>
              <Link href="#projects" className='mobile-list-item'>Projects</Link>
              <Link href="#about" className='mobile-list-item'>About</Link>
              <Link href="#contact" className='mobile-list-item'>Contact</Link>
              <Link 
                alt="twitter" 
                className='social-icon' 
                href="https://twitter.com/adriaanl3">
                <div className='small-icon'>
                  <Image
                    alt='twitter'
                    src={twitter}
                    height={28}
                    width={28}
                  ></Image>
                </div>
              </Link>
              <Link 
                alt="github" 
                className='social-icon' 
                href="https://github.com/abmakes">
                <div className='small-icon'>
                  <Image
                    alt='github'
                    src={github}
                    height={28}
                    width={28}
                  ></Image>
                </div>
              </Link>
              <Link 
                alt="email" 
                className='social-icon' 
                href="https://signup.mailgun.com/new/signup">
                <div className='small-icon'>
                  <Image
                    alt='email'
                    src={email}
                    height={28}
                    width={28}
                  ></Image>
                </div>
              </Link>
            </div>
        </nav>
      </div>

      <style jsx>{`

      @media (min-width: 1300px) {
        .show {
          position: fixed;
          right: 10vw;
        }
      }
      @media (min-width: 1600px) {
        .show {
          position: fixed;
          right: 15vw;
        }
      }

      `}</style>
    </>
  );
}

export default Navbar;