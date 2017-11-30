//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server', err);
    }
    console.log('Connected to MongoDb server');

    db.collection('Users').fineOneAndUpdate({
        _id: new ObjectID('5a1e4b7410c1251c74980b3e')
    }, {
        $set: {
            name: "Tejkaran Singh Anand"
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    

        
   
   
    //db.close();



});