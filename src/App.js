import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import xml2js from 'xml2js';


class App extends Component {
 
 constructor(props)
 {
   super(props);
   this.state = 
   {  


    
  
  
   }
   
  }  
 componentDidMount(){
  const baseUrl = "https://cors-proxy.htmldriven.com/?url=http://truetime.portauthority.org/";
  const apiKey = "MYzLtMtGXiFNBstCkkDtGN7xB";
  Axios.get(`${baseUrl}bustime/api/v3/gettime?key=${apiKey}`)
  .then(res =>
  {

    let xml = res.data.body.split('-').join('');
    console.log(xml);
    xml2js.parseString(xml, {trim: true}, function (err, result) {
    console.log(result.bustimeresponse.tm);
    
    
    });
    this.setState({
      transitAPI: res.data.results
    });
  });


 } 

 render() {
    return (
      <div className="App">
       'something';


      </div>
    );
  }
}

export default App;
