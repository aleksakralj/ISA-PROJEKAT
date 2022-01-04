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
                    <img src="https://cdn-icons.flaticon.com/png/512/2970/premium/2970068.png?token=exp=1638912310~hmac=0dc3846798e04c2161a0a6cae8440b6f" alt="" width="80px" height="60px" /> 
                        <Navbar.Brand style={navLinkStyle} href="/homepage">FISHING BOOKER</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                              
                                <Nav.Link style={navLinkStyle} href="/aboutuspage">About us</Nav.Link>
                                <Nav.Link style={navLinkStyle} >Profile </Nav.Link>                            
                            </Nav>
                        
                            <Nav>
                            
                            </Nav>
                            <Nav>
                                <Nav.Link style={navLinkStyle} href="/login">Log in</Nav.Link>
                                <Nav.Link style={navLinkStyle} eventKey={2} href="registeruser">
                                    Register account
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