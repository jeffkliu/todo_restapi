var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_BRONZE_URI,{
	useMongoClient: true
});

module.exports = {mongoose};

