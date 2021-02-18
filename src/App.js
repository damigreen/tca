import React from 'react';
import Header from './components/header/';
import Container from 'react-bootstrap/Container';
import TestComponent from './components/testComponent/TestComponent';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: blue;
`


function App() {
  return (
    <AppWrapper>
        <header>
          <Header />
        </header>
      <Container>
        
        <TestComponent />
      </Container>
    </AppWrapper>
  );
}

export default App;
