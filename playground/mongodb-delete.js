const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // deleteMany
    // db.db().collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
    //     console.log(result.result);
    // }, (err) => {
    //     if(err) {
    //         console.log("Unable to delete documents", err);
    //     }
    // });

    // deleteOne
    // db.db().collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result.result);
    // });

    // findOneAndDelete
    db.db().collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    //db.close();
});