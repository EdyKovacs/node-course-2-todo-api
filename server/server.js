var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     },
//     completedAt: {
//         type: Number
//     }
// });

// var newTodo = new Todo({
//     text: "Cook dinner"
// });

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: "Go to mall",
    completed: true,
    completedAt: new Date()
});

newTodo.save().then((doc) => {
    console.log("Saved todo", doc);
}, (err) => {
    console.log("Unable to save the new Todo");
});