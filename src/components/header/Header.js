import React from 'react';
import Navigation from './Navigation';
import {
  HeaderWrap,
  HeroImage,
} from './HeaderStyled';

const heroImage = '../../../images/hero-image.png';


function Header() {
  return (
    <HeaderWrap>
        <Navigation />
        <div className="hero-image">
          <img className="hero" src={heroImage} />
        </div>
    </HeaderWrap>
  );
}

export default Header;
