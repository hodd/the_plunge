var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Hello Node !</title>'+
'    </head>'+
'    <body>'+
'     	<p>Hödd, je suis ton <strong>serveur</strong> !</p>'+
'		<p>On a du boulot, hop hop hop ! ^^</p>'
'    </body>'+
'</html>');
    res.end();
});
server.listen(8080);