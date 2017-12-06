var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var port = process.env.PORT || 3002;

var moment = require('moment');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
});


todo.save().then((doc) => {
console.log(doc)
}, (e) => {
    console.log(e);
});
});

app.get('/todos', (req, res) => {
    Todo.find().then((doc) => {
        res.send({doc});
    }, (e) => {
        res.status(400).send(e);
    })
})

app.get('/todos/:id', (req, res) => {
    console.log(req.params);
});


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();   
     }
     
     Todo.findByIdAndRemove(id).then((todo) => {
         if(!todo) {
             return res.status(404).send();
         }
         res.send(todo);
     }).catch((e) => {
         res.status(400.).send();
     })
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return Console.log('ID is invalid');
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((doc) => {

     return console.log(doc);

    }).catch((e) => {  
        return console.log(e)
    });
});

app.post('/user', (req, res) => {
    var body = _.pick(req.body, ['email', 'password'])

    var user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save().then((doc) =>{

        console.log(doc)
    }, (e) => {
        console.log("error:", e)
    });
});


app.listen(port, () =>{
    console.log(`server is now running on ${port}
    `);
});


 

