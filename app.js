var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	twit = require('twit'),
	io = require('socket.io').listen(server);

var config = require('./config');
var T = new twit(config);

var param = { // requête
  q: 'basejump' || 'freefly' || 'wingsuit' && 'video' || 'gopro',
  count: 4,
};

server.listen(8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');
});


// connexion à twitter, requête, affichage résultats

function twitter() {

	T.get('search/tweets', param, gotdata);

	function gotdata (err, data, response) {
		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text);
		}
	}
}


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


// @user cité

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






