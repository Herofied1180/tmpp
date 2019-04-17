const ServerReq = require('./src/structures/Server.js'/*'./serverold.js'*/);
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
