var express = require('express');
var app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
     
app.get('/', function(req, res){

	var user = [
    {"firstName":"Cristian", "lastName":"Trave"},
	];
	res.json(user);
});
     
app.listen(3000);
     
console.log("Listen port 3000");