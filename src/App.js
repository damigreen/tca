import React from 'react';
import styled from 'styled-components';
import Header from './components/header/';
import Container from 'react-bootstrap/Container';
import Services from './components/services/';
import About from './components/about/';
import TestComponent from './components/testComponent/TestComponent';
import Footer from './components/footer/';
import Portfolio from './components/portfolio/';


const AppWrapper = styled.div`
  display: block;
`

const MainWrapper = styled.main`
  text-align: center;

`

function App() {
  return (
    <AppWrapper>
        <header id="header">
          <Header/>
        </header>
        <MainWrapper>
          <section>
            <About />
          </section>

          <section>
            <Services />
          </section>

          <section>
            <Portfolio />
          </section>
        </MainWrapper>
        <footer>
          <Footer />
        </footer>
      <Container>
        <TestComponent />
      </Container>
    </AppWrapper>
  );
}

export default App;
