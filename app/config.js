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
mongoose.connect('mongodb://MongoLab-6:l.rTGPMAng31CicuR28ZRTOcpTylRBD1xLnKVakhe7k-@ds045097.mongolab.com:45097/MongoLab-6');
// mongodb://MongoLab-6:l.rTGPMAng31CicuR28ZRTOcpTylRBD1xLnKVakhe7k-@ds045097.mongolab.com:45097/MongoLab-6

module.exports = db;