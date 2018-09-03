// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true } , (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    // console.log('Connected to MongoDB server');
    // client.db().collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // client.db().collection('Users').insertOne({
    //     name: 'Name MyName',
    //     age: 25,
    //     locaiton: 'Cluj'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("Unable to insert user", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // client.close();
});