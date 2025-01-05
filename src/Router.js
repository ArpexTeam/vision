import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Equipe from "./Pages/Equipe";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import React from "react";
import { Routes, Route } from "react-router";

const Router = () => {
   return(
            <Routes>
                 <Route element = { <Home/> }  path="/" exact />
                 <Route element = { <Services/> }  path="/servicos" />
                 <Route element = { <Equipe/> }  path="/equipe" />
                 <Route element = { <Contact/> }  path="/contato" />
                 <Route element = { <About/> }  path="/sobre" />
                 <Route element = { <Events/> }  path="/eventos" />
            </Routes>
   )
}

export default Router;