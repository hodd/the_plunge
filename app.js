var express = require('express'),
	app = express(),
	http = require('http'),
	twit = require('node-tweet-stream'),
	server = http.createServer(app),
	io = require('socket.io').listen(server);

server.listen(8080);

// Express

app.use(express.static(__dirname)); // directory of currently executing script
app.use(express.static(__dirname + '/public')); // use static files in public folder (css, img)

app.get('/', function (req, res) { // GET request homepage
	res.sendFile(__dirname + '/index.html'); // respond index.html
});


// Twitter
var config = require('./config'); // twitter keys
var T = new twit(config);

var i = 0;

T.on('tweet', function (tweet) {
  //console.log('tweet received', tweet)
  console.log(i +'/ '+ tweet.text+'\n');
  io.emit('tweet', tweet);
  i++;
})

T.on('error', function (err) {
  console.log('Twitter stream error')
})

// twitter request
T.track('brexit')






