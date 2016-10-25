var express = require('express');           // the express library
var http = require("http");                 // the http library
var WebSocketServer = require('ws').Server; // the ws library's Server class

var server = express();                     // the express server
var httpServer = http.createServer(server); // an http server
var wss = new WebSocketServer({ server: httpServer }); // a websocket server

var _count = 0;

var ping;

// serve static files from /public:
server.use('/',express.static('public'));

// start the servers:
httpServer.listen(8080, function(){

  console.log('listening on *:8080');
});                // listen for http connections

