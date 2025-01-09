import Project01 from './projectsJP/Project01';
import Project02 from './projectsJP/Project02';
import Project03 from './projectsJP/Project03';

const ProjectsJP: React.FC = () => {
  return (
    <div className='Projects'>
      <h3>PROJECTS</h3>
      <div className="project-container">
        <Project01  />
        <Project02 />
        <Project03 />
      </div>
    </div>
  );
}

export default ProjectsJP;