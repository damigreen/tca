import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.div`
  border: 1px solid green;
`

const AboutHeader = styled.div`
  border: 1px solid brown;
`

const HeaderIntro = styled.div`
  border: 1px solid black;
  background-color: green;
`


const About = () => {

    return (
        <AboutSection>
            <AboutHeader>
                <h1>WHO WE ARE</h1>
                <h6>We help fast-track businesses to their digital goals through unique branding, marketing and advertising.</h6>
            </AboutHeader>
      </AboutSection>

    )
}

export default About;
