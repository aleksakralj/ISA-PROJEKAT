import React from "react";
import "../Layouts/Navbar.css";
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

const Navbar = () => {
    const [activeUser, setActiveUser] = useState({});
    const history = useHistory();
    const [appointmentsSelectValue, setAppointmentsSelectValue] = useState('appointmemts');
    const [historyAppointmentsSelectValue, setHistoryAppointmentsSelectValue] = useState('history-appointments');

    useEffect(() => {
        setInterval(() => {
            let user = JSON.parse(localStorage.getItem("activeUser"));
            setActiveUser(user);
        }, []);
    }, 5000);

    const onAppointmentSelectChange = () => {
        if (appointmentsSelectValue === 'adventures') 
            history.push('/clientadventure');
        else if (appointmentsSelectValue === 'cottages')
            history.push('/clientcottages');
        else if (appointmentsSelectValue === 'ships')
            history.push('/clientships');
    }

    const onHistoryAppointmentsSelectChange = () => {
        if( historyAppointmentsSelectValue === 'history-adventures') 
            history.push('/clientpastadventures')
        else if (historyAppointmentsSelectValue === 'history-ships')
            history.push('/clientpastships')
        else if (historyAppointmentsSelectValue === 'history-cottages')
            history.push('/clientpastcottages')
    }

    useEffect(() => {
        onAppointmentSelectChange();
    }, [appointmentsSelectValue]);

    useEffect(() => {
        onHistoryAppointmentsSelectChange();
    }, [historyAppointmentsSelectValue])

    const homeIconClick = () => {
        let path = '/homepage';
        history.push(path);
    }

    const logout = () => {
        localStorage.clear();
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

                        <select 
                            className="select-appointments"
                            value={appointmentsSelectValue}
                            onChange={(e) => 
                                setAppointmentsSelectValue(e.target.value)
                            }
                        >
                            <option 
                                className="select-option"
                                value='appointmemts'
                                disabled 
                                selected 
                                hidden 
                            >
                                Appointments
                            </option>
                            <option 
                                className="select-option"
                                value='cottages'
                            >
                                Cottage appointments
                            </option>
                            <option 
                                className="select-option"
                                value='ships'
                            >
                                Ships appointments
                            </option>
                            <option 
                                className="select-option"
                                value='adventures'
                            >
                                    Adventure appointments
                            </option>
                        </select>

                        <select className="select-appointments"
                            value={historyAppointmentsSelectValue}
                            onChange={(e) => setHistoryAppointmentsSelectValue(e.target.value)}
                        >
                            <option disabled selected hidden className="select-option" value='history-appointments'>
                                Appointments history
                            </option>
                            <option className="select-option" value='history-cottages'>
                                Past cottages
                            </option>
                            <option className="select-option" value='history-ships'>
                                Past ships
                            </option>
                            <option className="select-option" value='history-adventures'>
                                Past adventures
                            </option>
                        </select>
                        <a 
                            style={{color:'black', textDecoration: 'none'}}
                            href="/subscription-navigator"
                        >
                            Subscriptions
                        </a>
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
