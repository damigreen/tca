import styled, { css } from 'styled-components';
import {
  flexColWrap,
  BorderStyle,
  borderStyle,
} from '../../AppStyled';

const aboutHeader = `
    font-size: 24px;
    font-weight: 600;   
    text-align: center;
    font-weight: 700;
`


export const AboutSection = styled.div`
  margin: 0 auto;
  width: 95%;
  width: 90%;
`

export const AboutHeaderWrap = styled.div`
  ${flexColWrap}
  margin: 0;
  padding: 0;
`

export const AboutHeader = styled.h1`
  ${aboutHeader};
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  width: 85%;
  padding: 0.234rem;
  margin-top: 2.568rem;
  margin-bottom: 1.108rem;
  color: #013440;

`

export const AboutSubHeader = styled.p`
  /* ${borderStyle}; */
  padding: 0 0 10px 10px;
  line-height: 24px;
  font-weight: 500; 
  margin-top: 1.6rem;
  margin-bottom: 2.9rem;
`
