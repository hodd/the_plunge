var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"}); // { acollades = plusieurs valeurs en tableau}
  res.end("<p>Luke, je suis ton <strong>serveur</strong> !</p>");
});
server.listen(8080); // port 80 en ligne

// Code identique au précédent dans une variable

// var instructionsNouveauVisiteur = function(req, res) {
//   res.writeHead(200);
//   res.end('Salut tout le monde !');
// }

// var server = http.createServer(instructionsNouveauVisiteur);