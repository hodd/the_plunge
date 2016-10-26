THE PLUNGE (in progress)


Installing :

This app works on nodeJS v4.6.0 (node -v)

> npm install

> make your own config.js :

module.exports = {
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}

... and get your Twitter keys here : https://apps.twitter.com/
