var express = require('express');
var app = express();
const path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var messages = [];

app.use(express.static('./public'));

app.get('/listener', function(req, res) {
  res.status(200).sendFile("./listener.html",{ root: path.resolve(__dirname, '../public') });
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

server.listen(port, function() {
  console.log("Servidor corriendo en http://localhost:"+port);
});