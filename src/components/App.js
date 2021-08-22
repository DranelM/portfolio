import Portray from './Portray';
import Projects from './Projects';
import Skills from './Skills';

const App = () => {
  return (
    <div className="app">
      <Portray />
      <div className="wrapper">
        <Projects />
      </div>
    </div>
  );
};

export default App;
