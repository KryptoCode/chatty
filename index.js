var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var messages = [];

app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function(request, res, next) {
	res.status(200).json({ messages: messages });
});

app.post('/messages', function(request, res, next) {
	messages.push(request.body.message);
	res.status(200).json({ messages: messages });
});

app.listen(3000);


