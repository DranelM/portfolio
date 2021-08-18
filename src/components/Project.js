const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="title">{data.title}</div>
      <img
        className="projectImage"
        src={data.image_url}
        alt={data.title}
        width="30%"
      ></img>
      <div className="desc">{data.desc}</div>
      <ul className="stack">
        {data.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
