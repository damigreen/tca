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

            <Nav>
                <Nav.Item>
                    <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Careers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navigation;
