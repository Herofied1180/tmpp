const Config = require('./structures/config.json');
const express = require('express');
const app = express();
app.listen(process.env.PORT || Config.port);
app.use('/web', express.static(__dirname+'/web'));
app.get('/web/favicon.ico', (req, res) => {
	res.send(express.static(__dirname+'/web/favicon.ico'));
});
const ServerReq = require('./structures/Server.js'/*'./serverold.js'*/);
const fs = require('fs');
const Server = new ServerReq();

Server.on('connection', (ws) => {
	console.log('Client connected.');
	ws.on('message', (msg) => {
		try {
			Server.handleData(ws, JSON.parse(msg));
		} catch(err) {
			console.log(err);
		}
	});
});