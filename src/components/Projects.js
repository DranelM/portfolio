import { useEffect, useState } from 'react';
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
    <div className="projectsWrapper">
      <h1 className="projectsLabel">Check out my projects</h1>
      <div className="projects">
        {projectsList.map((project) => (
          <Project data={project} key={project._id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
