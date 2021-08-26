import Portray from './Portray';
import Projects from './Projects';
import Footer from './Footer';
import * as Styled from '../styles/App.style';

const App = () => {
  return (
    <Styled.App>
      <Portray />
      <Styled.Wrapper>
        <Projects />
      </Styled.Wrapper>
      <Footer />
    </Styled.App>
  );
};

export default App;
