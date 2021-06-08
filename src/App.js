import './App.scss';
import Nav from './Components/Nav/Nav'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Skill from './Components/Skill/Skill'
import Awards from './Components/Awards/Awards'
import End from './Components/End/End'
import Last from './Components/Last/Last'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <About/>
      <Education/>
      <Skill />
      <Awards />
      <End />
      <Last />
    </div>
  );
}

export default App;
