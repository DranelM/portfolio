import techIcons from '../utils/techIcons';

const Skills = () => {
  return (
    <div className="skillsWrapper">
      <h1 className="skillsLabel">What I know</h1>
      <div className="skills">
        {Object.entries(techIcons).map(([techName, icon]) => (
          <img
            key={techName}
            title={techName}
            src={icon.img}
            alt={techName}
            className={`skillIcon ${icon.level}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Skills;
