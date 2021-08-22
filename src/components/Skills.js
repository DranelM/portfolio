import skillsImage from '../assets/skills.png';

const Skills = () => {
  return (
    <label className="skillsLabel">
      Skills
      <div className="skills">
        <img className="skillsImage" src={skillsImage} alt="skills"></img>
      </div>
    </label>
  );
};

export default Skills;
