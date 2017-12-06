const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '6a20288b89447eac2022c80c';

Todo.find({
    _id: id
}).then((todos) => {
    if(!todos){
        return console.log("id not find bhai....");
    }
    console.log('todos', todos)
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('todos', todos)
});

Todo.findById(id).then((todi) => {
    if(!todi){
        return console.log('Id not found...');
    }
    console.log('todo', todi);
})