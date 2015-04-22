//server.js

// set up modules
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 8080;

// config
var database = require('./config/database');
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public')); //set the static files location
app.use(morgan('dev')); // log requests
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/json
app.use(methodOverride());

// routes
require('./app/routes.js')(app);

// listen (start server.js)
app.listen(port);
console.log("App listening on port " + port);