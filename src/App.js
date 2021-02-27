import React from 'react';
import Header from './components/header/';
import Container from 'react-bootstrap/Container';
import Services from './components/services/';
import About from './components/about/';
import TestComponent from './components/testComponent/TestComponent';
import styled from 'styled-components';


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
      <Container>
        <TestComponent />
      </Container>
    </AppWrapper>
  );
}

export default App;
