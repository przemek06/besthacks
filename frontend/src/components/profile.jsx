import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';



export default class viewProfile extends Component {
	constructor(props) {
        super(props);

    	this.deleteExercise = NaN;
    	this.state = {profile:{}};
	}
	
  componentDidMount() {
    axios.get('http://localhost:8080/profile')
      .then(response => {
		console.log(response.data);
        this.setState({ profile: response})
      })
      .catch((error) => {
        console.log(error);
      })
  }
	
	deleteProfile(id){
		
	}
	
	changePassword(id){
		
	}
	
	profileMail(){
		return <p>{this.state.profile.name}</p>;
	}
  render() {
    return (
		<div>
			<meta charSet="UTF-8" />
        	<title>BestTrain</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
			
			<div>
			<ul>
				<li>Nazwa:</li>
				<li>Haslo:</li>
				<li>Email:</li>
			</ul>
			<p>{ this.profileMail() }</p>
			</div>
		</div>
	);
  }
}