import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import Nav from './Components/Nav'
import Login from './Components/Login'
import About from './Components/About'
import Index from './Components/Index'

function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <Nav/>
      <div className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </React.Fragment>
  ); 
}

export default App;