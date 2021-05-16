import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
    
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="mynavbar">
  <div className="container-fluid">
    <a className="navbar-brand mybrand" href="#"><h2>Portfolio</h2></a>
    <button class="navbar-toggler border  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-white "></span>
    </button>
    
    <div className="collapse navbar-collapse mylinks" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/"className="nav-link active" activeClassName="mylinkscolor" aria-current="page" ><h4>Home</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link active" ><h4>Qualifications</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" className="nav-link active" ><h4>Skills</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/achi" className="nav-link active" ><h4>Achievements</h4></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link active" ><h4>Contact</h4></NavLink>
        </li>
        
        
        
      </ul>
     
    </div>
  </div>
</nav>
       </>    
        
    )
}

export default Nav;
