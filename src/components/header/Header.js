import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  height: 700px;
  max-height: 768px;
  background-color: grey;
`


function Header() {
  return (
    <HeaderWrap>
      <Navigation />
      <h1>Header</h1>
    </HeaderWrap>
  );
}

export default Header;
