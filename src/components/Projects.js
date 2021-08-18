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
    <>
      <label className="projectsLabel">
        Projects
        <div className="projects">
          {projectsList.map((project) => (
            <Project data={project} key={project._id} />
          ))}
        </div>
      </label>
    </>
  );
};

export default Projects;
