const getRandomInt = max =>
  Math.floor(Math.random() * Math.floor(max));

function enableCors(req, res, origin, optExposeHeaders) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader(
    'Access-Control-Expose-Headers',
    ['AMP-Access-Control-Allow-Source-Origin']
      .concat(optExposeHeaders || []).join(', '),
  );
  if (req.query.__amp_source_origin) {
    res.setHeader(
      'AMP-Access-Control-Allow-Source-Origin',
      req.query.__amp_source_origin,
    );
  }
}

module.exports = {
  getRandomInt,
  enableCors,
};
