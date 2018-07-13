//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result)=>{
	// 	if(err){
	// 		return console.log('Unable to create document.')
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	text: 'MongoDB is cooler than MySQL',
	// 	name: 'Jeff Liu',
	// 	age: 25,
	// 	location: "Newark, CA"
	// }, (err,result)=>{
	// 	if(err){
	// 		return console.log('Can\'t create new document...');
	// 	} 

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.collection('Todos').insertOne({
		text: 'Eat lunch',
		completed: false
	}, (err,result)=>{
		if(err){
			return console.log('Can\'t create new document...');
		} 

	});

	db.close();
});