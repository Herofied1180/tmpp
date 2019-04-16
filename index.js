const Server = require('./src/index.js');

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