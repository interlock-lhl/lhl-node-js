var User = {
  /**
  * @param friend string
  * @param cb function (bool success)
  */
  // friend string
  // cb callback function(result:bool)
  inviteFriend: function(friend, cb) {
    console.log("inviting friend: " + friend);
    setTimeout(cb, 1000, true);
  },

  tauntFriend: function(friend, cb) {
    console.log("taunting friend: " + friend);
    setImmediate(cb);
  },
  update: function(cb) {
    console.log('updated user');
    if (Math.random() > 0.50) {
      cb(new Error("no go!"));
    } else {
      cb(undefined, "User name")
    }
  }
}
module.exports = User;
