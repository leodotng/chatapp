const express = require('express')
const app = express();
app.get('/', function(req,res) {
    res.sendFile(__dirname+'/index.html');
});

const server = require('http').Server(app);
io = require('socket.io')(server);
users={};
server.listen(3000);