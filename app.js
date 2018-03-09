const express = require('express');
const path = require('path');

const {getRandomInt} = require('./helper');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/story', (req, res) => {
  res.sendFile('/public/story.html', { root : __dirname});
});

app.get('/api/track', (req, res) => {
  res.send(req.query);
});

app.get('/api/ad', (req, res) => {
  const choice = getRandomInt(6) + 1;
  res.sendFile(`/ad-server/response${choice}.json`, { root : __dirname});
  const origin = req.query.__amp_source_origin || req.hostname;
})

app.listen(PORT, () => console.log('Server listening on port 3000!'));

function enableCors(req, res, origin, opt_exposeHeaders) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Expose-Headers',
      ['AMP-Access-Control-Allow-Source-Origin']
          .concat(opt_exposeHeaders || []).join(', '));
  if (req.query.__amp_source_origin) {
    res.setHeader('AMP-Access-Control-Allow-Source-Origin',
        req.query.__amp_source_origin);
  }
}