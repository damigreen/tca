import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import styled from 'styled-components';
import LoginForm from 'components/loginForm/';

const NavWrap = styled.div`
    background-color: pink;
`

const LogoBox = styled.div`
    background-color: green;
    float: left;
`


const Navigation = () => {

    return (
            <NavWrap>
                <LogoBox>
                    <img src />LOGO
                </LogoBox>

                <Nav className="justify-content-end" defaultActiveKey as="ul">
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
                    <Nav.Item>  
                        <Nav.Link eventKey="login-form">Login</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="login-form">Login</Nav.Link>
                    </Nav.Item> */}
                </Nav>

            </NavWrap>
    )
}

export default Navigation;
