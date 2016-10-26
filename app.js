var express = require('express'),
  app = express(),
  http = require('http'),
  server = http.createServer(app),
	Twit = require('twit'),
	io = require('socket.io').listen(server);

var config = require('./config');
var T = new Twit(config);

var param = {
  q: 'basejump',
  count: 10
};

server.listen(8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');
});

//  search twitter for all tweets containing the word 'basejump'

T.get('search/tweets', param, gotdata);

function gotdata (err, data, response) {
	console.log(data)
};

// filter the public stream by english tweets containing `#apple`

// var stream = T.stream('statuses/filter', { track: '#basejump', language: 'en' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })