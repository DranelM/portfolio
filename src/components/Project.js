import techImages from '../utils/techIcons';

const Project = ({ data }) => {
  return (
    <div className="projectWrapper">
      <div className="projectTitle">{data.title}</div>
      <div className="project">
        <a href={data.url}>
          <img
            className="projectImage"
            src={data.image_url}
            alt={data.title}
          ></img>
        </a>
        <ul className="projectStack">
          {data.stack.map((tech) => (
            <li key={tech}>
              <img
                className="stackImage"
                src={techImages[tech.toLowerCase()].img}
                title={tech}
                alt={tech}
              ></img>
            </li>
          ))}
        </ul>

        <div className="projectDesc">{data.desc}</div>
      </div>
    </div>
  );
};

export default Project;
