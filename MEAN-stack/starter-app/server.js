// modules
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// config-files
var db = require('./config/db');

// port
var port = process.env.PORT || 8080;

//connect to MongoDB

//mongoose.connect(db.url);



