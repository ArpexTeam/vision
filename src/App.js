import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
          <NavBar/>
          <Slider/>
          <Services/>
    </div>
  );
} 

export default App;
