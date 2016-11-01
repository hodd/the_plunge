var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	twit = require('twit'),
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

var param = { // twitter request
	q: 'basejump' || 'freefly' || 'wingsuit' || 'windtunnel' || 'skydiving' && 'video' || 'gopro' && 'jump' || 'fly' || 'cloud' || 'dream' || 'sky',
	count: 10,
};

// twitter connection and search
T.get('search/tweets', param, function(err, data, response) {

	var tweets = data.statuses;
	//console.log(tweets);
	for (var i = 0; i < tweets.length; i++) {
		console.log(i +'/ '+ tweets[i].text)+'\n';
		io.emit('tweet', tweets[i].text); // send twitter event
	}

});







