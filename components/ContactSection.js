import { motion } from 'framer-motion'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <>
      <div className="section" id="contact">
        <div className='contact-left'>        
        <motion.div
          className='contact-text'
          initial={{ x:-200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h1 className='section-title'>Contact Section</h1>
          <p>Thank you for visiting my page. <br /> I'd be delighted to hear from you. </p>
          <div className='social-icons'>
            <Link 
              alt="twitter" 
              className='social-icon' 
              href="">
              twit
            </Link>
            <Link 
              alt="github" 
              className='social-icon' 
              href="">
              git
            </Link>
            <Link 
              alt="email" 
              className='social-icon' 
              href="">
              mail
            </Link>
          </div>
        </motion.div>
        </div>

        <div className='contact-right'>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <div className='form-group'>
              <input type="text" placeholder='email'></input>
              <input type="text" placeholder='subject'></input>
              <input type="text-area" placeholder='message'></input>
              <input type='submit'></input>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .contact-right, .contact-left {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .section-title {
          position: static;
          align-self: flex-start;
          padding: 2rem 0;
          font-size: 3em;
          margin-bottom: 2rem;
        }

        .contact-left p {
          font-size: 24px;
          line-height: 36px;
          margin-bottom: 2rem;
        }

        .contact-right {
          background-color: var(--accent-primary);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        input[type=text], input[type=text-area] {
          background-color: var(--fg-text);
          color: var(--bg-primary);
          width: 100%;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: none;
        }

        input[type=text-area] { 
          height: 6rem;
          width: 18rem;
        }

        .social-icons {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          justify-content: center;
          padding: 2rem;
        }
      `}</style>
    </>

  );
}

export default ContactSection;