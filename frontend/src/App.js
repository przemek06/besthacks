import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import cors from 'cors';
import './App.css';


import Nav from './Components/Nav'
import Login from './Components/Login'
import Register from './Components/Register'
import About from './Components/About'
import Index from './Components/Index'
import Main from './Components/Main'
function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <Nav/>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </React.Fragment>
  ); 
}

export default App;