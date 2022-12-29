import Link from "next/link";
import Image from "next/image";
import sats_v2 from "../public/project-images/satstobits_v2.png";
import sats_v1 from "../public/project-images/satstobits_v1.png";
import savedave from "../public/project-images/save_dave.png";
import edie from "../public/project-images/edie_demo.png";
import { motion } from "framer-motion"


const ProjectSection = () => {
  return (
    <>
      <div className="section" id="projects">      
        <h2 className="section-title">Projects</h2>
        
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ x:-200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}v
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
            <h2>SatsToBits - Trading Journal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="project-link">
              <Link href=''>Visit site</Link>
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
            <h2>Expense tracker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Github</Link>
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
            <h2>SatsToBits V1 - Crypto tracker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Github</Link>
              <Link href=''>Visit site</Link>

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
            <h2>Edie company website</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Github</Link>
              <Link href=''>Visit site</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        position: static;
        align-self: flex-start;
        padding: 2rem;
       }

       .project-item {
        height: 80vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        margin-bottom: 2rem;
       }

       .project-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        min-width: 320px;
        padding: 1rem 3rem;
       }

       .project-text h2 {
        margin-bottom: 1rem;
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
       }

       @media (max-width: 700px){
        .project-text {
          padding: 2rem 0;
          align-self: flex-start;
        }

        .project-item {
          height: 100vh;
          padding-bottom: 4rem;
        }

        .project-image {
          width: 100%;
        }


       }

      `}</style>
    </>
  );
}

export default ProjectSection;