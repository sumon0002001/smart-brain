import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Form from './components/Form/Form';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
function App() {

    
  
  return (
    <div className="App">
    <Particles className='particles' 
      params={particlesOptions}
    />
    < Navigation />
    < Logo />
    <Rank />
    <Form />
   
    </div>
  );
}

export default App;
