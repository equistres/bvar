import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Layout.css';

export default class Layout extends Component {
    //funcion que setea la solapa activa
    activeMenuHandler = (e) => {
        let id = e.target.parentElement.id;
        let element = document.getElementsByClassName("active");
        element[0].classList.remove('active');
        let newElement = document.getElementById(id);
        newElement.classList.add('active');
    }

    render() {
        return (
            <div>
                {/* Cuerpo */}
                <div className="container">
                    <div>
                        <h1 className="display-2 text-center">Bearded Villains Argentina</h1>
                    </div>
                    {/* Menu */}
                    <nav id='cssmenu'>
                        <ul>
                            <li id="home" className="active"><Link to="/" onClick={this.activeMenuHandler}>Home</Link></li>
                            <li id="members"><Link to="/members" onClick={this.activeMenuHandler}>Members</Link></li>
                            {/* <li id="rules"><Link to="/rules" onClick={this.activeMenuHandler}>Rules</Link></li>
                            <li id="themes"><Link to="/themes" onClick={this.activeMenuHandler}>BV Themes</Link></li> */}
                            <li id="admin"><Link to="/admin" onClick={this.activeMenuHandler}>Admin</Link></li>
                        </ul>
                    </nav>
                    {this.props.children}
                    {/* Footer */}
                    <footer id="sticky-footer" className="py-4 bg-dark text-white-50 rounded">
                        <div className="container text-center">
                            {/* <span>BeardedVillains Argentina 2019</span> | <span><a href="https://www.instagram.com/medieval.bearded" target="_blank">Webmaster</a> </span> */}
                        </div>
                    </footer>
                </div>

            </div>
        );
    }
}