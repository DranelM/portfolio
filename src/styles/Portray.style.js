import styled from 'styled-components/macro';

export const PortrayWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: #eff5fb;
  box-shadow: 0 8px 12px rgb(0 0 0 / 25%);
  width: 100%;
  margin-bottom: 3rem;
`;

export const PortrayContent = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  flex: 0 1 1124px;
  height: var(--portray-height);

  h1 {
    line-height: 82%;
    font-family: 'Poppins';
    color: #2f8ae4;
    font-weight: 200;
  }

  h2 {
    color: #0c1115;
  }

  @media screen and (max-width: 830px) {
    text-align: center;

    h1 {
      text-align: justify;
    }
  }
`;

export const MyInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin-left: 4rem;

  @media screen and (max-width: 830px) {
    margin: 0 10%;
  }
`;

export const MeDesc = styled.span`
  font-size: var(--descfont-size);
  color: var(--descfont-color);
  text-align: justify;

  @media screen and (max-width: 830px) {
    text-align: justify;
  }
`;

export const MyPicture = styled.img`
  max-height: calc(var(--portray-height) - var(--mypicture-offset));
  transform: translateY(calc(var(--mypicture-offset) / 2));

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10%;
  margin-top: 1%;
`;

export const SocialIcon = styled.div`
  transition: all 0.2s ease;
  background: url(${(props) => props.url});
  filter: grayscale(100%);
  background-size: cover;
  width: var(--icon-size);
  height: var(--icon-size);

  &:hover {
    transform: scale(110%);
    filter: invert(40%) sepia(99%) saturate(471%) hue-rotate(169deg)
      brightness(101%) contrast(90%);
    background-size: cover;
  }
`;
