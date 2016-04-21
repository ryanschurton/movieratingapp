var express = require('express');
var app = express();

app.use('/', express.static('./app'));

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log("Server Start on " + port);
	console.log("Press Ctrl + C to stop server");
});