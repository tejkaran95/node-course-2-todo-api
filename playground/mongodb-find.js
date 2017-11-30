//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server', err);
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').find().count().then((count) => {
      console.log('todos----------');
      console.log(`users count ${count}`);
    }, (err) =>{
console.log('unable to fetch todos',err)
    });

    db.collection('Users').find().toArray().then((doc) =>{
        console.log('users====');
        console.log(doc);
    }, (err) => {
    return console.log('unable to fetch todo');
    });
        
   
   
    //db.close();



});