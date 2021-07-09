import styled from 'styled-components';

export const InsightPageWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`
export const InsightPattern = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  max-height: 190px;
  /* background: rgb(242,160,46); */
  background: linear-gradient(90deg, rgba(242,160,46,1) 0%, rgba(49,115,95,0.908000700280112) 50%, rgba(61,136,166,1) 100%);
  margin-top: 2rem;
  z-index: 10;
  opacity: 1;

  @media only screen and (min-width: 1200px) {
    height: 190px;
  }


  .insight-gradient {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left:0;
    background-image: url('../../../patterns/pattern1.jpg');
    opacity: 0.3;
  }


  .insight-main-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    opacity: 1;
    z-index: 200;
  }

  h1 {
    text-transform: uppercase;
    align-self: center;
  }

`


export const InsightRow  = styled.div`
  margin: 0;

  .insight-bar {
    width: 100%;
    height: auto;
  }

  .insight-def {
    text-align: left;
    position: relative;
    top: 3.98rem;
    left: 3rem;
    color: #1B658C;
  }

  .insight-border {
    /* border-bottom: 1px solid #31735F; */
    border-bottom: 2px solid red;
    height: 7px;
    width: 20%;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  .april {
    background: url("../../../images/insight-image.jpeg");
    background-position: 50% 60%; 
  }

  .may {
    background: url("../../../images/insight-image1.jpeg");
    background-position: center 20%;
  }

  .june {
    background: url("../../../images/insight-image2.jpeg");
    background-position: center 20%;
  }

  .insight-hero {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 300px;
    width: 95%;
    margin-top: 2rem;
    background-repeat: repeat-x;
    background-size: cover;
      /* background-repeat: no-repeat; */

    @media only screen and (min-width: 1200px) {
      width: 100%;
      max-width: 55%;
      /* padding-left: 4.5rem;
      padding-right: 4.5rem; */
      padding: 3rem;
    }


    .insight-hero-text {
      margin: 0 auto;
      width: 80%;
      text-align: center;
      font-size: 3vw;
      font-size: 4vh;
      color: white;
      font-weight: 600;
      /* color: #F2A32E; */
    }
  }



  .insight-wrap {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 80rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    padding-right: 1rem;
    padding-left: 1rem;

    @media only screen and (min-width: 1200px) {
      max-width: 60%;
      padding-left: 4.53rem;
      padding-right: 4.53rem;
    }

    .insight-title {
      color: #1B658C;
      text-align: left;
      margin-top: 3rem;
      /* padding: 1.2rem; */
      padding: 1rem 0.3rem 1rem 0;
    }

    .insight-content {
      /* padding: 1.1rem 0.65rem; */
      text-align: left;
      font-size: 1.13rem;
      line-height: 34px;
    }

    .insight-image {
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: auto;

      .insight-image-responsive {
        width: 100%;
        height: auto;
      }
    }
  }

  .insight-footer {
    display: flex;
      /* justify-content: center; */
    align-items: center;
    margin-top: 4rem;
    padding: 0.75rem;

    .insight-author {
      font-size: 1.2rem;
      color:#333;
    }

    .insight-socials{
      display:  flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      margin-left: 4rem;

      .share-icon {
        color: #333;
        margin-bottom: 1.2rem;
        margin-left: 1rem;

        :hover {
          color: blue;
          cursor: pointer;
        }
      }
    }
  }
`