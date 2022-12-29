import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


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
              <Link href="#projects">Projects</Link>
            </motion.li>
            <motion.li variants={item}>About</motion.li>
            <motion.li variants={item}>
              <Link href="#contact">Contact</Link>
            </motion.li>
          </motion.ul>
        </nav>

        <nav className='hamburger' onClick={() => setMenuActive(!menuActive)}>   
          <Image alt='mobile-menu' src="/burgermenu.svg" width="48" height="48" className='filter-white'></Image>
        </nav>
      </div>
      <nav className={menuActive?'mobile-menu':'hidden'}>
          <ul className="mobile-nav-item" 
            onClick={() => setMenuActive(!menuActive)}
          >
            <li variants={item}>
              <Link href="#projects">Projects</Link>
            </li>
            <li variants={item}>About</li>
            <li variants={item}>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
      </nav>
      <style jsx>{`
        .navbar {
          position: absolute;
          top: 0;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 100px;
          padding: 0 1rem;
        }

        .mobile-menu {
          display: flex;
          justify-content: flex-end;
          position: absolute;
          top: 100px;
          width: 100%;
          background-color: var(--bg-secondary);
        }

        .mobile-nav-item {
          flex-direction: column;
          align-items: space-around;
          gap: 1rem;
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