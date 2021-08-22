const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="title">{data.title}</div>
      <a href={data.url}>
        <img
          className="projectImage"
          src={data.image_url}
          alt={data.title}
        ></img>
      </a>
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
