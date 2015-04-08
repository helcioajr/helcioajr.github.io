//server.js

// set up modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// config
mongoose.connect('mongodb://localhost/node-todo');

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

// Listen (start server.js)
app.listen(8080);
console.log("App listening on port 8080");


// model
var Todo = mongoose.model('Todo', {
    text: String
});

//api

//get all todos
app.get('/api/todos', function(req, res) {

    Todo.find(function(err, todos) {

        if(err)
            res.send(err)
    }

})