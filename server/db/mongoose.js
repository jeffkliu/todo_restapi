var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_rmcfhbdp:i1l47guuekf87875n7fkmdj0ls@ds237641.mlab.com:37641/heroku_rmcfhbdp');

module.exports = {mongoose};
