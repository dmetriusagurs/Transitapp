import React, { Component } from 'react';
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
<<<<<<< HEAD
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
=======
  {
//this was made to remove the dash in bustime-response
    let xml = res.data.body.split('-').join('');
    console.log(xml);
//parsestring for the XML syntax.
    xml2js.parseString(xml, {trim: true}, function (err, result) {
    console.log(result.bustimeresponse.tm);
    
    
    });
    this.setState({
      transitAPI: res.data.results
>>>>>>> 6cc4b75d1d0908646b6918f6215229e008d57962
    });


 } 

 render() {
    return (
<<<<<<< HEAD
      <div className="App">
        Some other word
=======
  <div className="title"> <h1>Pittsburgh Transit Ep: 6 - The Return of The Brown Line</h1>   
  
    <div className="text">
      <p> The "Brown Line" (we didn't name it) was discontinued from service in 2010. It provided speedy light-rail access to Downtown from Allentown, a part of the city that is currently in the midst of a renovation.

                Earlier this month, a train derailed, spilling Listerine (among other things) on the South Side Junction stop of the T, which required a work-around to carry public transit riders between Downtown and the South Hills.

                Now, as people go about their day, in a largely transit-ignored part of the city, T's full of people have been zooming through the neighborhood, without stopping... and that led us to wonder why?

                  With the North Side extension to the T, and the many entrepreneurial efforts that have sprouted up in Allentown, does it make sense to still not provide service to this neighborhood? Maybe, while the transit is re-routed, this can be the perfect opportunity to renew some service to this latent jewel in the crown of Pittsburgh!  
>>>>>>> 6cc4b75d1d0908646b6918f6215229e008d57962

                  Just adding ONE stop at Arlington and E Warrington would provide easy public transit to such exciting businesses as:
           </p>
              </div>
<div className="Links"> 
<ul>
<li><a href=" http://www.blackforgecoffee.com/">Black Forge Coffee </a></li>
<li><a href="http://allafamiglia.com/"> Alla Famiglia </a></li>
<li><a href=" https://workhardpgh.com/"> Work Hard Pittsburgh </a></li>
<li><a href=" http://www.leonscaribbean.com/"> Leon's Caribbean </a></li>
<li><a href= "http://www.onionmaiden.com/"> Onion Maiden </a> </li>
<li><a href= "http://www.moroseandmacabre.com/"> Weeping Glass </a> </li> 
<li><a href= "http://www.ilovesupermonkey.com/"> Super Monkey Recording Studio </a> </li>
</ul>
</div>  
  </div>
);  
          }
}

export default App;
