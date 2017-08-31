var http = require('http'),
    express = require('express'),
    path = require('path');

var app = express();

app.get('/', onRequest);
app.use(express.static(path.join(__dirname, '/')));

function onRequest(request, response){
  response.sendFile(path.join(__dirname, '/index.html'));
}

function send404(response){
	response.writeHead(404, {'Context-Type' : "text/plain"});
	response.write("Error 404 : Page not Found");
	response.end();
}


http.createServer(app).listen(8888);
console.log('Server is now Running');