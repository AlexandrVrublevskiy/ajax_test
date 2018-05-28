'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
	console.log(request.method, request.url);
	if (request.url == '/style.css'){
		const css = fs.readFileSync('style.css', 'utf8');
		response.end(css);
	} else if (request.url == '/ajax.js'){
		const js = fs.readFileSync('ajax.js', 'utf8');
		response.end(js);
	} else if (request.url == '/gplaypattern_@2X.png'){
		const img = fs.readFileSync('gplaypattern_@2X.png', 'utf8');
		response.writeHead(200, {'Content-Type': 'image/png' });
		response.end(img, 'binary');
		//response.end(img);	
	} else {
		const text = fs.readFileSync('index.html', 'utf8');
		response.end(text);
	}
	
});
server.listen(3000);
console.log('server started');
