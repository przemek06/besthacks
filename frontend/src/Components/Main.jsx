import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../pics/logo2.png"
import axios from 'axios';
import Corobic from  "../pics/corobic.jpg";

export default class Main extends Component {
	constructor(props) {
    super(props);

    //this.onSubmit = this.onSubmit.bind(this);

    //this.state = {
   //   ip: ''
   // }
	}


	onClick(e) {
    	e.preventDefault();

    	axios.get('http://localhost:8080/data/pollution')
      .then(response => {
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
			<button className="waves-effect waves-light btn-large red" style={{marginTop:'380px',marginLeft:'47%'}}>ROZPOCZNIJ</button>
		</div>
		<div style={{backgroundColor:'white',minHeight: '800px',paddingTop:'0px', marginTop:'0px'}}>
			<div className='valign-wrapper'><img src={Corobic} style={{width:'800px',height:'600px', marginTop:'50px'}} />
			<div style={{marginLeft:'100px', marginBottom:'400px'}}>
				<h4 style={{color:'black', marginBottom:'15px',textAlign:'center'}}>Co możesz zrobić?</h4><hr style={{width:'30%',textAlign:'left', backgroundColor:'green',height:'2px', marginBottom:'20px'}} />
				<ul>
					<li>Wybierz komunikację miejską lub rower zamiast samochodu.</li>
					<li>Nie pal w piecu plastikiem, ani śmieciami.</li>
					<li>Rób zakupy przez Internet.</li>
					<li>Naucz się oszczędzać gaz, prąd i wodę.</li>
					<li>Zadbaj o powietrze w swoim domu za pomocą specjalnych filtrów.</li>
					<li>Uświadamiaj rodzinę i znajomych o niebezpieczeństwie jakim jest smog i zanieczyszczenia powietrza.</li>
				</ul>
			</div>
			</div>
		</div>
        {/* Footer */}
        <div className="xBotbar row left-align" style={{marginBottom:'0px'}}>
          <div className="container col s3 offset-s3 row">
            <div />
            <h3> AtmosHere </h3>
            <p>Strona dzięki której zadbasz o płuca swoje i innych</p>
          </div>
          <div className="container col s3">
            <p>Linki</p>
            <div className="collection">
              <a href="/main" className="collection-item">Strona główna</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
};
