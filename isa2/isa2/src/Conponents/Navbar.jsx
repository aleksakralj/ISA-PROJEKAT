import React from "react";
import '../Layouts/Navbar.css'

const Navbar = () => {
    return( 
        <div className="navbar">
            <div className="primary-navbar">
                <a href="#">FISHING BOOKER</a>
            </div>
            <ul className="registration-links-navbar">
                <li> <a href="#">Log in</a></li>
                <li> <a href="#">Register account</a></li>            
            </ul>
        </div>
    )

}

export default Navbar;   