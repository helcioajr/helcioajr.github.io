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

// application

app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load single view file (angular html page)
});

// Listen (start server.js)
app.listen(8080);
console.log("App listening on port 8080");


// model
var Todo = mongoose.model('Todo', {
    text: String
});

// Routes

// API

// get all todos
app.get('/api/todos', function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error.
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON

    })
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {

    // create a todo, information comes from ajax request from angular
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);

        //get and return all the todos after you delete one
        Todo.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });
});
