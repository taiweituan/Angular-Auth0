
var express = require('express');
var app = express();
var jwt = jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
    secret: new Buffer('JrO2fO7VhR6oCFcVWkERQkWoHD9G2dEOB70K2LDE2o_aaYAQsEOcXpQaJ8A-uicR', 'base64'),
    audience : 'YqDgUHuSXVTxQ8ftylnSq5xqyZpfxOdp'
});

app.get('/api/public', function(req, res){
    res.json({
        message: "Hello from a public endpoint! You don't need to be authenticated to see dis!"
    });
});

app.get('/api/private', authCheck, function(req, res){
    res.json({
        message: "Hello from a private endpoint! You do need to be authenticated to see dis!"
    });
});

app.listen(8082);
console.log('Listening on port 8082');