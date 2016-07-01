var express = require('express');
var app = express();
     
app.get('/', function(req, res){
console.log("Hello World!");
});
     

app.listen(3000);
     
console.log("Listen port 3000");