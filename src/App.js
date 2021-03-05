import React from 'react';
import styled from 'styled-components';
import Header from './components/header/';
import Container from 'react-bootstrap/Container';
import Services from './components/services/';
import About from './components/about/';
import TestComponent from './components/testComponent/TestComponent';
import Footer from './components/footer/'


const AppWrapper = styled.div`
  /* background-color: blue; */
  display: block;
`

const MainWrapper = styled.main`
  border: 1px solid red;
  text-align: center;

`


function App() {
  return (
    <AppWrapper>
        <header>
          <Header />
        </header>
        <MainWrapper>
          <section>
            <About />
          </section>
          <section>
            <Services />
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
