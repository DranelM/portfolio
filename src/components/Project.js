import {
  ProjectContent,
  ProjectDesc,
  ProjectImage,
  ProjectStack,
  ProjectTitle,
  ProjectWrapper,
  StackImage,
} from '../styles/Project.style';
import techImages from '../utils/techIcons';

const Project = ({ data }) => {
  return (
    <ProjectWrapper>
      <ProjectTitle>
        <a href={data.url}>{data.title}</a>
      </ProjectTitle>
      <ProjectContent>
        <a href={data.url}>
          <ProjectImage src={data.image_url} alt={data.title}></ProjectImage>
        </a>
        <ProjectStack>
          {data.stack.map((tech) => (
            <li key={tech}>
              <StackImage
                src={techImages[tech.toLowerCase()].img}
                title={tech}
                alt={tech}
              ></StackImage>
            </li>
          ))}
        </ProjectStack>
        <ProjectDesc>{data.desc}</ProjectDesc>
      </ProjectContent>
    </ProjectWrapper>
  );
};

export default Project;
