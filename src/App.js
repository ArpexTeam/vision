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

        <a href="https://wa.me/393663013278" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-24 right-8 bg-green-500 p-3 rounded-full shadow-lg">
          <img className="w-7 h-7" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
        <a href="#topo" className="fixed bottom-8 right-8 text-white p-4 bg-[#06E5F1] rounded-xl"><img className="w-4 h-4" src={upArrow}/></a>

    </div>
    </BrowserRouter>

  );
} 

export default App;
