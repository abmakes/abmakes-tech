import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import twitter from '../public/social/twitter.svg'
import github from '../public/social/github.svg'
import email from '../public/social/gmail.svg'


const Navbar = () => {
  const list = { opacity: 0 }
  const item = { x: -10, opacity: 1 }
  const [menuActive, setMenuActive] = useState(false)
  
  return (
    <>
      <div className='navbar'>
        <div>
          <Link href="#hero">
            <Image alt='alb-logo' src="/logo.svg" width="74" height="47" className='filter-white'></Image>
          </Link>
        </div>
        <nav className='menu'>
          <motion.ul animate="hidden" variants={list} className="nav-item">
            <motion.li variants={item}>
              <Link href="#projects">Projects.</Link>
            </motion.li>
            <motion.li variants={item}>About.</motion.li>
            <motion.li variants={item}>
              <Link href="#contact">Contact.</Link>
            </motion.li>
          </motion.ul>
        </nav>

        <nav className='hamburger' onClick={() => setMenuActive(!menuActive)}>   
          <div className='burger'></div>
          <div className='burger'></div>
          <div className='burger'></div>
          {/* <Image alt='mobile-menu' src="/burgermenu.svg" width="48" height="48" className='filter-white'></Image> */}
        </nav>
      </div>
      <nav className={menuActive?'mobile-menu':'hidden'}>
          <ul className="mobile-nav-item" 
            onClick={() => setMenuActive(!menuActive)}
          >
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
                    height={32}
                    width={32}
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
                    height={32}
                    width={32}
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
                    height={32}
                    width={32}
                  ></Image>
                </div>
              </Link>
          </ul>
      </nav>
      <style jsx>{`
        .small-icon  {
          padding: 0.3rem 0.6rem;
          border-right: 2px solid var(--accent-primary);
          margin-right: 1rem;
        }
        .navbar {
          position: absolute;
          top: 0;
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          padding: 0 1rem;
        }

        .mobile-nav-item {
          display: flex;
          align-items: flex-end;
          flex-direction: column;
        }
        .mobile-menu {
          position: absolute;
          display: flex;
          justify-content: flex-end;
          top: 60px;
          width: 100%;
        }


        .burger {
          width: 35px;
          height: 5px;
          background-color: var(--fg-heading);
          margin: 6px 0;
        }



        .hamburger {
          display: none;
        }

        .hidden {
          display: none;
        }

        @media (max-width: 700px) {
          .hamburger {
            display: block;
          }
          .menu {
            display: none;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;