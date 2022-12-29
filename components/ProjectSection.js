import Link from "next/link";

const ProjectSection = () => {
  return (
    <>
      <div className="section" id="projects">      
        <h2 className="section-title">Projects</h2>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h2>Project X</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Visit site</Link>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h2>Project X</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Github</Link>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h2>Project X</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link">
              <Link href=''>Github</Link>
              <Link href=''>Visit site</Link>

            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h2>Project X</h2>
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
        width: 45%;
        min-width: 320px;
        background-color: var(--bg-primary);
        padding: 1rem 2rem;
       }

       .project-text h2 {
        margin-bottom: 1rem;
       }

       .project-image {
        width: 55%;
        min-width: 350px;
        height: 420px;
        background-color: var(--bg-secondary);
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

       }

      `}</style>
    </>
  );
}

export default ProjectSection;