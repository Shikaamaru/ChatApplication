const express = require('express');
const http = require ('http');

const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/public/index.html');
  });
//app.use(express.static('/public'));
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});