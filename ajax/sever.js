var http = require('http');
let resp = {
	code : 0,
    time : 1469981217,
    data : {
      name : 'desmond',
      gender : 'male'
    }
}
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(JSON.stringify(resp));
	console.log('listen at localhost')
}).listen(1333, '127.0.0.1');