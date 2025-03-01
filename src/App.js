import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Router from './Router';
import upArrow from './images/upArrow.svg'
import whats from './images/whatsIcon.png'
import { BrowserRouter } from "react-router";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <a name="topo"/>
          <NavBar/>
          <Router/>
          <Footer/>
        <a target="_blank" href="https://wa.me/393663013278" className="fixed bottom-44 right-7 text-white p-2 bg-green-600 rounded-full"><img src={whats} className="w-10 h-10"/></a>
        <a href="#topo" className="fixed bottom-24 right-7 text-white p-4 bg-[#06E5F1] rounded-xl"><img className="w-6 h-6" src={upArrow}/></a>
    </div>
    </BrowserRouter>

  );
} 

export default App;
