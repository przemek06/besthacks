import React from 'react';
import { Route, Switch } from "react-router-dom";

import Nav from './Components/Nav'
import Profile from './Components/Profile'
import About from './Components/About'
import Index from './Components/Index'

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" component={Index} />
      </Switch>
    </React.Fragment>
  ); 
}

export default App;