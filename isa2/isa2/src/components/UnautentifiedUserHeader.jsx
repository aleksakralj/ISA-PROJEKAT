import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
const navLinkStyle = {
    color: 'black'
}

class Unautentifieduserheader extends Component {
    render() {
        return (
           
                 <div>
                <Navbar>
                    <Container>
                        <img src="https://cdn-icons.flaticon.com/png/512/2970/premium/2970068.png?token=exp=1641505178~hmac=b8a6dc0406e9945c6209f8071a7174c2" alt="" width="80px" height="60px" />
                        <Navbar.Brand style={navLinkStyle} href="/homepageclient">FISHING BOOKER</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">                            
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

export default Unautentifieduserheader;
