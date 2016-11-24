var express = require('express'),
	app = express(),
	http = require('http'),
	twitter = require('node-tweet-stream'),
	server = http.createServer(app),
	io = require('socket.io').listen(server);

server.listen(8080);
console.log('This server runs on localhost:8080');

// Express

app.use(express.static(__dirname)); // directory of currently executing script
app.use(express.static(__dirname + '/public')); // use static files in public folder (css, img)

app.get('/', function (req, res) { // GET request homepage
	res.sendFile(__dirname + '/index.html'); // respond index.html
});

// Twitter

var config = require('./config'); // twitter keys
var T = new twitter(config);

////////// start T.get //////////
// var param = { // twitter request
// 	q: 'basejump' || 'freefly' || 'wingsuit' || 'windtunnel' || 'skydiving'
// 	&& 'video' || 'gopro' && 'jump' || 'fly' || 'cloud' || 'dream' || 'sky',
// 	count: 10,
// };
// // twitter connection and search
// T.get('search/tweets', param, function(err, data, response) {

// 	var tweets = data.statuses;
// 	//console.log(tweets);
// 	for (var i = 0; i < tweets.length; i++) {
// 		console.log(i +'/ '+ tweets[i].text)+'\n';
// 		io.emit('tweet', tweets[i].text); // sending twitter event
// 	}
// });
////////// end of T.get //////////


////////// start T stream //////////
var i = 1;

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
T.track('skydiving');
T.track('freefly');
T.track('wingsuit');
T.track('windtunnel');
T.track('basejump');
T.track('dropzone');
T.track('inclouds');
T.track('clouds');
//T.track('trump');

////////// end of T stream //////////




