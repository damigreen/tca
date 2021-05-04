import React from 'react';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import LoginForm from 'components/loginForm/';
import {
    NavWrap,
    LogoBox,
    TopBar
} from './HeaderStyled';
import { Link } from 'react-router-dom';

const logoImage = '../../../icons/footer-logo-icon.png'




const Navigation = () => {

    const navExpand = () => {
        let navBar = document.querySelector('.item-bar');
        if (navBar.style.display === 'block') {
            navBar.style.display = 'none'
        } else {
            navBar.style.display = 'block';
        }
    }

    return (
        <TopBar className="top-bar">
            <NavWrap>
                <LogoBox href="/#">
                    <img src={logoImage} alt="Logo image for the header" />
                    <div className="logo-text">
                        <div><span>The</span><span> Creative</span><span> Agency</span></div>
                        <div>bringing ideas to life</div>
                    </div>
                </LogoBox>

                    <a href="#item-bar" className="nav-filter" onClick={navExpand}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
                            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </a>



            </NavWrap>

            <div id="item-bar" className="item-bar">
                {/* <Nav className="nav-item flex-column" variant="pills" defaultActiveKey as="ul"> */}
                <Nav  className="nav-item" variant="pills" defaultActiveKey as="ul">

                    <Nav.Item>
                        <Nav.Link  className="nav-link" href="/#about">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#services" className="nav-link" eventKey="services">SERVICES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#portfolio" className="nav-link" eventKey="work">WORK</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/insights/keeping-up-with-tca" className="nav-link">INSIGHTS</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#contact" className="nav-link" eventKey="contact">Contact</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>  
                        <Nav.Link className="nav-link" eventKey="login-form">Login</Nav.Link>
                    </Nav.Item> */}
                </Nav>

            </div>

        </TopBar>
    )
}

export default Navigation;
