import * as React from 'react';
import '../styles/dashboard.css'
import { Link } from 'react-router-dom';
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

export const Dashboard = () => {
const onClickMenu = () =>{
   let nav = document.getElementById('nav');
   nav.classList.add("nav-left");
}
const onCloseMenu = () =>{
    let nav = document.getElementById('nav');
    nav.classList.remove("nav-left");
 }

  return (
    <div>

<header>
    <button onClick={onClickMenu} className="hamburger-icon"><AiOutlineMenu/></button>
    <h1 className='title'>GG SHOP</h1>
  </header>
  <div id='nav' className="nav">
    <div className="nav-content">
      <button className="cross-btn" onClick={onCloseMenu}><AiOutlineClose/></button>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li><a href="#"> about us </a></li>
        <li><a href="#"> products </a></li>
        <li><a href="#"> what we offers </a></li>
        <li><a href="#"> contact us </a></li>
      </ul>
      <ul className="terms-links">
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="banner">
    <div className="container">
     <h1>Contenido</h1>
    </div>
  </div>

    </div>
  );
};

