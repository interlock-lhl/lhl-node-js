var Router = require("fast-router").Router;
var User = require('./user');

var router = new Router();

router.addRoute("/", function(req, res) {
  console.log("request");
  res.write('thankyou');
  res.end();
});

router.addRoute("/user/:id", function(req, res) {
  User.inviteFriend("homer", function(success) {
    if (success === true) {
      User.tauntFriend("home", function() {
        User.update(function(err, username) {
          if (err) {
            res.setHeader("Status", 500);
            res.write("<P>Error: " + err.message + "</p>");
          } else {
            res.write("<p>friend added</p>");
            res.write("<p>friend taunted</p>");
            res.write("<p>User updated: " + username + "</p>");
          }

          res.end();
        });
      });
    } else {
      res.write("no friends for you");
      res.end();
    }
  });
  console.log("request user");

});

router.addRoute('/*', function(req, res) {
  console.log('catch all: ' + req.url);
  res.end();
});

module.exports = router;
