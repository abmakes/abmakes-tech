import Link from "next/link";
import Image from "next/image";
import sats_v2 from "../public/project-images/satstobits_v2.png";
import sats_v1 from "../public/project-images/satstobits_v1.png";
import savedave from "../public/project-images/save_dave.png";
import edie from "../public/project-images/edie_demo.png";
import { motion } from "framer-motion"
import javascript from "../public/tech-icons/javascript.svg";
import django from "../public/tech-icons/django.svg";
import nextjs from "../public/tech-icons/NextJS-Dark.svg";
import react from "../public/tech-icons/react-icon.svg";
import css from "../public/tech-icons/icons8-css3.svg";
import redux from "../public/tech-icons/Redux.svg";

const ProjectSection = () => {
  return (
    <>
      <div className="section" id="projects">      
        <div className="heading-area">
          <h2 className="section-title">Projects</h2>
          <h2 className="section-title-rear">Projects</h2>
        </div>
        
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ x:-200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Image 
              alt="crypto trading journal" 
              src={sats_v2}
              style={{
                width: '100%',
                maxWidth: '750px',
                aspectRatio: 620 / 400,
                height: 'auto',
              }} 
            ></Image>
          </motion.div>
          <div className="project-text">
            <div className="space-between">
              <h2>SatsToBits</h2>
              <div className="project-tech">
                <Image
                  alt="next-js"
                  src={nextjs}
                  width={24}
                  height={24}
                ></Image>
                <Image
                  alt="django"
                  src={django}
                  width={24}
                  height={24}
                ></Image>
                <Image
                  alt="redux"
                  src={redux}
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
            <h3>A Bitcoin trading journal with trade signals</h3>
            <p>Bitcoin price information is processed into charts with user specified buy and sell levels. There is also a trade journal to keep track of your trades. Trades created by the user are used to deduce useful account statistics.</p>
            <p>This project uses NextJs, Redux and Apache eCharts for the frontend. While Django Rest Framework and a PostGresQL Database make up the backend.</p>

            <div className="project-link">
              <div className="gradient-border">
                <div className="fill-primary">
                <Link href='https://satstobits-nextjs.vercel.app/'>Visit site</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <motion.div 
              className="project-image"
              initial={{ x:-200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
            <Image 
              alt="save-dave budget app" 
              src={savedave}
              style={{
                width: '100%',
                maxWidth: '650px',
                aspectRatio: 450 / 350,
                height: 'auto',
                  }}  
            ></Image>
          </motion.div>
          <div className="project-text">
            <div className="space-between">
              <h2>Save Dave</h2>
              <div className="project-tech">
              <Image
                alt="react"
                src={react}
                width={24}
                height={24}
              ></Image>
              <Image
                alt="javascript"
                src={javascript}
                width={24}
                height={24}
              ></Image>
              </div>
            </div>
            <h3>An expense tracker</h3>
            <p>This expense tracker inverts the normal flow of data capture. You enter your end of day  account balance and then expand n the details.</p>
            <p>Built using create react app and vanilla CSS, the goal was to experiment with forms and sliders. It has a neo-brutalist styled UI as it is a nice fit with the apps theme.</p>
            <p>It was built for mobile first and uses local browser storage used for the app data</p>
            <div className="project-link">
              <Link href='https://github.com/abmakes/dave-expense-tracker'>Github</Link>
              <div className="gradient-border">
                <div className="fill-primary">
                  <Link href='https://save-dave.netlify.app/'>Visit site</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ x:-200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Image 
              alt="crypto coin tracker" 
              src={sats_v1}
              style={{
                width: '100%',
                maxWidth: '750px',
                aspectRatio: 640 / 430,
                height: 'auto',
              }}  
            ></Image>
          </motion.div>
          <div className="project-text">

            <div className="space-between">
              <h2>SatsToBits V1</h2>
              <div className="project-tech">
              <Image
                alt="django"
                src={django}
                width={24}
                height={24}
              ></Image>
              <Image
                alt="javascript"
                src={javascript}
                width={24}
                height={24}
              ></Image>
              </div>
            </div>
            
            <h3>A cryptocurrency coin tracker</h3>
            <p>
            The project was built using Django and Javascript. Bootstrap was used in combination with django templating to the design the frontend. Bootstraps opinionated style and easy components allowed for a focus on the functionality and interactions of the app. </p>
            
            <p>The app included a search function of the top 500 cryptocurrencies and wishlisting of your favourite coins. App was hosted on Heroku but is no longer no longer live due to platform changes.</p>

            <div className="project-link">
              <Link href='https://github.com/abmakes/crypto_watchlist_app'>Github</Link>
            </div>
          </div>
        </div>
        
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ x:-200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Image 
              alt="company profile website" 
              src={edie} 
              style={{
                width: '100%',
                maxWidth: '750px',
                aspectRatio: 620 / 400,
                height: 'auto',
              }}
            ></Image>
          </motion.div>
          <div className="project-text">
            <div className="space-between">
              <h2>Edie</h2>
              <div className="project-tech">
                <Image
                  alt="next-js"
                  src={nextjs}
                  width={24}
                  height={24}
                ></Image>
                <Image
                  alt="javascript"
                  src={javascript}
                  width={24}
                  height={24}
                ></Image>
              </div>
            </div>
            <h3>A perfomance optimised company website</h3>
            <p>This is a demo website for an fictional Edie company. Built as a frontend layout and design experiment, the challenge was to build and match the Figma design as closely as possible.</p> 
            <p>Thereafter it also allowed for the practice in deploying, and optimizing nextJs sites on Netlify. The site achieved a perfect score in Google Lighthouse.</p>
            <div className="project-link">
              <Link href='https://www.figma.com/file/ahnGupP4JjTdVJDTRfMRF2/edie-homepage?node-id=0%3A1'>Design</Link>
              <Link href='https://github.com/abmakes/Company-profile-nextjs'>Github</Link>
              <div className="gradient-border">
                <div className="fill-primary">
                  <Link href='https://the-edie-company.netlify.app/'>Visit site</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .heading-area {
          padding: 2rem;
        }
        .space-between {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .project-text h2 {
          font-size: 38px;
          width: 100%;
          font-weight: 700;
          margin-bottom: 0rem;
        }
        .project-text h3 {
          padding: 1rem 0;
          font-size: 24px;
          font-weight: 300;
        }

        .project-tech {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          column-gap: 0.5rem;
        }
       .section {
        height: 100%;
        flex-direction: column;
        padding-bottom: 4rem;
       }
       .project-link {
        display: flex;
        gap: 1rem;
       }

       .section-title {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        font-size: 72px;
        font-weight: 700;
        color: var(--fg-secondary);
        padding: 2rem 0 0 0;
        z-index: 10;
       }

       .section-title-rear {
        position: relative;
        width: 100%;
        top: -1rem;
        font-size: 200px;
        font-weight: 700;
        color: var(--bg-primary);
        text-shadow: 3px 5px 0px var(--accent-secondary);
        text-shadow: -1px -1px 0 #1d4ed8, 1px -1px 0 #1d4ed8, -1px 1px 0 #1d4ed8, 1px 1px 0 #1d4ed8;
        z-index: 1;
       }

       .project-item {
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4rem;
        margin-bottom: 2rem;
       }

       .project-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 85%;
        min-width: 320px;
        padding: 1rem 2rem;
       }

       .project-image {
        display: flex;
        justify-content: center;
        width: 100%;
        min-width: 350px;
       }


       .project-link {
        margin-top: 1rem;
        align-self: flex-end;
        align-items: center;
       }

       @media (max-width: 700px){
        .section-title {
          font-size: 48px;
        }

        .section-title-rear {
          font-size: 72px;
        }
        .project-text {
          padding: 2rem 0;
          align-self: flex-start;
        }

        .project-item {
          height: 100%;
          padding: 3rem 0rem;
        }

        .project-text h2 {
          font-size: 34px;
        }

        .project-image {
          width: 100%;
        }

        p {
          font-size: 15px;
          line-height: 20px;
        }


       }

       @media (min-width: 701px) and (max-width: 1120px) {
        .section-title-rear {
          font-size: 120px;
        }

       }
      `}</style>
    </>
  );
}

export default ProjectSection;