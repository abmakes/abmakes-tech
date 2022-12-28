import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  const list = { opacity: 0 }
  const item = { x: -10, opacity: 1 }
  
  return (
    <>
      <div className='navbar'>
        <div>
          <Link href="#hero">
            <Image alt='alb-logo' src="/logo.svg" width="74" height="47" className='filter-white'></Image>
          </Link>
        </div>
        <nav>
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
      </div>
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
      `}</style>
    </>
  );
}

export default Navbar;