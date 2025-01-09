import Project01 from './projects/Project01';
import Project02 from './projects/Project02';
import Project03 from './projects/Project03';

const Projects: React.FC = () => {
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

export default Projects;
