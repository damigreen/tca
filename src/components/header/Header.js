import React from 'react';
import Navigation from './Navigation';
import {
  HeaderWrap,
  HeroImage
} from './HeaderStyled';


// const heroImage = '../../../images/hero-image.png';


function Header() {
  return (
    <HeaderWrap>
      <HeroImage>
        {/* <img className="hero- image" src={heroImage} alt="Hero image for the header" /> */}
        <Navigation />
      </HeroImage>
    </HeaderWrap>
  );
}

export default Header;
