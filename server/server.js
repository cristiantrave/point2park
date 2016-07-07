var express = require('express');
var app = express();
var loki = require('lokijs');
var db = new loki('db.json');

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){

  db.loadDatabase({}, function () {
  var users = db.getCollection('parkinglots')
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
  res.json(users.data);
  console.log(users.data);
});

/*
	var user = [
    {"firstName":"Cristian", "lastName":"Trave"},
	];

	res.json(user);
  */
});

app.listen(3000);

console.log("Listen port 3000");
