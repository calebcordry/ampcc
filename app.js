const express = require('express');

const { enableCors, getRandomInt } = require('./helper');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/story', (req, res) => {
  res.sendFile('/public/story.html', { root: __dirname });
});

app.get('/essence', (req, res) => {
  res.sendFile('/public/essence.html', { root: __dirname });
});

app.get('/api/track', (req, res) => {
  res.send(req.query);
});

app.get('/api/ad', (req, res) => {
  const choice = getRandomInt(5) + 1;
  const origin = req.query.__amp_source_origin || req.hostname;
  enableCors(req, res, origin);
  res.sendFile(`/ad-server/response${choice}.json`, { root: __dirname });
});

app.listen(PORT, () => console.log('Server listening on port 3000!')); // eslint-disable-line no-console
