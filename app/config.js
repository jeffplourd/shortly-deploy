// translate previous db to MongoDB

// add any requirements
var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // make schemas
  console.log('mongoose connection created')
});

// connect to our database
mongoose.connect('mongodb://localhost/shortlydb');


module.exports = db;