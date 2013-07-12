var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

var readFile = fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

var readBuffer = new Buffer(readFile);
readBuffer.write(readFile, 0);
app.get('/', function(request, response) {
  response.send(readBuffer.toString('utf8', 0, readBuffer.length));
});
