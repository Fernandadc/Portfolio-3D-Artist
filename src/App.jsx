import React from "react";
import "./assets/scss/App.scss";
import { Router, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import { useLocation } from "react-router-dom";

function App(props) {

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
    
    <div className="container">
      <Header isContactPage={isContactPage}/>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      
      </div>
    </>
  );
}

export default App;
