import styled from 'styled-components';


export const HeaderWrap = styled.div`
    max-height: none;
    z-index: -82929292;
    clear: both;

    .hero {
      max-width: 100%;
      height: auto;
      border: 0;
    }
`

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
  height: 11vh;
  width: 84%;
  border: 1px solid red;

  .nav-item {
    display: none;
  }

  .nav-filter {

  }
`

export const LogoBox = styled.div`
    height: 52;
    width: 52;
    float: left;
`
