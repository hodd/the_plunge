var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	twit = require('twit'),
	io = require('socket.io').listen(server);

server.listen(8080);

// express, routes
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');
});


// connexion et requête twitter
function twitter() {

	var config = require('./config'); // keys
	var T = new twit(config);

	var param = { // requête
  		q: 'basejump' || 'freefly' || 'wingsuit' || 'windtunnel' || 'skydiving' && 'video' || 'gopro' && 'jump' || 'fly' || 'cloud' || 'dream' || 'sky',
  		count: 10,
	};

	T.get('search/tweets', param, gotdata);

	function gotdata (err, data, response) {
		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++) {
			var one = console.log(tweets[i].text);
		}
	}
}
twitter();

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






