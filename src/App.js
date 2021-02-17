import React from 'react';
import Header from './components/header/';
import Container from 'react-bootstrap/Container';
import TestComponent from './components/testComponent/TestComponent';


function App() {
  return (
    <Container>
      <header>
        <Header />
      </header>

      <TestComponent />
    </Container>
  );
}

export default App;
