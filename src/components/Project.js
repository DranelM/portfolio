const Project = ({ data }) => {
  return (
    <div className="project">
      <sector className="topProjectSector">
        <div className="projectTitle">{data.title}</div>
        <a href={data.url}>
          <img
            className="projectImage"
            src={data.image_url}
            alt={data.title}
          ></img>
        </a>
      </sector>
      <div className="projectDesc">{data.desc}</div>
      <ul className="projectStack">
        {data.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
