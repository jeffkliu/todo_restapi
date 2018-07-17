var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('../server/db/mongoose');
var {Todo} = require('../server/models/todo');
var {User} = require('../server/models/user');

//Todo.remove()

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

// Todo.findOneAndRemove().then((result)=>{
// 	console.log(result);
// });

Todo.findByIdAndRemove('5b4d67150e3d16348bd05c72').then((result)=>{
	console.log(result);
}).catch((e)=>{
	return console.log(e);
});