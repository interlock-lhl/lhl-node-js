
var Quote = require('./quote');


var port = process.env['PORT'] || 3000;

var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('index', {mesg: 'Cats are awesome!'});
});

app.get('/quotes', function (req, res) {
  Quote.find().exec(function(err, quotes) {
    if (err) {
      return res.send(500, err);
    }
    res.send(quotes);
  });
});

app.post('/quotes', function (req, res) {
  var quote = new Quote(req.body);
  quote.save(function(err) {
    if (err) {
      return res.send(500, err);
    } else {
      res.send(quote);
    }
  });
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
