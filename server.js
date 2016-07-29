var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8081;

// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(PORT, function() {
    console.log('expresss listiening on port: ' + PORT);
});