var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

app.route('/:some_name')

  .post(function(req, res) {
    var data = {"msg": "data"};
    fs.writeFileSync('file-house/some_name.json', JSON.stringify(data));
    res.send("A file has been created.");
  })

  .get(function(req, res) {
    var readTheFile = fs.readFileSync('file-house/some_name.json', 'utF8');
    var fileContents = JSON.parse(readTheFile);
    res.json(fileContents);
    console.log("A file has been sent.");
  });


var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server running on PORT 3000');
});
