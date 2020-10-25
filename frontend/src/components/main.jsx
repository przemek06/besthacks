import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../pics/logo2.png"
import axios from 'axios';
import Smog from  "../pics/smoghero.jpg";

export default class Main extends Component {
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


    	axios.get('http://localhost:8080/data/pollution')
      .then(response => {
		console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    	//this.setState({
      	//	console.log('lol');
    	//})
  	}

  render() {
    return (
      <div>
		<html lang='pol'/>
        <meta charSet="UTF-8" />
        <title>AtmosHere - Air quality in your city.</title>
        <link rel="stylesheet" href="stylesheet.css" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Racing+Sans+One&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
 		 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		<div >
            <nav id='nav' >
				<div class="nav-wrapper">
      			<ul id="nav-mobile" class="right hide-on-med-and-down">
        			<li><a href="sass.html">ZALOGUJ SIĘ</a></li>

      			</ul>
    	</div>
              
            </nav>
			<div id='logo'  className='valign-wrapper' style={{marginLeft:'20px'}}><img id='logo2' src={Logo} /> <h1>AtmosHere</h1></div>
            {/*nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav*/}
        </div>
        <div style={{minHeight: 'auto',paddingBottom:'0px',marginBottom:'-20px'}}>

          <div  style={{backgroundColor: 'white',marginTop: '300px',minHeight: '800px'}}>
            <div  style={{paddingTop: '50px', textAlign:'center'}}><h1 >Projekt AtmosHere</h1><hr style={{width:'25%',textAlign:'center', backgroundColor:'green',height:'2px', marginBottom:'40px'}}/></div>
            <div className="container" ><p style={{color:'black'}}>Jest to aplikacja webowa pozwalająca Ci na śledzenie poziomu zanieczyszczenia
 powietrza w Twojej okolicy. Dzięki niej możesz na bieżąco sprawdzać historię jakości powietrza w twoim mieście. 
Następnie pomożemy Ci się dowiedzieć, co możesz zrobić, aby zapobiec niebezpiecznym zmianom w lokalnym środowisku! Poinformujemy Cię też, czego 
powinieneś unikać, gdy poziomy smogu osiagają ekstremalne wartości.</p></div>

				<div>  <i class="large material-icons col" style={{marginTop:'300px', marginLeft:'50%', color: 'green'}}>arrow_downward</i></div>
			
          </div>
        </div>
		<div style={{backgroundColor:'lightgray',minHeight: '800px', paddingBottom: '500px',paddingTop:'0px', marginTop:'0px'}}>
			
		</div>
        {/* Footer */}
        <div className="xBotbar row left-align">
          <div className="container col s3 offset-s3 row">
            <div />
            <h3> AtmosHere </h3>
            <p>Strona dziÄ™ki ktĂłrej moĹĽesz Ĺ›ledziÄ‡ jakoĹ›Ä‡ powietrza w twojej okolicy oraz samemu zadecydowaÄ‡ o losie naszej planety.</p>
          </div>
          <div className="container col s3">
            <p>Linki</p>
            <div className="collection">
              <a href="#!" className="collection-item">Strona gĹ‚Ăłwna</a>
              <a href="#!" className="collection-item">O nas</a>
              <a href="#!" className="collection-item">Ciekawe strony</a>
              <a href="#!" className="collection-item">Kontakt</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
