import styled from 'styled-components';

// Header Style
export const HeaderWrap = styled.div`
    max-height: none;
    z-index: -82929292;
    clear: both;


    .hero-image {
      background-color: red;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .hero-text {
        /* font-size: 36px; */
        display: flex;
        flex-direction: column;
        font-weight: 900;
        text-align: left;
        position: absolute;
        top: 40%;
        /* left: 0%; */
        width: 100%;
        height: auto;
        color: white;

        h1 {
          /* margin: 0 auto; */
          /* width: 70%; */
          font-size: 6vw;
          position: relative;
          left: 18%;
          width: max-content;
          background-color: #F2A02E;
          border: 1px solid #F2A02E;
          border-radius: 2px;
          padding: 0.21rem 0.21rem;
          /* margin-top:0.0002em; */
          margin: 0;
        }

        h1:nth-child(2) {
          margin-top: 0.3rem;
        }

        .btn-header {
          position: relative;
          display: block;
          left: 18%;
          width: 9rem;
          text-transform: uppercase;
          margin-top: 2rem;
          border: 1px solid #1B658C;
          color: #fff;
        }

      }

    }
    .hero {
      /* position: absolute; */
      max-width: 100%;
      height: auto;
      border: 0;
      
    }
`





/* Navigation Style -----v 1.0.0
* Damilola Faseun
* 
*/
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
