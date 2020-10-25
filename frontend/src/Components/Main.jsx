import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../pics/logo2.png"
import Corobic from  "../pics/corobic.jpg";

import { getChartLink, getAqi } from '../connection/chart.js'

export default class Main extends Component {
	constructor(props) {
    super(props);

    this.state = {
      startImg: '',
      aqi:''
    }
	}

  sampleChart="https://quickchart.io/chart?c={type:'bar',data:{labels:[2012,2013,2014,2015,2016],datasets:[{label:'Users',data:[120,60,50,180,120]}]}}"

	startClick = async (e) => {
    const startImg = await getChartLink()
    const aqi = await getAqi()
    this.setState({startImg, aqi})
	}

  colorAiq = (aiq) => {
    if(aiq < 15){
        return [0,128,0]
    }
    if(aiq < 40){
        return [50,205,50]
    }
    if(aiq < 70){
        return [255,215,0]
    }
    if(aiq < 140){
        return [255,165,0]
    }
    if(aiq < 200){
        return [255,0,0]
    } else {
        return [128,0,128]
    }
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
    		  <div>
    			<div id='logo'  className='valign-wrapper' style={{marginLeft:'20px'}}><img id='logo2' src={Logo} /> <h1>AtmosHere</h1></div>
          </div>
            <div style={{minHeight: 'auto',paddingBottom:'0px',marginBottom:'-20px'}}>
              <div  style={{backgroundColor: 'white',marginTop: '300px',minHeight: '800px', textAlign:'center'}}>
                <div  style={{paddingTop: '50px', textAlign:'center'}}><h1 >Projekt AtmosHere</h1><hr style={{width:'25%',textAlign:'center', backgroundColor:'green',height:'2px', marginBottom:'40px'}}/>
                </div>
                <div className="container" ><p style={{color:'black'}}>Jest to aplikacja webowa pozwalająca Ci na śledzenie poziomu zanieczyszczenia powietrza w Twojej okolicy. Dzięki niej możesz na bieżąco sprawdzać historię jakości powietrza w twoim mieście. Następnie pomożemy Ci się dowiedzieć, co możesz zrobić, aby zapobiec niebezpiecznym zmianom w lokalnym środowisku! Poinformujemy Cię też, czego powinieneś unikać, gdy poziomy smogu osiagają ekstremalne wartości.</p>
                </div>
                <div>  <i class="large material-icons col" style={{marginTop:'300px', color: 'green'}}>arrow_downward</i></div>
              </div>
            </div>
      		<div style={{backgroundColor:'lightgray',minHeight: '500px',paddingTop:'0px', marginTop:'0px', textAlign:'center'}}>
      			{this.state.startImg==='' && <button
              className="waves-effect waves-light btn-large red"
              style={{marginTop: '20px'}}
              onClick={this.startClick}>ROZPOCZNIJ
            </button> }

            { this.state.startImg && <div style={{border: '3px solid black', fontSize:'30px', backgroundColor: 'grey'}}>Air quality index: <span style={{"fontWeight": "800", "color": `rgb(${this.colorAiq(this.state.aqi)[0]},${this.colorAiq(this.state.aqi)[1]},${this.colorAiq(this.state.aqi)[2]})`}}>{this.state.aqi}</span></div> }
            { this.state.startImg && <img src={this.state.startImg} alt="Chart" style={{marginTop: '20px'}} ref="chart"/> }
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
