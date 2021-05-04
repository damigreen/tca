import React from 'react';
import Header from 'components/header/';
import Services from 'components/services/';
import About from 'components/about/';
import Footer from 'components/footer/';
import Portfolio from 'components/portfolio/';
import Contact from 'components/contact/';
import Insights from 'components/insights/';
import InsightPage from 'components/insights/InsightPage';
import {
  AppWrapper,
  MainWrapper,
} from 'AppStyled'
import {
  DividerLine
} from 'AppStyled';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  InsightPageSection,
} from './components/insights/InsightStyled';


/* 
TODO
  Make a glowing button
  
*/

function App() {
  return (
    <Router>
      <Switch>
        <AppWrapper>
            <header id="header">
              <Route exact path="/">
                <Header />
              </Route>
            </header>


            <MainWrapper>
              <section id="about">
                <Route exact path="/">
                  <About />
                </Route>
              </section>

              <section id="services">
                <Route exact path="/">
                  <Services />
                </Route>
              </section>

              <section id="portfolio">
                <Route exact path="/">
                  <Portfolio />
                </Route>
              </section>

              <section>
                <Route exact path="/">
                  <DividerLine />
                </Route>
              </section>

              <section>
                <Route exact path="/">
                  <Insights />
                </Route>
              </section>
              
              <InsightPageSection>
                <Route exact path="/insights/keeping-up-with-tca">
                  <InsightPage />
                </Route>
              </InsightPageSection>


              <section id="contact">
                <Route exact path="/">
                  <Contact />
                </Route>
              </section>
            </MainWrapper>
            
            <footer>
                <Footer />
            </footer>
          {/* <Container>
            <TestComponent />
          </Container> */}
        </AppWrapper>
      </Switch>

    </Router>
  );
}

export default App;
  