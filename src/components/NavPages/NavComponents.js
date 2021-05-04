import React from 'react';
import Header from '../header/';
import InsightPage from '../NavPages/'
import { BrowserRouter as Router, Route } from "react-router-dom"


const NavComponents = () => {

  return (
      <div>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/insights">
          <InsightPage />
        </Route>
      </div>
  )
}

export default NavComponents;
