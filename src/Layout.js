import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import BVAR from "../bvar.png";

const Layout =(props)=> {
  //funcion que setea la solapa activa
  const activeMenuHandler = e => {
    let id = e.target.parentElement.id;
    let element = document.getElementsByClassName("active");
    element[0].classList.remove("active");
    let newElement = document.getElementById(id);
    newElement.classList.add("active");
  };

    return (
      <div>
        {/* Cuerpo */}
        <div className="container">
          <div>
            <h1 className="display-2 text-center">
              BV
              <img
                src={BVAR}
                width="150"
                height="150"
                alt="bearded villains argentina"
              />
              AR
            </h1>
          </div>
          {/* Menu */}
          <nav id="cssmenu">
            <ul>
              <li id="home" className="active">
                <Link to="/" onClick={activeMenuHandler}>
                  Home
                </Link>
              </li>
              <li id="members">
                <Link to="/members" onClick={activeMenuHandler}>
                  Members
                </Link>
              </li>
              <li id="rules">
                <Link to="/info" onClick={activeMenuHandler}>
                  Info
                </Link>
              </li>
              <li id="themes">
                <Link to="/themes" onClick={activeMenuHandler}>
                  BV Themes
                </Link>
              </li>
              {/* <li id="admin">
                <Link to="/admin" onClick={activeMenuHandler}>
                  Admin
                </Link>
              </li> */}
            </ul>
          </nav>
          {props.children}
          {/* Footer */}
          <footer id="sticky-footer" className="py-4 bg-dark text-white-50 rounded">
            <div className="container text-center">
              <span><a href="https://www.instagram.com/beardedvillainsargentina" target="_blank">BeardedVillains Argentina 2019</a></span> | <span><a href="https://www.instagram.com/medieval.bearded" target="_blank">Webmaster</a> </span>
            </div>
          </footer>
        </div>
      </div>
    );
}
export default Layout;
