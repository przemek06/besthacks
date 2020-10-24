import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Index extends Component {
	constructor(props) {
    super(props);

    //this.onSubmit = this.onSubmit.bind(this);

    //this.state = {
   //   ip: ''
   // }
	}
	onSubmit(e) {
    	e.preventDefault();

   		const ip = {
      	ip: this.state.ip,
		pm10: this.state.pm10
    	}


    	//axios.post('http://localhost:5000/users/add', user)
      	//.then(res => console.log(res.data));

    	//this.setState({
      	//	console.log('lol');
    	//})
  	}
  rener() {
    return (
		<div>
			<meta charSet="UTF-8" />
        	<title>BestTrain</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
		<div>
			<form onSubmit={this.onSubmit}>
			<button></button>
			</form>
		</div>
		</div>
	);
  }
}