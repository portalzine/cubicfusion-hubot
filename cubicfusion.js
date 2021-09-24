/*
# Description:
#   Rodent Motivation
#
#   Set the environment variable HUBOT_SHIP_EXTRA_SQUIRRELS (to anything)
#   for additional motivation
#
# Dependencies:
#   None
#
# Configuration:
#   HUBOT_SHIP_EXTRA_SQUIRRELS
#
# Commands:
#   ship it - Display a motivation squirrel
#
# Author:
#   maddox
*/
(function() {
  module.exports = function(robot) {



 return robot.hear(/hello (.*)/i, function(res) {
      return res.http('https://portalzine.de/hubot.php').header('Accept', 'application/json').get()(function(err, httpRes, body) {
   var data;
      data = JSON.parse(body);
        return res.send(res.match[1]+"- Got back " + data.hello);
      });
    });

        robot.respond(/open the pod bay doors/i, function(res) {
      return res.reply("I'm afraid I can't let you do that.");
    });
    return robot.hear(/I like pie/i, function(res) {
      return res.emote("makes a freshly baked pie");
    });
  };

}).call(this);