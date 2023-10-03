import React from "react";
import Nav from "./components/Nav";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Menu from "./components/Menu";

const App = () =>{
 return(
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="about" element = {<About/>} />
        <Route path="menu" element = {<Menu/>} />
        <Route path="contact" element = {<Contact/>} />
        <Route path="location" element = {<Location/>} />
      </Routes>
  
    </div>

  );
}


export default App;