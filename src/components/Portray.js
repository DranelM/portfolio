import myPicture from '../assets/Maciej-Lenard-www.png';
import inImage from '../assets/in_circle.png';
import ghImage from '../assets/gh_circle.png';

import {
  MeDesc,
  MyInfo,
  MyPicture,
  PortrayContent,
  PortrayWrapper,
  SocialIcon,
  SocialMedia,
} from '../styles/Portray.style';

const Portray = () => {
  const socialMediaLinks = {
    linkedin: {
      link: 'https://www.linkedin.com/in/maciej-lenard-a81688162/',
      url: inImage,
    },
    github: {
      link: 'https://github.com/DranelM',
      url: ghImage,
    },
  };

  return (
    <PortrayWrapper>
      <PortrayContent>
        <MyInfo>
          <span>
            <h1>Maciej Lenard</h1>
            <h2>Frontend Developer</h2>
          </span>
          <MeDesc>
            From startup co-founder wanna-be, through data scientist to frontend
            developer. Enchanted with the twisted JavaScript world, the gonna-be
            wizard of what you can see and want to interact with. Privately
            rather calm and empathic.
          </MeDesc>
          <SocialMedia>
            {Object.entries(socialMediaLinks).map(([name, sm]) => (
              <a href={sm.link} key={name}>
                <SocialIcon
                  url={sm.url}
                  aria-label={name}
                  alt={name}
                ></SocialIcon>
              </a>
            ))}
          </SocialMedia>
        </MyInfo>
        <MyPicture src={myPicture} alt="Maciej Lenard"></MyPicture>
      </PortrayContent>
    </PortrayWrapper>
  );
};

export default Portray;
