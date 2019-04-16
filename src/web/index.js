const Server = require('./structures/Server.js'/*'./serverold.js'*/);
const Config = require('./structures/config.json');
const express = require('express');
const fs = require('fs');
module.exports = new Server();
const app = express();
app.listen(process.env.PORT || Config.port);
app.get('/', (req, res) => {
	res.sendFile(__dirname+'/web/index.html');
});
app.use('/web', express.static(__dirname+'/web'));