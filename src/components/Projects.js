import { useEffect, useState } from 'react';
import {
  ProjectsLabel,
  ProjectsMeat,
  ProjectsWrapper,
} from '../styles/Projects.style';
import Project from './Project';

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const results = await fetch('/express_backend/projects');
      const json = await results.json();

      setProjectsList(json.projects);
    }

    getProjects();
  }, []);

  return (
    <ProjectsWrapper>
      <ProjectsLabel>
        Check out <span>my projects</span>
      </ProjectsLabel>
      <ProjectsMeat>
        {projectsList.map((project) => (
          <Project data={project} key={project._id} />
        ))}
      </ProjectsMeat>
    </ProjectsWrapper>
  );
};

export default Projects;
