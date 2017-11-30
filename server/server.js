var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
var todo = new Todo({
    text: req.body.text
});


todo.save().then((doc) => {
console.log(doc)
}, (e) => {
    console.log(e);
});
});

app.listen(3002, () =>{
    console.log('startred om port 3002');
});
 
