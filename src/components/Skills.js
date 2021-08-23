import techIcons from '../utils/techIcons';

const Skills = () => {
  return (
    <div className="skillsWrapper">
      <h2 className="skillsLabel">Skills list</h2>
      <div className="skills">
        {Object.entries(techIcons).map(([techName, icon]) => (
          <img
            key={techName}
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
