import React, { Component } from 'react';
import { Link } from "react-router-dom";



export default class Navbar extends Component {
  render() {
    return (
		<div>
			<meta charSet="UTF-8" />
        	<title>BestTrain</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
			<div>
				<nav>
					<div className="nav-wrapper light-green lighten-1">
						<div className='row'>
							<Link to="/profile" className="nav-link col s1">Profile</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
  }
}