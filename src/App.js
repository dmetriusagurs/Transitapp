import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import xml2js from 'xml2js';


class App extends Component {
 
 constructor(props)
 {
   console.log("Test");
   super(props);
   this.state = 
   {  
      routes: []
   };
   
  }  
 componentDidMount(){
  const baseUrl = "https://cors-proxy.htmldriven.com/?url=http://truetime.portauthority.org/";
  const apiKey = "MYzLtMtGXiFNBstCkkDtGN7xB";
  Axios.get(`${baseUrl}bustime/api/v3/getroutes?key=${apiKey}`)
  .then(res =>
    {
  
      let xml = res.data.body.split('-').join('');
      //console.log(xml);
      xml2js.parseString(xml, {trim: true}, function (err, result) {
        //console.log(result.bustimeresponse.route);
        let routes=result.bustimeresponse.route
        
        for (let x = 0; x < routes.length; x = x+1) {
          console.log (routes[x])
          if (routes[x].rtpidatafeed[0] === "Light Rail")
            {
              console.log (routes[x].rtdd)
            }
        } 
      });
    });


 } 

 render() {
    return (
      <div className="App">
        Some other word

      </div>
    );
  }
}

export default App;
