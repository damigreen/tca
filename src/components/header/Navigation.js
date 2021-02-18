import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {

    return (
        <div>
            {/* <ul>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul> */}

            <Nav className="justify-content-end" defaultActiveKey as="ul">
                <Nav.Item>
                    <Nav.Link href="/home">
                        <img src />LOGO
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="work">Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="careers">Careers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navigation;
