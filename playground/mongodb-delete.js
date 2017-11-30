//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server', err);
    }
    console.log('Connected to MongoDb server');

    //deleteMany
    db.collection('Todos').deleteMany({text: "Eat lunch"}).then((fans) => {
        console.log(fans);
    });


    //delteOne
    //findOneAndDelete
    db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
        
   
   
    //db.close();



});