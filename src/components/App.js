import { useEffect, useState } from 'react';

const App = () => {
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
    <div className="app">
      {projectsList.map((project) => (
        <div className="project">
          <div className="title">{project.title}</div>
          <div className="desc">{project.desc}</div>
          <ul>
            {project.stack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
          <img
            className="projectImage"
            src={project.image_url}
            alt={project.title}
            width="30%"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default App;
