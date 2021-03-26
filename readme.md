The plunge (v 0.8.1)
=========

This app works on nodeJS v7.0.0 (node -v)
It was a Node/Twitter API test.

----------
Installing :
-------------
1 - Install node modules :
> npm install


2 - Make your own config.js :
> module.exports = {
  consumer_key:         '...',
  consumer_secret:      '...',
  token:         		'...',
  token_secret:  		'...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}

... and get your Twitter keys here : https://apps.twitter.com/

3 - Start the server with "node app.js" and open your browser at "localhost:8080" to see what happens
