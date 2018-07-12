//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');


	var result = db.collection('Users').find({name: 'Jeff Liu'})
		.toArray()
		.then((docs)=>{
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err)=>{
			return console.log('Unable to fetch to dos', err)
		});

	console.log(result);

	db.close();
});