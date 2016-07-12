var express = require('express');
var app = express();
var loki = require('lokijs');
var db = new loki('db.json');
var distance = require('google-distance');
distance.apiKey = 'AIzaSyDwPR0l-lTpVFzEXihsfEX0tdCds2bbrfk';

function isDistanceFilledUp(arr_data)
{
  var is_filled_up = true;
  arr_data.forEach(function(elem_data){
    if (elem_data.distance === undefined) {
      is_filled_up = false;
    }
  })
  return is_filled_up;
}

function getDistancesFromGoogleAPI(arr_data, callback)
{
  arr_data.forEach(function(elem_data){

    distance.get(
      {
        origin: '41.648229,-4.729198',
        destination: ''+elem_data.lat+','+elem_data.lon+'',
        mode: 'driving',
        units: 'metric'
      },
      function(err, resp) {
        if (err) {
          callback(new Error(err)) //Error en la API de Google
        }
        elem_data.distance = resp.distance;
        if (isDistanceFilledUp(arr_data))
        {
          callback(null) //No error, puedes seguir adelante
        }
      });
  })

}

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){

  db.loadDatabase({}, function () {
    var p = db.getCollection('parkinglots')

    getDistancesFromGoogleAPI(p.data, function(err) {
      if (err) {
        response.status(500).send(err);
      }
      else {
        res.json(p.data);
      }
    })

  });

});

app.listen(3000);

console.log("Listen port 3000");

/*
EXAMPLE COLLECTION INSERT
users.insert(
  {
      name: 'Delicias',
      zone: 'Zona sur',
      free: 3
  }
);
db.saveDatabase();
*/
