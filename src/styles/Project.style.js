import styled from 'styled-components';

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 350px;
  filter: grayscale(100%);

  @media (max-width: 1050px) {
    border-radius: 0 0 0 1rem;
    height: 100%;
  }

  @media (max-width: 900px) {
    border-radius: 0;
    height: auto;
  }
`;

export const StackImage = styled.img`
  width: var(--icon-size);
  filter: grayscale(100%);

  @media (max-width: 900px) {
    width: 35px;
  }

  @media (max-width: 600px) {
    width: 25px;
  }

  @media (max-width: 360px) {
    width: 20px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 8px 12px rgb(0 0 0 / 25%);
  border-radius: 1rem;

  &:hover {
    transform: scale(103%);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 12px 12px rgb(0 0 0 / 25%);

    ${ProjectImage} {
      transition: all 0.2s ease-in-out;
      filter: grayscale(0%) drop-shadow(0 4px 1px rgba(0, 0, 0, 10%));
    }

    ${StackImage} {
      transition: all 0.2s ease-in-out;
      filter: grayscale(0%);
    }
  }

  &:not(hover) {
    transition: all 0.2s ease-in-out;

    ${ProjectImage} {
      transition: all0.2s ease-in-out;
    }

    ${StackImage} {
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 1050px) {
    width: 80%;
  }
`;

export const TopProjectSection = styled.div`
  border-radius: 1rem 0;
  padding-bottom: 1rem;
`;

export const ProjectTitle = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 2% 0;
  border-radius: 1rem 1rem 0 0;
  background: #2f8ae4;

  > a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 1050px) {
    padding: 0;
  }
`;

export const ProjectStack = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 5%;
  width: 100%;
  padding: 0.5rem;

  li {
    list-style: none;
  }

  @media (max-width: 1050px) {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-top: 1rem;
    margin: 0;
  }
`;

export const ProjectDesc = styled.div`
  text-align: justify;
  margin: 0 0.5rem 1rem 0.5rem;
  padding: 0.5rem 0.6rem;
  font-size: var(--descfont-size);
  color: var(--descfont-color);

  @media (max-width: 1050px) {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 0 0 15px 0;
    margin: 0 1rem 1rem 1rem;
  }

  @media (max-width: 900px) {
    grid-column: 1/3;
    grid-row: 2/3;
    padding-top: 0;
    margin: 0.5rem 1rem;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProjectContent = styled.div`
  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;

    > a {
      grid-column: 1/2;
      grid-row: 1/3;
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 900px) {
    > a {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
`;
