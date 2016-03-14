var http = require('http');
var user = require('./user');
var router = require('./router');

var port = process.env['PORT'] || 3000;

function handleReponse(req, res) {
  var routerParsed = router.parse(req.url);
  if (routerParsed == null) {
    res.setHeader('Status', '404');
    res.write('404 not found');
    res.end();
  }
  req.route = routerParsed;
  req.route.value(req, res);
}

var server = http.createServer(handleReponse);

server.listen(port, function() {
  console.log("Listening on " + port);
});
