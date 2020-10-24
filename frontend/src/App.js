import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Index from "./components/index";
import Navbar from "./components/navbar";
import viewProfile from "./components/profile";


function App() {
  return (
 	<Router>
    	<Navbar />

		<Route path="/" exact component={Index} />
		<Route path="/profile" exact component={viewProfile} />
	</Router>
  ); 
}

export default App;
