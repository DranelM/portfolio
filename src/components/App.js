import Portray from './Portray';
import Projects from './Projects';
// import Skills from './Skills';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Portray />
      <div className="wrapper">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
