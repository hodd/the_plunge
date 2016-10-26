// Parametres chat OC (express+socket)
var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    twit = require('twit'),
    fs = require('fs');

// Chargement de la page index.html
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/simple.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(8080);