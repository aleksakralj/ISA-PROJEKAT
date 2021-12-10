import React, { Component } from 'react';
//import fish from './fish.png';



class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <header className="header">
                    <h1> FISHING </h1>
                    <img src="https://cdn.dribbble.com/users/60166/screenshots/13928148/fish_logo-02_4x.jpg" alt="" width="120px" height="90px"/>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;