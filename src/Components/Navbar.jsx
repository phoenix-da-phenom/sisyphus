import React from "react";
import Logomark from "../assets/Logomark.svg";
import LogoType from "../assets/Logotype.svg";
import Profile from "./Profile";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <div className="navbar">


        
       <div className="navbar__nav container">
              <div className="navbar__logo">
          <img src={Logomark} className="navbar__logo-mark"/>
          <img src={LogoType} className="navbar__logo-text" />
        </div>
        <div>
          <nav>
            <ul className="navbar-list">
              <li className="active">Exchange</li>
              <li>Wallets</li>
              <li>Roqqu Hub</li>

              <li><Link to="/auth">Authentication</Link>  </li>
            </ul>
          </nav>
        </div>
        
        </div> 
  
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
}
