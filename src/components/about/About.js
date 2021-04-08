 import React from 'react';
import {
  AboutSection,
  AboutHeaderWrap,
  AboutHeader,
  AboutSubHeader,
} from './AboutStyles';
import {
  DividerLine,
} from 'AppStyled';


const About = () => {

    return (
        <AboutSection>
          <AboutHeaderWrap>
            <AboutHeader>
                Discover and engage more audience 
            </AboutHeader>

            <AboutSubHeader>
                We help fast-track businesses to their digital goals through unique branding, marketing and advertising.
            </AboutSubHeader>
          </AboutHeaderWrap>
          <DividerLine>
          </DividerLine>
      </AboutSection>

    )
}

export default About;
