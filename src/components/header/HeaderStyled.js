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
  width: 94%;

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */

  .logo-text {
    /* border: 1px solid red; */
    /* height: 50px; */
    display: flex;
    flex-direction: column;

    div:first-child {
      font-family: 'Bitter', serif;
      font-size: 1.3rem;
      padding: none;
      margin-top: none;
    }

    div:nth-child(2) {
      font-size: 0.8653rem;
      padding: none;
      margin: none;
      color: #03658C;
      font-family: 'Satisfy', cursive;
      font-family: 'Spartan', sans-serif;
      /* border: 1px solid green; */
    }

    span:first-child {
      color: #03658C;
    }
    span:nth-child(2) {
      color: #02735E;
    }
    span:nth-child(3) {
      color: #F29f05;
    }
  }

  
`
