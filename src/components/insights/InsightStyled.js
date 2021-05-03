import styled from 'styled-components';
import {
  flexColWrap,
  flexRowWrap,
} from 'AppStyled';

export const InsightWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media (min-width: 1024px) {
    margin: 0 auto;
    padding-right: 4.5rem;
    padding-left: 4.5rem;
  }
`

export const InsightRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;  

  .latest-col {
    padding-left: 1rem;
    padding-right: 1rem;
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
    /* background: red; */
  }
  .image-wrapper {
    height: 190px;

    @media only screen and (max-width: 1023px) {
    }
  }
  .latest-image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background: url('../../../images/insight-image.png');
  }
`


