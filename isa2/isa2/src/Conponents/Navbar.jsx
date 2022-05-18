import React from "react";
import "../Layouts/Navbar.css";
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

const Navbar = () => {
    const [activeUser, setActiveUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        setInterval(() => {
            let user = JSON.parse(localStorage.getItem("activeUser"));
            setActiveUser(user);
        }, []);
    }, 5000);

    const homeIconClick = () => {
        let path = '/homepage';
        history.push(path);
    }

    const logout = () => {
        localStorage.removeItem('activeUser');
        let path = '/homepage';
        history.push(path);
    }

    if (activeUser) {
        if (activeUser.type === "Client") {
            return (
                <div className="navbar">
                    <div className="primary-navbar">
                        <img onClick={() => homeIconClick()} src="isa2\isa2\src\Assets\Images\fish.png"></img>
                        <a
                            style={{ color: "black", textDecoration: "none" }}
                            href="/homepage"
                        >
                            FISHING BOOKER
                        </a>

                        <select className="select-appointments">
                            <option disabled selected hidden className="select-option">
                                Appointments
                            </option>
                            <option className="select-option">
                                Cottage appointments
                            </option>
                            <option className="select-option">
                                Ships appointments
                            </option>
                            <option className="select-option">
                                Adventure appointments
                            </option>
                        </select>

                        <select className="select-appointments">
                            <option disabled selected hidden className="select-option">
                                Appointments history
                            </option>
                            <option className="select-option">
                                Past cottages
                            </option>
                            <option className="select-option">
                                Past ships
                            </option>
                            <option className="select-option">
                                Past adventures
                            </option>
                        </select>

                        <a
                            style={{ color: "black", textDecoration: "none" }}
                            href="/clientprofile"
                        >
                            My profile
                        </a>
                    </div>
                    <ul className="registration-links-navbar">
                        <li>
                            
                            <a
                                style={{ color: "black", textDecoration: "none" }}
                                href=''
                                onClick={logout}
                            >
                                Log out
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ color: "black", textDecoration: "none" }}
                                href="/registeruser"
                            >
                                Register account
                            </a>
                        </li>
                    </ul>
                </div>
            );
        }
    }
    if (!activeUser) {
        return (
            <div className="navbar-unlogged">
                <div className="primary-navbar-unlogged">
                    <img onClick={() => homeIconClick()} src="isa2\isa2\src\Assets\Images\fish.png"></img>
                    <a
                        style={{ color: "black", textDecoration: "none" }}
                        href="/homepage"
                    >
                        FISHING BOOKER
                    </a>
                </div>  
                <ul className="registration-links-navbar-unlogged">
                    <li>
                        <a style={{ color: "black", textDecoration: "none" }} href="/login">
                            Log in
                        </a>
                    </li>
                    <li>
                        <a
                            style={{ color: "black", textDecoration: "none" }}
                            href="/registeruser"
                        >
                            Register account
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        null
    )
};

export default Navbar;
