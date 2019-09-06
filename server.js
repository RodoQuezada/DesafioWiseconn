const express = require('express');
const app = express();
const unirest = require('unirest');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var farms  = {
  id: '',
  name: ''
}
var fams_aux = [];
var zones_aux = [];


var zones = {
   id: '',
   name: '',
   type: ''
}


var req = unirest("GET", "https://apiv2.wiseconn.com/farms");
req.headers({
  "api_key": "i0q4TmG2LqxIOKA26S9F",
  "Accept": "application/json"
});

var string_llamada_uno = "https://apiv2.wiseconn.com/farms/";
var string_llamada_dos = "/zones";

var variable;


req.end(function (res) {
  if (res.error) throw new Error(res.error);
for(var i in res.body){  
  farms  = {
      id: res.body[i].id,
      name: res.body[i].name
    }

    variable = res.body[i].id;
    fams_aux.push(farms.id, farms.name);  
  } 
}); 


var req_zones = unirest("GET", string_llamada_uno.concat(res.body[i].id).concat(string_llamada_dos));
req_zones.headers({
  "api_key": "i0q4TmG2LqxIOKA26S9F",
  "Accept": "application/json"
});

req_zones.end(function(res_zone){
  if (res_zone.error) throw new Error(res_zone.error);

    for(var x in res_zone.body){
      zones = {
        id: res_zone.body[x].id,
        name: res_zone.body[x].name,
        type: res_zone.body[x].type
     }      
        if(zones.type.includes('Weather')){
          
          console.log("NOMBRE del campo: ", res.body[i].name);
          console.log("NOMBRE ZONA: ", res_zone.body[x].name);
        } 
      //fin de for de res_zones
    }         
 // fin de llamada de zones    
 } ) 




