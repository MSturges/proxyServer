var express = require('express');
var router = express.Router();
var ical = require('ical');

router.post('/post', function (req, res) {

  var url = req.body.data;

  ical.fromURL(url, {}, function(err, data) {
    var icsData = data;
    res.send(icsData);
  });
});

module.exports = router;
