import React from "react";
import "./header.css"
import User from '../images/user.png'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header--body">
        <p className="header--title">GamerRoom</p>
        <div className="header--user">
        <Link to="/galleria">
            Galleria
            </Link>

        <Link to="/promos">
            Ofertas
            </Link>
        <Link to="/feed">
            Home
            </Link>
            <Link to="/user">
            <img src={User} alt="user"/>
            {/* <p>User01</p> */}
            
            </Link>
            
        </div>
        </div>
    )
}