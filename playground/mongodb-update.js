const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.db().collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b8cdbcebae11604663b2dd6")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.db().collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b89376c519df00b9d765025")
    }, {
        $set: {
            name: "Kovacs Eduard"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});