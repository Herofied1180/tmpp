const Config = require('./structures/config.json');
const express = require('express');
const app = express();
app.listen(process.env.PORT || Config.port);
app.use('/web', express.static(__dirname+'/web'));
app.get('/web/favicon.ico', (req, res) => {
	res.send(express.static(__dirname+'/web/favicon.ico'));
});