const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Profile} = require('../server/models/users');
const {Todo}= require('../server/models/todos');

var id = "5b4946ae40fddd31ea408cbb";

if(!ObjectID.isValid(id)){
	return console.log('ID not valid');
}

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo', todo);
// });

Profile.findById(id).then((user)=>{
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

