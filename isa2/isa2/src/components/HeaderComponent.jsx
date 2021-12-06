import React, { Component } from 'react';
//import fish from './fish.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const navLinkStyle={
    color : 'black'
}

class HeaderComponent extends Component {
  
render() {
    return (
        <div>
            <Navbar>
                <Container>
                <img src="https://cdn-icons.flaticon.com/png/512/2970/premium/2970068.png?token=exp=1638563570~hmac=98dbb680b6ec6c516790a61718da5f4f" alt="" width="80px" height="60px" /> 
                    <Navbar.Brand style={navLinkStyle} href="#home">FISHING BOOKER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={navLinkStyle} href="#features">Home </Nav.Link>
                            <Nav.Link style={navLinkStyle} href="#pricing">About us</Nav.Link>
                            <Nav.Link style={navLinkStyle} href="#profile">Profile </Nav.Link>                            
                        </Nav>
                    
                        <Nav>
                        
                        </Nav>
                        <Nav>
                            <Nav.Link style={navLinkStyle} href="#deets">Log in</Nav.Link>
                            <Nav.Link style={navLinkStyle} eventKey={2} href="#memes">
                                Sign in
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
                    }

export default HeaderComponent;