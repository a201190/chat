const express =require('express');
const app=express();
const path =require('path');
var http = require('http').Server(express);
var io = require('socket.io')(http);
io.on('connection', function(socket){
  console.log('a user connected');
});
app.use(express.static(path.resolve('../build')));
app.get('/', function(req, res){
  res.sendFile(path.resolve('../build/index.html'));
});
app.listen(5000);