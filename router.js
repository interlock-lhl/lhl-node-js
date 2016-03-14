var Router = require("fast-router").Router;
var User = require('./user');
var Quote = require('./quote');

var router = new Router();

router.addRoute('/quotes', function(req, res) {
  if (req.method == "POST") {

  } else if (req.method == "GET") {
    
  }
});

router.addRoute('/*', function(req, res) {
  console.log('catch all: ' + req.url);
  res.end();
});

module.exports = router;
