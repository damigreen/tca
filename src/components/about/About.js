import React from 'react';
import styled from 'styled-components';

import {
  AboutSection,
  AboutHeaderWrap,
  AboutHeader,
  AboutSubHeader,
} from './AboutStyles';



const About = () => {

    return (
        <AboutSection>
          <AboutHeaderWrap>
            <AboutHeader>
                Discover and Engage More Audience 
            </AboutHeader>

            <AboutSubHeader>
                We help fast-track businesses to their digital goals through unique branding, marketing and advertising.
            </AboutSubHeader>
          </AboutHeaderWrap>
      </AboutSection>

    )
}

export default About;
