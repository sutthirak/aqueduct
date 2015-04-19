var express = require('express')

var app = express();

app.use(express.static('public'))
app.use(express.static('bower_components'))

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

app.get('/items',function(req, res){
	res.send('[{"name1":"item1","name2":"item2"},{"name1":"item1","name2":"item2"}]');
})

var server = app.listen(9003, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Aqueduct listening at http://%s:%s', host, port)
})
