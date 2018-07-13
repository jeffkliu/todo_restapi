const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err){
		return console.log('Unable to connec to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany

	// db.collection('Todos').deleteMany({text: 'Eat lunch'})
	// 	.then((result)=>{
	// 		console.log(result);
	// 	})

	// deleteOne

	// db.collection('Todos').deleteOne({text:'Eat lunch'})
	// 	.then((result)=>{
	// 		console.log(result);
	// 	})

	// findOneAndDlete

	db.collection('Users').deleteMany({name: 'Jeff Liu'})
		.then((result)=>{
			console.log(result)
		})

	db.collection('Users').findOneAndDelete({ "_id": new ObjectID("5b46c37c494fb7e1aac3b50d")})
		.then((result)=>{
			console.log(result);
		})

	// db.close();
})