import myPicture from '../assets/Maciej-Lenard-www.png';

const Portray = () => {
  const links = {
    linkedin: {
      link: 'https://www.linkedin.com/in/maciej-lenard-a81688162/',
    },
    github: {
      link: 'https://github.com/DranelM',
    },
  };

  return (
    <div className="portrayWrapper">
      <div className="portray">
        <section className="me">
          <span className="name">
            <h1>Maciej Lenard</h1>
            <h2>Frontend Developer</h2>
          </span>
          <span className="meDesc">
            From startup co-founder wanna-be, through data scientist to frontend
            developer. Enchanted with the twisted JavaScript world, the gonna-be
            wizard of what you can see and want to interact with. Privately
            rather calm and empathic.
          </span>
          <div className="socialMedia">
            {Object.entries(links).map(([name, v]) => (
              <a href={v.link} key={name}>
                <div
                  className={`socialIcon ${name}`}
                  aria-label={name}
                  alt={name}
                ></div>
              </a>
            ))}
          </div>
        </section>
        <img className="myPicture" src={myPicture} alt="Maciej Lenard"></img>
      </div>
    </div>
  );
};

export default Portray;
