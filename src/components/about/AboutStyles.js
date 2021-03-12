import styled, { css } from 'styled-components';
import {
  flexColWrap,
  BorderStyle,
} from '../../AppStyled';

const aboutHeader = `
    font-size: 24px;
    font-weight: 600;   
    text-align: center;
    font-weight: 700;
`


export const AboutSection = styled.div`

`

export const AboutHeaderWrap = styled.div`
  ${flexColWrap}
  margin: 0;
  padding: 0;
`

export const AboutHeader = styled.h1`
  ${aboutHeader};
  width: 85%;
  padding: 0.234rem;
  margin-top: 1.568rem;
  margin-bottom: 1.278rem;
  color: #013440;
`

export const AboutSubHeader = styled.p`
`
