const express = require('express');
const bodyParser = require('body-parser');

exports.create = function(options) {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    req.domain = req.protocol + '://' + req.get('host');
    return next();
  })

  app.use('/api', require('./api'));

  app.use(function (req, res, next) {
    res.sendStatus(404);
  })

  app.use(function (err, req, res, next) {
    res.sendStatus(err.status || 500);
  })

  return app;
}
