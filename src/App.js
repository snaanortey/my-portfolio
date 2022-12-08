import React from "react";
import "./App.scss";
import profilepic from "../src/assets/images/profile-pic.jpg";
import github from "../src/assets/icons/github.svg";
import instagram from "../src/assets/icons/instagram.svg";
import linkedin from "../src/assets/icons/linkedin.svg";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";


// import {Link } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home/>}>

    //     </Route>
    //   </Routes>
    //   </BrowserRouter>

    // </div>
    <div className="App">
      <div className="profile-pic-container">
        <img className="profile-pic" src={profilepic} alt="profile pic" />
      </div>
      <div className="content">
        <h1 className="name">Naa Norkor</h1>
        <h3 className="title">Full stack web developer</h3>
        <h4>
          For now, this website is under construction. I'm looking at at
          completing it by the second week of December 2022.
        </h4>
        <h3>Let's connect!</h3>
        <div className="icons">
          <a className="icon-link"
            href="https://github.com/snaanortey"
            rel="noreferrer"
            target="_blank"
          >
            <img className="icon-image" src={github} alt="github icon" />
          </a>
          <br />
          <a className="icon-link"
            href="https://www.linkedin.com/in/naanorkornortey/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="icon-image" src={linkedin} alt="linkedin icon" />
          </a>
          <a className="icon-link"
            href="https://www.instagram.com/naanorks/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="icon-image" src={instagram} alt="instagram icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
