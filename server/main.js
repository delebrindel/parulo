var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static('./public'));

app.get('/hello', function(req, res) {
  res.status(200).send("Hello World!");
});

io.on('connection', function(socket) {
    socket.emit({author: "Sistema "}, messages);
    socket.on('new-message', function(data) {
        io.sockets.emit('messages', data);
    });
    socket.on('new-connection', function(person) {
      io.sockets.emit('messages', {author: "Sistema", text: person + " ha iniciado sesión", type: "r-sys"});
  });
});

server.listen(8080, function() {
  console.log("Servidor corriendo en http://localhost:8080");
});