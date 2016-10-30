var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	twit = require('twit'),
	io = require('socket.io').listen(server);

server.listen(8080);

// Express

app.use(express.static(__dirname)); // directory of currently executing script
app.use(express.static(__dirname + '/public')); // using static files in public folder (css, img)

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
		console.log(tweets[i].text)+'\n';
		io.emit('tweet', tweets[i].text); // sending twitter event
	}

});


// poster un tweet

/*
function postTweet() {

	var newTweet = {
		status: 'hello from node.js !'
	}

	T.post('statuses/update', newTweet, tweeted);

	function tweeted (err, data, response) {
		if (err) {
			console.log("try again");
		}else {
			console.log("yeah");
		}
	}
}
*/


// citer @ user

/*
var stream = T.stream('user');

// dès que quelqu'un me suit
stream.on('follow', followed);

function followed(eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	postTweet('@' + screenName + 'Thank you for following me !');
}
*/






