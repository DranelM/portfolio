import AboutMe from './AboutMe';
import Footer from './Footer';
import Portray from './Portray';
import Projects from './Projects';
import Skills from './Skills';

const App = () => {
  return (
    <div className="app">
      <Portray />
      <div className="wrapper">
        <Projects />
        <Skills />
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
