import React from 'react';
import Navigation from './Navigation';
import {
  HeaderWrap,
  HeroImage,
} from './HeaderStyled';
import Button from 'react-bootstrap/Button';

const heroImage = '../../../images/hero-image.png';


function Header() {
  return (
    <HeaderWrap>
        <Navigation />
          <div className="hero-image">
            <img className="hero" src={heroImage} />
            <div className="hero-text">
              <h1>Your toolbox for bringing</h1>
              <h1>ideas to life</h1>
              <Button className="btn-header" variant="outline-secondary">get started</Button>
            </div>
          </div>
    </HeaderWrap>
  );
}

export default Header;
