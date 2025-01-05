import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Router from './Router';
import { BrowserRouter } from "react-router";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <NavBar/>
          <Router/>
          <Footer/>
    </div>
    </BrowserRouter>

  );
} 

export default App;
