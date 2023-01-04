import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image';
import toTop from '../public/toTop.svg'

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
            <h3 className='thanks'>Thank you for visiting my page. Please say hello or contact me if you have any questions. </h3>
            <div className='social-icons'>
              <Link 
                alt="twitter" 
                className='social-icon' 
                href="https://twitter.com/adriaanl3">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path fill={"var(--accent-primary)"}d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/></svg>
              </Link>
              <Link 
                alt="github" 
                className='social-icon' 
                href="https://github.com/abmakes">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path fill={"var(--accent-primary)"} d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
              </Link>
              <Link 
                alt="email" 
                className='social-icon' 
                href="https://signup.mailgun.com/new/signup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path fill={"var(--accent-primary)"} d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"/></svg>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className='contact-right'
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <form className='form-group' onSubmit={(e) => {
              const { message, email, subject } = e.target
              e.preventDefault();
              console.log(email.value, subject.value, message.value)
            }}>
            <div className="input-group">      
              <input id="email" type="text" required></input>
              <label>email</label>
            </div>
            <div className="input-group">      
              <input id="subject" type="text" required></input>
              <label>subject</label>
            </div>
            <div className="input-group">      
              <textarea id="message" rows="4" required></textarea>
              <label>type your message</label>
            </div>
            <button type='submit'>Send message</button>          
            <div className='back-to-top'>
              <Link alt='to-top' href='#hero'>
                <Image 
                  alt="to top button" 
                  src={toTop} 
                  width={40} 
                  height={40}
                  style={{
                    position: "static",
                    right: "0px",
                    bottom: "0px",
                    zindex: "3",
                    cursor: "pointer",
                    color: "#000000",
                  }}
                ></Image>
              </Link>
            </div>
          </form>

        </motion.div>
        
      </div>

      <style jsx>{`
        .back-to-top {
          padding-bottom: 1rem;
        }
        .thanks {10
          display: flex;
          flex-wrap: wrap;
          padding: 0 1rem 0 2rem;
        }
        .section {
          height: 100vh;
          flex-direction: row;
          flex-wrap: wrap;
        }


        .form-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0 2rem;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }

        input[type=text], textarea {
          margin-top: 1rem;
          display: block;
          background-color: #fafaf9;
          color: #171717;
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: 0.5rem;
          border: none;
        }

        button {
          background-color: var(--accent-primary);
          color: #fafaf9;
          border-radius: 0.5rem;
          border: none;
          margin-bottom: 1rem;
          padding: 0.5rem 2rem;
        }

        button:hover {
          background-color: #fafaf9;
          color: var(--accent-primary);
          font-weight: 700;
          cursor: pointer;
        }

        .social-icons {
          display: flex;Name
          flex-direction: row;
          gap: 2rem;
          justify-content: center;
          padding: 1rem 2rem 0 2rem;
        }
        /* floating labels */
        .input-group { 
          width: 100%;
          max-width: 350px;
          position:relative; 
        }
        label {
          color: #333333; 
          font-size:14px;
          position:absolute;
          pointer-events:none;
          left: 1rem;
          top: 1.6rem;
          transition:0.2s ease all; 
          -moz-transition:0.2s ease all; 
          -webkit-transition:0.2s ease all;
        }

        /* active state */
        input[type=text]:focus + label, textarea:focus + label {
          top:-0.5rem;
          font-size:14px;
          color: #fafaf9;
        }

        input:focus { outline:none;}

        input:valid + label, textarea:valid + label {
          display: none;
        }

      `}</style>
    </>
  );
}

export default ContactSection;