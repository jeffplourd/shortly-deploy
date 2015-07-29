var app = require('./server-config.js');

// add processing function
var port = normalizePort(process.env.PORT || '4568');

app.listen(port);

console.log('Server now listening on port ' + port);

var normalizePort = function(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  } 
  return false;
}
