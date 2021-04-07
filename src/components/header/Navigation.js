import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import LoginForm from 'components/loginForm/';
import {
    NavWrap,
    LogoBox,
} from './HeaderStyled';

const logoImage = '../../../icons/footer-logo-icon.png'


const Navigation = () => {

    return (
            <NavWrap>
                <LogoBox>
                    <img src={logoImage} />
                </LogoBox>


                <div className="nav-filter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
                        <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>

                <Nav className="nav-item justify-content-end" defaultActiveKey as="ul">
                    <Nav.Item>
                        <Nav.Link  href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="services">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="work">Work</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="careers">Careers</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                        <Nav.Link eventKey="contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>  
                        <Nav.Link eventKey="login-form">Login</Nav.Link>
                    </Nav.Item>
                </Nav>

            </NavWrap>
    )
}

export default Navigation;
