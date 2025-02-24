import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Router from './Router';
import upArrow from './images/upArrow.svg'
import { BrowserRouter } from "react-router";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <a name="topo"/>
          <NavBar/>
          <Router/>
          <Footer/>
        <a href="#topo" className="fixed bottom-24 right-7 text-white p-4 bg-[#06E5F1] rounded-xl"><img className="w-6 h-6" src={upArrow}/></a>
    </div>
    </BrowserRouter>

  );
} 

export default App;
