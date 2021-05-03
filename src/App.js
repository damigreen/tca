import React from 'react';
import Header from 'components/header/';
import Services from 'components/services/';
import About from 'components/about/';
import Footer from 'components/footer/';
import Portfolio from 'components/portfolio/';
import Contact from 'components/contact/';
import Insights from 'components/insights/';
import {
  AppWrapper,
  MainWrapper,
} from 'AppStyled'
import {
  DividerLine
} from 'AppStyled';


/* 
TODO
  Make a glowing button
  
*/

function App() {
  return (
    <AppWrapper>
        <header id="header">
          <Header/>
        </header>
        <MainWrapper>
          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="portfolio">
            <Portfolio />
          </section>

          <section>
            <DividerLine />
          </section>
          
          <section>
            <Insights />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </MainWrapper>
        
        <footer>
          <Footer />
        </footer>
      {/* <Container>
        <TestComponent />
      </Container> */}
    </AppWrapper>
  );
}

export default App;
  