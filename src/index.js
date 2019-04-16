const Server = require('./structures/Server.js'/*'./serverold.js'*/);
const Config = require('./structures/config.json');
const express = require('express');
const fs = require('fs');
module.exports = new Server();
const app = express();
app.listen(process.env.PORT || Config.port);
app.use('/web', express.static(__dirname+'/web'));
app.get('/favicon.ico', (req, res) => {
	res.send(express.static(__dirname+'/web/favicon.ico'));
});