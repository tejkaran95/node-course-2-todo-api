const MongoClient = require('mongodb').MongoClient;

var user = {name:'Tejkaran', age: 25};
var{name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server', err);
    }
    console.log('Connected to MongoDb server');

        
   /* db.collection('Todos').insertOne({
        text: 'something to do',
        completed: false
    }, (err, result) => {
        if(err){
       return console.log('unable to insert todo') 
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */
    
    /* db.collection('Users').insertOne({
         name: 'Tejkaran',
         age: 22,
         location:'Mumbai'
     }, (err, result) => {
         if(err){
             return console.log('unable to connect Users')
         };
         console.log(result.ops[0]._id.getTimestamp());
     }); */


    
    db.close();



});