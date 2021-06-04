import styled from 'styled-components';
import {
  flexColWrap,
  flexRowWrap,
} from 'AppStyled';

export const InsightWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 54px;
  margin-bottom: 100px;

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    padding-right: 4.5rem;
    padding-left: 4.5rem;
  }
`


export const InsightPageSection = styled.section`
  margin-top: 2rem;
`

export const InsightRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;  

  .latest-col {
    /* padding-left: 1rem;
    padding-right: 1rem; */
    width: 390px;
    max-width: 420px;
    margin-bottom: 1.4rem;

    @media (min-width: 480px) {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 4px;
    }

    @media (min-width: 768px) {
      flex: 0 0 33.333333%;
      max-width: 33.33333%;
      padding: 0 10px;
    }
  }
  .latest-link {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 19px 0px;
    color: inherit;
    text-decoration: none;
    text-align: left;
    /* background: red; */
  }
  .image-wrapper {
    height: 190px;

    @media only screen and (max-width: 1023px) {
    }
  }

  .latest-image.april {
    background: url('../../../images/insight-image.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }


  .latest-image.may {
    background: url('../../../images/insight-image1.jpeg');
    background-size: contain;
  }

  .latest-image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  }

  .article-type {
    color: rgb(61, 82, 101);
    font-family: "Mark W01 Bold", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.125rem;
    line-height: 1rem;
    margin: 40px 0 8px;
    margin-bottom: 0.5rem;
    padding: 0px 1.5rem;
    text-transform: uppercase;
  }

  .article-title {
    flex: 1 1 auto;
    font-family: "Mark W01 Heavy", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #113C48;
    line-height: 1.875rem;
    margin-top: 0px;
    margin-bottom: 1.5rem;
    padding: 0px 1.5rem;
  }

  .article-author {
    margin-top: 0px;
    margin-bottom: 1.5rem;
    padding: 0px 1.5rem;
  }
`


