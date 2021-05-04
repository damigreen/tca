import styled from 'styled-components';

export const InsightPageWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
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

  .insight-hero {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;
    margin-top: 2rem;
    background: url("../../../images/insight-image.jpeg");
    background-position: 50% 60%; 
    background-repeat: repeat-x;
    background-size: cover;

    .insight-hero-text {
      margin: 0 auto;
      width: 80%;
      text-align: center;
      font-size: 3vw;
      color: white;
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

`