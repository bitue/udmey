import React from 'react';
import logoImg from "../../img/Udemy_logo.png";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="nav-container">
                <div className="logo">
                    <img src={logoImg} className="logoi"/>
                </div>
                <div className="navi">
                    <a href="/all">All courses</a>
                    <a href="/cart">Cart</a>
                    <a href="/special">Special Offers</a>
                    <a href="/about">About us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;