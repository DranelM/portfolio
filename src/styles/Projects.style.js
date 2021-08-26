import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
`;

const ProjectsLabel = styled.h1`
  text-align: center;
  font-weight: 100;
  width: 100%;
  margin-bottom: 2rem;

  span {
    color: #2f8ae4;
  }

  @media (max-width: 1000px) {
    text-align: center;
    width: 80%;
    margin: 1rem auto;
  }

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const ProjectsMeat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export { ProjectsLabel, ProjectsWrapper, ProjectsMeat };
