import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./img/logo.png";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navbar"> 
            <Link to="/">
                <img className="navbar-logo" src={Logo} alt="Logo"/>
            </Link>
            <h1>Argentti Bay</h1>
            <Link to="/category/antenas-gama-baja">ANTENAS GAMA BAJA</Link>
            <Link to="/category/antenas-gama-media">ANTENAS GAMA MEDIA</Link>
            <Link to="/category/antenas-gama-alta">ANTENAS GAMA ALTA</Link>
            <CartWidget/>
        </div>
    )
}

export default NavBar;
