const express = require('express');
const path = require('path');

const {getRandomInt} = require('./helper');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/story', (req, res) => {
  res.sendFile('/public/story.html', { root : __dirname});
});

app.get('/api/track', (req, res) => {
  res.send(req.query);
});

app.get('/api/ad', (req, res) => {
  assertCors(req, res);
  const choice = getRandomInt(6) + 1;
  res.sendFile(`/ad-server/response${choice}.json`, { root : __dirname});
})

app.listen(PORT, () => console.log('Server listening on port 3000!'));

function assertCors(req, res, opt_validMethods, opt_exposeHeaders) {
  var unauthorized = 'Unauthorized Request';
  var origin;
  var allowedOrigins = [
     "https://example.com",
     "https://example-com.cdn.ampproject.org",
     "https://example.com.amp.cloudflare.com",
     "https://cdn.ampproject.org" ];
  var allowedSourceOrigin = "https://example.com";  //publisher's origin
  var sourceOrigin = req.query.__amp_source_origin;

  // If same origin
  if (req.headers['amp-same-origin'] == 'true') {
      origin = sourceOrigin;
  // If allowed CORS origin & allowed source origin
  } else if (allowedOrigins.indexOf(req.headers.origin) == -1 &&
      sourceOrigin == allowedSourceOrigin) {
      origin = req.headers.origin;
  } else {
      res.statusCode = 401;
      res.end(JSON.stringify({message: unauthorized}));
      throw unauthorized;
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Expose-Headers',
      ['AMP-Access-Control-Allow-Source-Origin']
          .concat(opt_exposeHeaders || []).join(', '));
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', sourceOrigin);

}