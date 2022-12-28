 
const ProjectSection = () => {
  return (
    <>
      <div className="section" id="projects">      
        <h1 className="section-title">Projects</h1>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h3>Project X</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link"><a>Project link</a></div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h3>Project X</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link"><a>Project link</a></div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image"></div>
          <div className="project-text">
            <h3>Project X</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="project-link"><a>Project link</a></div>
          </div>
        </div>
      </div>
      <style jsx>{`
       .section {
        height: 100%;
        flex-direction: column;
        background-color: var(--bg-secondary);
       }

       .section-title {
        position: static;
        align-self: flex-start;
        padding: 2rem 2rem 2rem 2rem;
        font-size: 3em;;
       }

       .project-item {
        display: flex;
        flex-direction: row;
       }

       .project-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 45%;
        min-width: 350px;
        background-color: var(--bg-primary);
        padding: 1rem;
       }

       .project-text h3 {
        margin-bottom: 1rem;
       }

       .project-image {
        width: 55%;
        min-width: 350px;
        height: 420px;
        background-color: var(--accent-secondary);
       }

       .project-link {
        margin-top: 1rem;
        align-self: flex-end;
       }

      `}</style>
    </>
  );
}

export default ProjectSection;