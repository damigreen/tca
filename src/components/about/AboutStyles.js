import styled from 'styled-components';
import {
  flexColWrap,
  borderStyle,
} from '../../AppStyled';

const aboutHeader = `
    text-align: center;
    font-weight: 900;
    color: yellow;
`


export const AboutSection = styled.div`
  margin: 0 auto;
  width: 95%;
  width: 90%;
  /* background-color: #F5F1EE; */
  /* background-color: #FFFAFF; */
`

export const AboutHeaderWrap = styled.div`
  ${flexColWrap}
  margin: 0;
  padding: 0;
`

export const AboutHeader = styled.h1`
  ${aboutHeader};
  font-size: 2.5rem;
  line-height: 40px;
  font-weight: 600;
  width: 90%;
  padding: 0.234rem;
  margin-top: 2.568rem;
  margin-bottom: 1.108rem;
  color: #013440;

`

export const AboutSubHeader = styled.p`
  /* ${borderStyle}; */
  padding: 0 0 10px 10px;
  line-height: 24px;
  margin-top: 0.89277rem;
  margin-bottom: 2.9rem;
`

