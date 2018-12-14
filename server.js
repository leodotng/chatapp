const express = require('express')
const app = express();
app.get('/', function(req,res) {
    res.sendFile(__dirname+'/index.html');
});

const server = require('http').Server(app);
io = require('socket.io')(server);
users={};
server.listen(3000);

io.sockets.on('connection',function(socket){
    console.log("User Connected");
socket.on('new', function(data,callback){
    console.log(data.name);
    if(data in users)
    callback(false);
    else
    {
    callback(true);
    socket.name = data.name;
    users[socket.name]=socket;
    }
})
socket.on('msg',function(data,callback){
    callback(data.msg);
    io.to(users[data.to].emit('priv',data.msg));
})
})