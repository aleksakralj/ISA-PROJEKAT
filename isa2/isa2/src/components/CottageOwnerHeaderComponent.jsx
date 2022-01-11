import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
const navLinkStyle = {
    color: 'black'
}

class CottageOwnerHeaderComponent extends Component {


    render() {
        return (
           
                 <div>
                <Navbar>
                    <Container>
                        <img src="https://cdn-icons.flaticon.com/png/512/2970/premium/2970068.png?token=exp=1641505178~hmac=b8a6dc0406e9945c6209f8071a7174c2" alt="" width="80px" height="60px" />
                        <Navbar.Brand style={navLinkStyle} href="/homepage">FISHING BOOKER</Navbar.Brand>
                        
                    </Container>
                </Navbar>
            </div> 
           
        );
    }
}

export default CottageOwnerHeaderComponent;

