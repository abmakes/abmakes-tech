import Link from "next/link";
import Image from "next/image";
import sats_v2 from "../public/project-images/satstobits_v2.png";
import sats_v1 from "../public/project-images/satstobits_v1.png";
import savedave from "../public/project-images/save_dave.png";
import edie from "../public/project-images/edie_demo.png";


const ProjectSection = () => {
  return (
    <>
      <div className="section" id="projects">      
        <h2 className="section-title">Projects</h2>
        
        <div className="project-item">
          <div className="project-image">
            <Image alt="crypto trading journal" src={sats_v2} width={627/1.5} height={402/1.5}></Image>
          </div>
          <div className="project-text">
            <h2>SatsToBits - Trading Journal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Visit site</Link>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <Image alt="save-dave budget app" src={savedave} width={449/1.5} height={348/1.5}></Image>
          </div>
          <div className="project-text">
            <h2>Expense tracker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Github</Link>
            </div>
          </div>
        </div>
        
        <div className="project-item">
          <div className="project-image">
            <Image alt="crypto coin tracker" src={sats_v1} width={640/1.5} height={430>1.5}></Image>
          </div>
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
          <div className="project-image">
            <Image alt="company profile website" src={edie} width={627/1.5} height={406/1.5}></Image>
          </div>
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
        overflow-y: scroll;
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
        height: 100%;
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
        width: 50%;
        min-width: 320px;
        padding: 1rem 3rem;
       }

       .project-text h2 {
        margin-bottom: 1rem;
       }

       .project-image {
        display: flex;
        justify-content: center;
        width: 50%;
        min-width: 350px;
        max-height: 420px;
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
        }

        .project-image {

          width: 100%;
          height: 40%;
        }


       }

      `}</style>
    </>
  );
}

export default ProjectSection;