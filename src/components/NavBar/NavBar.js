import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from './logo.png'

function NavBar({ brand }) {
    return (
        <nav>
            <div className="container nav-container-flex">
                <div className="logo">
                    <Link to="/">
                        <div className="logo-wrapper">
                            <img src={logo} alt="logo" />
                            <span className="logo-brand">{brand}</span>
                        </div>
                    </Link>
                </div>
                <ul>
                    <Link className="link" to="/">Home</Link>
                    {/* <Link className="link" to="/about">About</Link> */}
                    <li className="link submenu">
                        <span>Categories</span>
                        <ul>
                            <Link className="link" to="/category/monitores">Monitores</Link>
                            <Link className="link" to="/category/notebooks">Noteooks</Link>
                            <Link className="link" to="/category/teclados">Teclados</Link>
                            <Link className="link" to="/category/mouse">Mouse</Link>
                            <Link className="link" to="/category/tv">Tv</Link>
                        </ul>
                    </li>
                    <Link className="link" to="/contact">Contact</Link>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

/*Prop por defecto en caso de que no le pase ninguna*/
NavBar.defaultProps = {
    brand: 'Marca por defecto'
}


export default NavBar;
