const express = require('express');
const path = require('path');

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
  res.sendFile('/ad-server/response1.json', { root : __dirname});
  const header = req.query.__amp_source_origin || '*'
  res.setHeader('AMP-Access-Control-Allow-Source-Origin',
      header);
})

app.listen(PORT, () => console.log('Server listening on port 3000!'));