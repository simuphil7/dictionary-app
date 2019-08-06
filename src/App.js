import React from 'react';

import './App.css';


//const http = require("https");

const app_id = "a1fb08a3"; // insert your APP Id
const app_key = "89e815aeff33475ad03496f39589f331"; // insert your APP Key
const wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";

const url = 'https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/din?fields=definitions&strictMatch=false';

class App extends React.Component{

  haBoy(){
    
    var xhr = new XMLHttpRequest();
   // res.header("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
    console.log(xhr.status);
    xhr.open('GET',url);
    xhr.setRequestHeader("app_id",app_id);
    xhr.setRequestHeader("app_key",app_key);
    xhr.send();
    xhr.onload = function(){
      console.log("now");
      var jdata = JSON.parse(this.responseText);
      console.log(jdata);
    }
  }

render() {
  return (
    <div>
      <button id="srch"  onClick={this.haBoy}>Search</button>
    </div>
    
  );
}


}
export default App;
