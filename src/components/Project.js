import jsImage from '../assets/js.png';
import cssImage from '../assets/css.png';
import htmlImage from '../assets/html.png';
import nodeImage from '../assets/node.png';
import tsImage from '../assets/ts.png';
import reactImage from '../assets/react.png';
import jestImage from '../assets/jest.png';

const techImages = {
  js: jsImage,
  css: cssImage,
  html: htmlImage,
  node: nodeImage,
  typescript: tsImage,
  react: reactImage,
  jest: jestImage,
};

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

      <ul className="projectStack">
        {data.stack.map((tech) => (
          <li key={tech}>
            <img
              className="stackImage"
              src={techImages[tech.toLowerCase()]}
              alt={tech}
            ></img>
          </li>
        ))}
      </ul>

      <div className="projectDesc">{data.desc}</div>
    </div>
  );
};

export default Project;
