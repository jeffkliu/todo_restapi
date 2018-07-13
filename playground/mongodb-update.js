const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err){
		return console.log('Unable to connec to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5b482e62772607e3e3f42558")}, {
		$set: {
			completed: true
		}}, {
			returnOriginal: false
		}
	).then((result)=>{
		console.log(result);
	})

	db.collection('Users').update({}, {$unset: {Name:1}}, {multi:true});

	db.collection('Users').findOneAndUpdate({_id: new ObjectID("5b46c341bf4c86e1a138ddc9")}, {
		$set: {
			name: 'Jeff Kimming'
		}, $inc: {
			age: 1
		}}, {
			returnOriginal: false
		}
	).then((result)=>{
		console.log(result);
	})

	db.collection('User')

	// db.close()
	});