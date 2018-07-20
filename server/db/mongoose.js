var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_BRONZE_URI);

module.exports = {mongoose};

